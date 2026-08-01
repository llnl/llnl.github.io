---
title: 'Visualizations: Overview'
layout: default
description: See how LLNL's open source programming has evolved over time with a look at activity across Lab repos.
permalink: /visualize/
breadcrumb: Visualization
menus:
  visualization:
    title: Overview
    weight: 1
---

<link rel="stylesheet" type="text/css" href="/assets/css/visualize/graphstyle.css" />

<div class="col-12 col-xxl-2 d-none d-xxl-block pe-5 sticky-top jump-links float-start vh-100" id="llnl-side-container">
  <div class="nav pt-2 ps-3 sticky-top d-flex flex-column" aria-orientation="vertical">
    {% include components/icon-list-item.html title='Creation History' icon='fa-chart-line' %}
    {% include components/icon-list-item.html title='Activity Across all Repos' url="#activity-across-all-repos" icon='fa-chart-area' %}
    {% include components/icon-list-item.html title='Pull Requests' url="#pull-requests" icon='fa-code-pull-request' %}
    {% include components/icon-list-item.html title='Issues' url="#repository-issues" icon='fa-circle-x' %}
    {% include components/icon-list-item.html title='Language Breakdown' url="#language-breakdown" icon='fa-language' %}
    {% include components/icon-list-item.html title='Repository Topics' url="#repository-topics" icon='fa-filter' %}
    {% include components/icon-list-item.html title='Repo Licenses' icon='fa-chart-pie' %}
  </div>
</div>

<div class="container" markdown="1">
{% include components/icon-header.html title='All Repositories' icon='fa-chart-scatter' tag="h2" %}

Lawrence Livermore National Lab has contributed to open source repositories for years. See how our commits have evolved over time and how our open source contributions have grown.

<!-- Preset vis display areas -->
### Creation History

<div class="border-bottom-gradient-impact-extreme thin border-bottom-1 pb-5">
  <svg class="repoCreationHistory d-block mx-auto my-0"></svg>
</div>

### Activity Across All Repos

<div class="border-bottom-gradient-impact-extreme thin border-bottom-1 pb-5">
  <svg class="repoActivityChart d-block mx-auto my-0"></svg>
</div>

<div class="row">
  <div class="col-12 col-md-6 border-bottom-gradient-impact-extreme thin border-bottom-1 pb-5" markdown="1">
### Pull Requests
<svg class="repoPulls"></svg>
  </div>
  <div class="col-12 col-md-6 border-bottom-gradient-impact-extreme thin border-bottom-1 pb-5" markdown="1">
### Repository Issues
<svg class="repoIssues"></svg>
  </div>
</div>

<div class="row">
  <div class="col-12 col-md-6 border-bottom-gradient-impact-extreme thin border-bottom-1 pb-5" markdown="1">
### Language Breakdown
<div class="text-center">
<svg class="languagePie"></svg>
</div>
  </div>
  <div class="col-12 col-md-6 border-bottom-gradient-impact-extreme thin border-bottom-1 pb-5" markdown="1">
### Repository Topics
<div class="text-center">
<svg class="topicCloud"></svg>
</div>
  </div>
</div>

### Repo Licenses

<svg class="licenseSunburst d-block mx-auto my-0"></svg>

</div>

<!-- Load basic D3 and helper scripts -->
<script src="/assets/js/libs/d3.js" charset="UTF-8"></script>
<script type="text/javascript" src="/assets/js/libs/d3-tip.js"></script>
<script type="text/javascript" src="/assets/js/libs/d3.layout.cloud.js"></script>
<script type="text/javascript" src="/assets/js/libs/d3-simple-slider.min.js"></script>
<script type="text/javascript" src="/assets/js/visualize/helpers.js"></script>

<!-- Load drawing JS -->
<script type="text/javascript" src="/assets/js/visualize/line_repoCreationHistory.js"></script>
<script type="text/javascript" src="/assets/js/visualize/line_repoActivityExplore.js"></script>
<script type="text/javascript" src="/assets/js/visualize/scatter_repoPulls.js"></script>
<script type="text/javascript" src="/assets/js/visualize/scatter_repoIssues.js"></script>
<script type="text/javascript" src="/assets/js/visualize/pie_languageExplore.js"></script>
<script type="text/javascript" src="/assets/js/visualize/cloud_topics.js"></script>
<script type="text/javascript" src="/assets/js/visualize/sunburst_licenses.js"></script>

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
    window.addEventListener('load', function() {
        draw_line_repoCreationHistory('repoCreationHistory');
        draw_line_repoActivity('repoActivityChart');
        draw_scatter_repoPulls('repoPulls');
        draw_scatter_repoIssues('repoIssues');
        draw_pie_language('languagePie');
        draw_cloud_topics('topicCloud');
        draw_sunburst_licenses('licenseSunburst');
    });
</script>
