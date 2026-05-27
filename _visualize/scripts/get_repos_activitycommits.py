from scraper.github import queryManager as qm
from os import environ as env
import re
from datetime import datetime, timezone
import time

ghDataDir = env.get("GITHUB_DATA", "../github-data")
datfilepath = "%s/intRepos_ActivityCommits.json" % ghDataDir
query_in = "/repos/OWNNAME/REPONAME/stats/commit_activity"

# Read repo info data file (to use as repo list)
inputLists = qm.DataManager("%s/intReposInfo.json" % ghDataDir, True)
# Populate repo list
repolist = []
print("Getting internal repos ...")
repolist = sorted(inputLists.data["data"].keys())
print("Repo list complete. Found %d repos." % (len(repolist)))

# Initialize data collector
dataCollector = qm.DataManager(datfilepath, False)
dataCollector.data = {"data": {}}

# Initialize query manager
queryMan = qm.GitHubQueryManager(maxRetry=3, retryDelay=2)

""" Unique handling for queries with especially slow response times.
    Prioritizes successful collection from at many repos as possible by moving
    on and coming back to repos that we're still waiting on,
    (rather than awaiting one at a time).
    Also allows for graceful termination of the script when exceeding a given
    time limit, preserving any successfully collected data."""
# Set maximum loop count (like maxRetry, but for full list, not per-query)
maxLoops = 5
# Set execution time limit (can use `None` to remove limit)
maxRuntime = 5.5 * 60 * 60  # 5.5 hrs as seconds (suited to GitHub job limits)
# Counters
endTime = None if maxRuntime is None else time.monotonic() + maxRuntime
loopCount = 0

# Iterate through internal repos
print("Gathering data across multiple queries...")
while (endTime is None or time.monotonic() < endTime) and (loopCount < maxLoops):
    loopCount += 1
    print("\nPass %s (max %s)" % (loopCount, maxLoops))

    for repo in repolist:

        # Stop iteration if time limit exceeded
        if endTime is not None and time.monotonic() >= endTime:
            print("\nWarning: Script time limit reached.")
            print(
                "Runtime exceeded %s seconds during Pass %s of %s"
                % (maxRuntime, loopCount, maxLoops)
            )
            break

        print("\n'%s'" % (repo))

        # Only check repos that weren't recorded in previous loops.
        if "data" in dataCollector.data.keys() and repo in dataCollector.data["data"]:
            print("Already recorded data for '%s'" % (repo))
            continue

        r = repo.split("/")

        gitquery = re.sub("OWNNAME", r[0], query_in)
        gitquery = re.sub("REPONAME", r[1], gitquery)

        try:
            outObj = queryMan.queryGitHub(gitquery, rest=True)
        except Exception as error:
            print("Warning: Could not complete '%s'" % (repo))
            print(error)
            continue

        for item in outObj:
            # Remove per-day data, keep only weekly totals
            try:
                del item["days"]
            except KeyError:
                pass
            # Convert unix timestamps into standard dates (rounded to nearest week to improve aggregate data)
            weekinfo = datetime.fromtimestamp(
                item["week"], tz=timezone.utc
            ).isocalendar()
            weekstring = str(weekinfo[0]) + "-W" + str(weekinfo[1]) + "-1"
            item["week"] = datetime.strptime(weekstring, "%Y-W%W-%w").strftime(
                "%Y-%m-%d"
            )

        # Update collective data
        dataCollector.data["data"][repo] = outObj

        print("'%s' Done!" % (repo))

print("\nCollective data gathering complete!")

# Write output file
dataCollector.fileSave(newline="\n")

print("\nDone!\n")
