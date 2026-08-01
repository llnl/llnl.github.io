---
title: Contributors
layout: container-default
description: Get an overview of contributors to LLNL's GitHub repos.
permalink: /visualize/contributors/
breadcrumb: Contributors
menus:
  visualization:
    weight: 2
---

{% raw %}

<link rel="stylesheet" type="text/css" href="/assets/css/visualize/graphstyle.css" />

## LLNL GitHub Visualizations: Contributors

Over 400 LLNL employees contribute to our repositories, but we also benefit from the work of external contributors. The majority of our repos have been enhanced by the work of the open source community.
<!-- Preset vis display areas -->

<div class="row">
    <div class="col-12 col-md-6 text-center border-bottom-gradient-impact-extreme thin border-bottom-1 chart-divide" >
        <svg class="pieMembers"></svg>
    </div>
    <div class="col-12 col-md-6 text-center border-bottom-gradient-impact-extreme thin border-bottom-1 chart-divide">
        <svg class="pieRepos"></svg>
    </div>
</div>
<svg class="hierarchyPack d-block mx-auto"></svg>

<!-- Load basic D3 and helper scripts -->
<script src="/assets/js/libs/d3.min.js" charset="UTF-8"></script>
<script type="text/javascript" src="/assets/js/libs/d3-tip.js"></script>
<script type="text/javascript" src="/assets/js/libs/d3.layout.cloud.js"></script>
<script type="text/javascript" src="/assets/js/libs/d3-simple-slider.min.js"></script>
<script type="text/javascript" src="/assets/js/visualize/helpers.js"></script>

<!-- Load drawing JS -->
<script type="text/javascript" src="/assets/js/visualize/contributors/pie_members.js"></script>
<script type="text/javascript" src="/assets/js/visualize/contributors/pie_repos.js"></script>
<script type="text/javascript" src="/assets/js/visualize/contributors/pack_hierarchy.js"></script>

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
    draw_pie_members('pieMembers');
    draw_pie_repos('pieRepos');
    draw_pack_hierarchy('hierarchyPack');
</script>

{% endraw %}
