---
title: Dependencies
layout: default
description: See how LLNL both benefits from and contributes to a flourishing open source ecosystem.
permalink: /visualize/dependencies/
breadcrumb: Dependencies
menus:
  visualization:
    weight: 3
---

{% raw %}

<link rel="stylesheet" type="text/css" href="/assets/css/visualize/graphstyle.css" />

<div class="container">
Livermore's work both fuels and depends on myriad open source packages. We're proud to be part of a robust development ecosystem both within and outside of the Lab.
</div>

<!-- Preset vis display areas -->
<div class="text-center mt-5">
    <svg class="forceGraph"></svg>
    <svg class="connectionsTree"></svg>
</div>
<form class="text-center my-5" name="Keyword Search" onsubmit="searchForm(event)">
    <label>Search: </label>
    <input id="search" type="text" placeholder="Type search term here&hellip;" spellcheck="false">
</form>

<!-- Load basic D3 and helper scripts -->
<script src="/assets/js/libs/d3.min.js" charset="UTF-8"></script>
<script type="text/javascript" src="/assets/js/libs/jquery.min.js"></script>
<script type="text/javascript" src="/assets/js/libs/d3-tip.js"></script>
<script type="text/javascript" src="/assets/js/libs/d3.layout.cloud.js"></script>
<script type="text/javascript" src="/assets/js/libs/d3-simple-slider.min.js"></script>
<script type="text/javascript" src="/assets/js/visualize/helpers.js"></script>


<!-- Load drawing JS -->
<script type="text/javascript" src="/assets/js/visualize/dependencies/force_dependencyGraph.js"></script>

<script>
    // GiHub Data Directory
    var ghDataDir = '/visualize/github-data';
    // Global chart standards
    var stdTotalWidth = 500,
        stdTotalHeight = 500;
    var stdMargin = { top: 40, right: 40, bottom: 40, left: 40 },
        stdWidth = stdTotalWidth - stdMargin.left - stdMargin.right,
        stdHeight = stdTotalHeight - stdMargin.top - stdMargin.bottom,
        stdMaxBuffer = 1.07;
    var stdDotRadius = 4,
        stdLgndDotRadius = 5,
        stdLgndSpacing = 20;
    // Call draw functions
    draw_force_graph('forceGraph', 'connectionsTree');
</script>

{% endraw %}
