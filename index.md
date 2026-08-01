---
title: LLNL Software Catalog
layout: project-index
description: A portal for open source projects developed at Lawrence Livermore National Laboratory.
tags: 
breadcrumb: Home
---

# LLNL Software Catalog
{:.d-none}

<div class="hero-home">
    <div class="container d-flex align-items-center">
        <div class="row text-white">
            <div class="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-8">
                <div class="hero-content-container d-lg-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
                    <img class="me-lg-3 logo mb-4 mb-lg-0" src="/assets/images/logomark-unbounded-alternative-lab-white.png" />
                    <div class="content d-block">
                        <p class="h1 text-balance fw-light">Welcome to the LLNL software catalog</p>
                        <p class="text-balance fs-18">Your portal for open source projects developed at Lawrence Livermore National Laboratory</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="bg-light-blue">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-8 mb-2 mt-2">
                <p class="cta-text"><strong>Learn how to use a modern HPC software stack!</strong> Join us throughout the summer for free, guided tutorials demonstrating several open source projects. All experience levels are welcome.</p>
            </div>
            <div class="col-12 col-md-4 text-center d-flex align-items-center justify-content-center justify-content-lg-end mb-1 mb-md-0">
                {% include components/button.html content="Learn more" url="https://hpcic.llnl.gov/2026-hpc-tutorials" icon="fa-calendar-days" tag="a" %}
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-8 mb-2 mt-2">
                <p class="cta-text"><strong>Looking for proprietary software solutions?</strong> The Innovation and Partnerships Office works with businesses interested in distributing software or incorporating LLNL software into commercial products.</p>
            </div>
            <div class="col-12 col-md-4 text-center d-flex align-items-center justify-content-center justify-content-lg-end mb-1 mb-md-0">
                {% include components/button.html content="Browse proprietary software" url="https://softwarelicensing.llnl.gov" icon="fa-search" tag="a" %}
            </div>
        </div>
    </div>
</div>

<div ng-app="app" ng-controller="ProjectController" ng-show="categories.length" class="clearfix contain-paint" ng-cloak>
    {% raw %}
    <div class="d-none d-xl-block sticky-xxl-top mt-3" ng-if="categories.length">
        <ul class="col-12 col-xl-2 float-lg-start ps-3 d-flex flex-column list-unstyled" id="llnl-side-container">
            <li role="button" ng-repeat="category in categories | orderBy: 'title'">
                <div ng-if="!category.url" ng-click="setCategory(category)" ng-class="{'llnl-list-item d-flex align-items-center px-2 my-2 fs-14 fw-medium': true, 'active text-impact-blue': category.hash === activeCategory.hash }">
                    <div ng-if="category.icon.path" class="icon me-3 d-flex align-items-center justify-content-center">
                        <img class="logo" src="{{ category.icon.path }}" />
                    </div>
                    <div ng-if="category.icon.fa" class="icon me-3 d-flex align-items-center justify-content-center" style="width: 42px; height: 42px;">
                        <i class="fa fa-light {{ category.icon.fa }} fa-lg"></i>
                    </div>
                    <span>{{ category.title }}</span>
                </div>
                <a role="button" ng-if="category.url" href="{{ category.url }}" ng-class="{'llnl-list-item d-flex align-items-center px-2 my-2 fs-14 fw-medium text-decoration-none text-body-default': true, 'active text-impact-blue': category.hash === activeCategory.hash, 'external-link': category.url }">
                    <div ng-if="category.icon.path" class="icon me-3 d-flex align-items-center justify-content-center">
                        <img class="logo" src="{{ category.icon.path }}">
                    </div>
                    <div ng-if="category.icon.fa" class="icon me-3 d-flex align-items-center justify-content-center" style="width: 42px; height: 42px;">
                        <i class="fa fa-light {{ category.icon.fa }} fa-lg"></i>
                    </div>
                    <span>{{ category.title }}</span>
                </a>
            </li>
        </ul>
    </div>
    {% endraw %}
    <div class="container">
        <div class="row">
            <div class="col-12">
                {% include breadcrumbs.html %}
                {% raw %}
                <div class="d-xl-none">
                    <select class="form-select mb-3" aria-label=".form-select-lg" ng-model="activeCategory" ng-change="onCategoryChange()" ng-options="category as category.title for category in categories">
                    </select>
                </div>
                <div class="row mb-3" ng-show="activeCategory">
                    <div class="offset-sm-3 col-12 col-sm-6 text-center">
                        <div class="category d-flex justify-content-center align-items-center">
                            <h3 class="my-0 fw-bold active-category-title">
                                <img ng-if="activeCategory.icon.path" class="me-2" src="{{ activeCategory.icon.path }}" alt="{{ activeCategory.icon.alt }}" height="30" />
                                <i ng-if="!activeCategory.icon.path && activeCategory.icon.fa" class="me-2 fa fa-light {{ activeCategory.icon.fa }} fs-20 align-middle"></i>
                                {{ activeCategory.title }}
                            </h3>
                        </div>
                        <p class="fw-semibold active-category-description">{{ activeCategory.description.short }}</p>
                    </div>
                </div>
                <div class="row fs-14 fw-medium">
                    <div class="col-12 col-lg-6 d-flex align-items-center mb-4 mb-md-0">
                        <input class="form-control fs-14 fw-semibold" type="text" name="query" placeholder="What are you looking for?" ng-model="query" ng-keyup="trackSearchQuery(activeCategory, query)" ng-blur="trackSearchQuery(activeCategory, query)" ng-change="trackProjectImpressions()" />
                        <i class="fa fa-light fa-search text-impact-blue ms--2"></i>
                    </div>
                    <div class="col-7 col-md-6 col-lg-3 d-flex align-items-center text-quantum-slate mt-md-2">
                    <!-- comment out proprietary repos toggle
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" ng-model="showProprietaryRepositories" style="height: 1.5em; width: 3em;" ng-change="trackProjectImpressions()" >
                            <label class="form-check-label fw-medium fs-14 ms-2" for="flexSwitchCheckDefault">Show proprietary repos </label><i class="fa fa-light fa-lock ms-2"></i>
                        </div>
                    -->
                    </div>
                    <div class="col-5 col-md-6 col-lg-3 row align-items-center justify-content-end px-0 text-quantum-slate mt-md-2">
                        <div class="col-4 text-end">
                            <label class="col-form-label fw-medium">Sort by</label>
                        </div>
                        <div class="col-8 px-0">
                            <select class="form-control form-select fs-14 fw-semibold sort-by" id="sort" name="sort" ng-model="sortBy" ng-change="trackProjectImpressions()" >
                                <option value="-stargazerCount">Stars</option>
                                <option value="owner.login">Organization</option>
                                <option value="name">Repo Name</option>
                                <option value="-forks.totalCount">Forks</option>
                                <option value="-pullRequests_Merged.totalCount">Pull Requests</option>
                            </select>
                        </div>
                    </div>  
                </div>
                <div class="row mt-3 gx-27 gy-27" id="repository-container">
                    <div class="col-12 col-md-6 col-xl-4 text-decoration-none text-black llnl-card-perspective transition-slide-up" ng-repeat="repository in filteredRepositories = (repositories | filter:filterByCategory | filter:filterByQuery | filter:filterByPrivacy) | orderBy: sortBy : sortByReverse | limitTo: perPage : perPage * (pageNumber - 1)" data-track-content="" data-content-name="{{ repository.displayName }}" data-content-piece="{{ repository.logo ? '/assets/images/logos/' + repository.logo : '/assets/images/logomark.png' }}" data-content-target="{{ repository.url }}" >
                        <div class="llnl-card d-flex flex-column justify-content-between box-shadow-16 text-decoration-none text-black bg-white">
                            <div class="header text-center mt-4 position-relative px-4">
                                <i ng-if="repository.isProprietary" class="fa fa-light fa-lock float-end translate-middle-x position-absolute top-5 right-5" style="top: 1em; right: 1em;"></i>
                                <div class="image-decorator d-inline-block box-shadow-20-inset">
                                        <div class="d-flex align-items-center justify-content-center" style="height: 100%;">
                                            <img ng-if="!repository.logo" class="logo" src="/assets/images/logomark.png" />
                                            <img ng-if="repository.logo" class="logo" src="{{ '/assets/images/logos/' + repository.logo }}" />
                                    </div>
                                </div>
                                <h3 class="mt-3 fs-20">
                                    <a class="d-inline-block text-black text-decoration-underline-hover text-nowrap overflow-hidden text-truncate" href="{{ repository.url }}" style="max-width: min(30ch, 100%)">{{ repository.displayName }}</a>
                                </h3>
                            </div>
                            <div class="content px-4">
                                <div class="metadata d-flex justify-content-between text-quantum-slate">
                                    <div class="text-start">
                                        <p class="mt-2 mb-0" ng-if="repository.licenseInfo">
                                            <i class="fa fa-light fa-file-certificate me-1"></i>
                                            <span ng-if="repository.licenseInfo.nickname" class="fw-semibold">{{ repository.licenseInfo.nickname }}</span>
                                            <span ng-if="!repository.licenseInfo.nickname" class="fw-semibold">{{ repository.licenseInfo.name }}</span>
                                        </p>
                                        <p class="mt-2 mb-0" ng-if="repository.visibility">
                                            <i class="fa fa-light fa-shield-keyhole me-1"></i>
                                            <span class="fw-semibold">{{ repository.visibility.name }}</span>
                                        </p>
                                        <p class="mt-1" ng-if="repository.primaryLanguage">
                                            <i class="fa fa-light fa-code me-1"></i>
                                            <span class="fw-semibold">{{ repository.primaryLanguage.name }}</span>
                                        </p>
                                    </div>
                                    <div class="text-end">
                                        <p class="mt-2 mb-0" ng-if="repository.stargazerCount">
                                            <i class="fa fa-light fa-star me-1"></i>
                                            <span class="fw-semibold fixed-width-5">{{ repository.stargazerCount | number }}</span>
                                        </p>
                                        <p class="mt-1" ng-if="repository.forks">
                                            <i class="fa fa-light fa-code-fork me-1"></i>
                                            <span class="fw-semibold d= fixed-width-5">{{ repository.forks.totalCount | number }}</span>
                                        </p>
                                    </div>
                                </div>
                                <p class="description">{{ repository.description.substring(0, 185).trim() }}
                                    <span ng-if="repository.description.length > 185">&#x2026;</span>
                                </p>
                            </div>
                            <div class="links">
                                <hr class="bg-quantum-slate border-2" />
                                <div class="d-flex justify-content-around my-3 links">
                                    <a ng-if="repository.url && repository.url.indexOf('github.com') > -1" class="text-decoration-none text-black text-black-hover" href="{{ repository.url }}">
                                        <i class="fa fa-light fa-github fw-semibold text-impact-blue me-1"></i> Github</a>
                                    <a ng-if="repository.url && repository.url.indexOf('gitlab.') > -1" class="text-decoration-none text-black text-black-hover" href="{{ repository.url }}">
                                        <i class="fa fa-light fa-gitlab fw-semibold text-impact-blue me-1"></i> Gitlab</a>
                                    <a ng-if="repository.homepageUrl" class="text-decoration-none text-black text-black-hover" href="{{ repository.homepageUrl }}">
                                        <i class="fa fa-light fa-globe fw-semibold text-impact-blue text-black-hover me-1"></i> Website </a>
                                    <a ng-if="repository.documentation" class="text-decoration-none text-black text-black-hover" href="{{ repository.documentation }}">
                                        <i class="fa fa-light fa-file-lines fw-semibold text-impact-blue text-black-hover me-1"></i> Docs </a>
                                    <a ng-if="repository && !repository.isProprietary" class="text-decoration-none text-black text-black-hover" href="{{ '/repo/#!/' + repository.nameWithOwner}}">
                                        <i class="fa fa-light fa-chart-mixed fw-semibold text-impact-blue text-black-hover me-1"></i> Data </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {% endraw %}
            </div>
            <div class="row my-5">
                <div class="col-12 text-center mx-auto" ng-if="filteredRepositories.length / perPage > 1">
                    <nav aria-label="Pagination fs-13">
                        <ul class="pagination justify-content-center box-shadow-3-6 mx-auto w-fit-content overflow-hidden rounded">
                            {% raw %}
                            <li class="page-item d-inline-block" ng-if="pageNumber > 1">
                                <a class="page-link text-impact-blue text-white-hover border-0 rounded" role="button" ng-click="setPage(pageNumber - 1)"><i class="fa fa-light fa-chevrons-left"></i></a>
                            </li>
                            <li class="page-item d-inline-block" ng-repeat="i in range(Math.max(pageNumber - 3, 1), pageNumber - 1)">
                                <a class="page-link border-0" role="button" ng-click="setPage(i)">{{ i }}</a>
                            </li>
                            <li class="page-item d-inline-block">
                                <a class="page-link border-0 active">{{ pageNumber }}</a>
                            </li>
                            <li class="page-item d-inline-block" ng-repeat="i in range(pageNumber + 1, Math.ceil(Math.min(pageNumber + 3, filteredRepositories.length / perPage)) )">
                                <a class="page-link border-0" role="button" ng-click="setPage(i)">{{ i }}</a>
                            </li>
                            <li class="page-item d-inline-block" ng-if="pageNumber < filteredRepositories.length / perPage">
                                <a class="page-link cursor-pointer text-impact-blue text-white-hover border-0 rounded" role="button" ng-click="setPage(pageNumber + 1)"><i class="fa fa-light fa-chevrons-right"></i></a>
                            </li>
                            {% endraw %}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>

<!--script src="/assets/js/libs/angular.min.js"></script-->
<script src="/assets/js/libs/angular.js"></script>
<script src="/assets/js/libs/angular-animate.min.js"></script>
<script src="/assets/js/projects/index.js"></script>
