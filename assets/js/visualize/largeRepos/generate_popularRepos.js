function generate_popularRepos(obj, cutoff) {
    // Turn json obj into desired working data
    const data = [];

    for (var repoWOwner in obj['data']) {
        const repoAndOwner = repoWOwner.split('/');
        const repoObj = obj['data'][repoWOwner];
        data.push({ name: repoAndOwner[1], owner: repoAndOwner[0], forks: repoObj['forks']['totalCount'], stars: repoObj['stargazerCount'], contributors: repoObj['mentionableUsers']['totalCount'] });
    }

    data.sort((a, b) => b.stars - a.stars);

    return data.slice(0, cutoff);
}