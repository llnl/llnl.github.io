---
title: Repo
layout: default
description: Generic template page that the end-user does not see.
permalink: /repo/
breadcrumb: Repository
---

<link rel="stylesheet" type="text/css" href="/assets/css/visualize/repostyle.css" />
<link rel="stylesheet" type="text/css" href="/assets/css/visualize/graphstyle.css" />

{% raw %}
<div id="mainContent" class="container" ng-app="app" ng-controller="repoDataController" ng-cloak>
    <div class="row">
        <div class="col-12 col-md-8 col-lg-9 d-flex">
            <div class="">
                <div class="image-decorator large d-inline-block box-shadow-20-inset">
                    <div class="d-flex align-items-center justify-content-center h-100">
                        <img ng-if="repo.logo === null" class="logo" src="/assets/images/logomark.png" />
                        <img ng-if="repo.logo" class="logo" src="{{ '//software.llnl.gov/assets/images/logos/' + repo.logo }}" />
                    </div>
                </div>
            </div>
            <div class="ps-3">
                <h2 class="my-0"><a class="text-azure" href="{{ repo.url }}">{{ repo.name }}</a></h2>
                <p class="mt-3 mb-0">{{ repo.description }}</p>
            </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 py-3 mt-3 mt-md-0 bg-light-blue text-quantum-slate row">
            <div class="col-6">
                <p><i class="fa fa-file-certificate"></i> {{ repo.licenseInfo.name }}</p>
                <p class="my-0"><i class="fa fa-code"></i> {{ repo.primaryLanguage.name }}</p>
            </div>
            <div class="col-6 text-end">
                <p><i class="fa fa-star"></i> {{ repo.stargazerCount | number }}</p>
                <p class="my-0"><i class="fa fa-code-fork"></i> {{ repo.forks.totalCount | number }}</p>
            </div>
        </div>
    </div>
    <!-- Preset vis display areas -->
    <div class="row border-bottom-gradient-impact-extreme thin border-bottom-1 chart-divide">
        <div class="col-12">
            <svg class="repoActivityChart d-block mx-auto my-0"></svg>
        </div>
    </div>
    <div class="row border-bottom-gradient-impact-extreme thin border-bottom-1 chart-divide">
        <div class="col-12">
            <svg class="pieUsers d-block mx-auto my-0"></svg>
        </div>
    </div>
    <div class="row">
        <div ng-show="count.pulls" class="col-12 col-md-6 text-center border-bottom-gradient-impact-extreme thin border-bottom-1 chart-divide">
            <svg class="piePulls"></svg>
        </div>
        <div ng-show="count.issues" class="col-12 col-md-6 text-center border-bottom-gradient-impact-extreme thin border-bottom-1 chart-divide">
            <svg class="pieIssues"></svg>
        </div>
    </div>
    <div class="row border-bottom-gradient-impact-extreme thin border-bottom-1 chart-divide">
        <div class="col-12">
            <svg class="repoCreationHistory d-block mx-auto my-0"></svg>
        </div>
    </div>
    <div ng-if="repo.languages.totalCount || repo.repositoryTopics.totalCount" class="row">
        <div ng-show="repo.languages.totalCount" ng-class="{'text-center col-12': true, 'col-md-6 border-bottom-gradient-impact-extreme thin border-bottom-1 chart-divide': repo.repositoryTopics.totalCount > 0}">
            <svg class="languagePie"></svg>
        </div>
        <div ng-show="repo.repositoryTopics.totalCount" class="col-12 col-md-6 text-center border-bottom-gradient-impact-extreme thin border-bottom-1 chart-divide">
            <svg class="topicCloud"></svg>
        </div>
    </div>
</div>

{% endraw %}

<!-- Load basic D3 and helper scripts -->
<script src="/assets/js/libs/d3.min.js" charset="UTF-8"></script>
<script type="text/javascript" src="/assets/js/libs/d3-tip.js"></script>
<script type="text/javascript" src="/assets/js/libs/d3.layout.cloud.js"></script>
<script type="text/javascript" src="/assets/js/visualize/helpers.js"></script>

<!-- Load drawing JS -->
<script type="text/javascript" src="/assets/js/visualize/line_repoActivity.js"></script>
<script type="text/javascript" src="/assets/js/visualize/pie_repoUsers.js"></script>
<script type="text/javascript" src="/assets/js/visualize/pie_repoPulls.js"></script>
<script type="text/javascript" src="/assets/js/visualize/pie_repoIssues.js"></script>
<script type="text/javascript" src="/assets/js/visualize/line_repoCreationHistory.js"></script>
<script type="text/javascript" src="/assets/js/visualize/pie_language.js"></script>
<script type="text/javascript" src="/assets/js/visualize/cloud_topics.js"></script>

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
</script>

<!--script src="/assets/js/libs/angular.min.js"></script-->
<script src="/assets/js/libs/angular.js"></script>
<script src="/assets/js/libs/angular-animate.min.js"></script>
<script src="/assets/js/repo/repo-dynamic.js"></script>
