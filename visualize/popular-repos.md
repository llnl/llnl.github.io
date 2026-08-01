---
title: Popular Repos
layout: default
description: Get details about our most popular repos, including how usage has grown over time.
permalink: /visualize/popular-repos/
breadcrumb: Popular Repos
menus:
  visualization:
    weight: 4
---


<div class="d-none d-lg-block col-xxl-2 pe-5 d-none d-xxl-block sticky-top jump-links float-start vh-100" id="llnl-side-container">
  <div class="nav pt-2 ps-3 sticky-top d-flex flex-column" aria-orientation="vertical">
    {% include components/icon-list-item.html title='Creation History' icon='fa-chart-line' %}
    {% include components/icon-list-item.html title='Activity Across Top 10 Repos' url="#activity-across-top-10-repos" icon='fa-chart-area' %}
    {% include components/icon-list-item.html title='Commits' icon='fa-code-commit' %}
    {% include components/icon-list-item.html title='Line Edits' icon='fa-file-pen' %}
    {% include components/icon-list-item.html title='Repo Licenses' icon='fa-chart-pie' %}
  </div>
</div>

<link rel="stylesheet" type="text/css" href="/assets/css/visualize/graphstyle.css" />

<div class="container" markdown="1">
## LLNL Repos Over Time

We contribute to a variety of code repositories, some of which fuel internal work here at the Lab and others that are used widely by enterprise companies, academic institutions, and other national labs.

<!-- Preset vis display areas -->
<svg class="listPopularRepos d-block mx-auto my-0"></svg>
<div class="border-bottom-gradient-impact-extreme thin border-bottom-1 chart-divide">
    <svg class="cluster d-block mx-auto my-0"></svg>
</div>

### Creation History

<div class="border-bottom-gradient-impact-extreme thin border-bottom-1 chart-divide">
  <svg class="repoCreationHistory d-block mx-auto my-0"></svg>
</div>

### Activity Across Top 10 Repos

<div class="border-bottom-gradient-impact-extreme thin border-bottom-1 chart-divide">
  <svg class="repoActivityChart d-block mx-auto my-0"></svg>
</div>

<div class="border-bottom-gradient-impact-extreme thin border-bottom-1 chart-divide" markdown="1">
### Commits
<div class="text-center">
<svg class="commitPie"></svg>
</div>
</div>

### Repo Licenses

<div class="">
<svg class="popularLicenses d-block mx-auto my-0"></svg>
</div>

</div>

<!-- Load basic D3 and helper scripts -->
<script src="/assets/js/libs/d3.min.js" charset="UTF-8"></script>
<script type="text/javascript" src="/assets/js/libs/d3-tip.js"></script>
<script type="text/javascript" src="/assets/js/libs/d3.layout.cloud.js"></script>
<script type="text/javascript" src="/assets/js/libs/d3-simple-slider.min.js"></script>
<script type="text/javascript" src="/assets/js/visualize/helpers.js"></script>

<!-- Load drawing JS -->
<script type="text/javascript" src="/assets/js/visualize/largeRepos/cluster_repoSize.js"></script>
<script type="text/javascript" src="/assets/js/visualize/largeRepos/line_repoActivity.js"></script>
<script type="text/javascript" src="/assets/js/visualize/largeRepos/generate_popularRepos.js"></script>
<script type="text/javascript" src="/assets/js/visualize/largeRepos/line_repoCreationHistory.js"></script>
<script type="text/javascript" src="/assets/js/visualize/largeRepos/sunburst_licenses.js"></script>
<script type="text/javascript" src="/assets/js/visualize/largeRepos/list_popularRepos.js"></script>
<script type="text/javascript" src="/assets/js/visualize/largeRepos/pie_activityCommits.js"></script>

<script>
    // GiHub Data Directory
    var ghDataDir = '/visualize/github-data';
    // Global chart standards
    var stdTotalWidth = 500,
        stdTotalHeight = 400;
    var stdMargin = { top: 40, right: 40, bottom: 40, left: 40 },
        stdWidth = stdTotalWidth - stdMargin.left - stdMargin.right,
        stdHeight = stdTotalHeight - stdMargin.top - stdMargin.bottom,
        stdMaxBuffer = 1.07;
    var stdDotRadius = 4,
        stdLgndDotRadius = 5,
        stdLgndSpacing = 20;
    // Call draw functions
    var popularityURL = ghDataDir + '/intReposInfo.json';
    var popularityFiles = [popularityURL];
    var mostPopularRepositories = [];
    var cutOffSize = 10;
    Promise.all(popularityFiles.map(url => d3.json(url))).then(values => {
        mostPopularRepositories = generate_popularRepos(values[0], cutOffSize);
    }).then(() => {
        draw_cluster('cluster');
        draw_line_repoCreationHistory('repoCreationHistory', mostPopularRepositories);
        draw_line_repoActivity('repoActivityChart');
        draw_sunburst_licenses('popularLicenses');
        draw_pie_commits('commitPie');
        draw_popularRepos('listPopularRepos', 5, true);
    });

</script>
