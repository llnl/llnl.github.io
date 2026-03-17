---
title: About the LLNL Software Catalog
layout: default
description: Learn about LLNL's open-source software and why we're committed to creating open-source codes whenever feasible.
permalink: /about/
breadcrumb: About
menus:
  about:
    title: Overview
    weight: 1
---

<div class="col-12 col-xxl-2 d-none d-xxl-block pe-5 sticky-top jump-links float-start" id="llnl-side-container">
  <div class="nav pt-2 ps-3 sticky-top d-flex flex-column" aria-orientation="vertical">
    {% include components/icon-list-item.html title='Collaboration Fuels Our Culture' url='#collaboration-fuels-our-culture' icon='fa-chevron-down' %}
    {% include components/icon-list-item.html title='Learn More About OSS at LLNL' url='#learn-more-about-oss-at-llnl' icon='fa-chevron-down' %}
    {% include components/icon-list-item.html title='Other Resources' url='#other-resources' icon='fa-chevron-down' %}
    {% include components/icon-list-item.html title='Contact' url='#contact' icon='fa-chevron-down' %}
  </div>
</div>

<div class="container">
  <div class="col-12" markdown="1">

## Collaboration Fuels Our Culture

<div class="row">
  <div class="col-12 col-lg-6" markdown="1">
Welcome to the Lawrence Livermore National Laboratory ([LLNL](https://www.llnl.gov/)) software catalog&mdash;a hub for open-source software (OSS) produced at the Lab.

LLNL developers create and evolve software on a daily basis. Some of this software is used only internally, other components are licensed for use by external partners and collaborators, and still other software is released and actively developed out in the open on software-hosting platforms. This website is the gateway to all of it.

LLNL is a Department of Energy ([DOE](https://www.energy.gov/national-laboratories)) institution, so we abide by the [Federal Source Code Policy](https://www.energy.gov/articles/doe-federal-source-code-policy)* that guides release of open-source software (OSS). And not just because we have to but because we *want* to. Long before GitHub was founded, [we started releasing software](https://software.llnl.gov/visualize/) for public use and collaboration.
  </div>
  <div class="col-12 col-lg-6 mb-3">
    <div class="responsive-iframe-container">
      <iframe class="responsive-iframe" width="50%" src="https://www.youtube.com/embed/nTxMn1NWHQU?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</div>

We often work with other national labs, universities, and industry partners. Working on these projects is a lot easier when we can share code directly. The DOE's Exascale Computing Project ([ECP](https://www.exascaleproject.org)) (2016–2024) used OSS to develop the exascale ecosystem of apps, analytics, infrastructure, and so much more. Future breakthroughs will likely owe some debt to the best practices and accelerated development made possible by OSS.

One of the great things about a large government organization is that we're not motivated by profit. "The greater good" might sound like a cliché, but it's true. LLNL's national security mission governs our work, so our OSS portfolio of apps, libraries, compilers, and other tools support that mission. This includes everything from monitoring the performance of our supercomputers to making multiphysics codes run more smoothly.

Case in point: The DOE's Advanced Simulation and Computing ([ASC](https://asc.llnl.gov)) Program leverages OSS to build, field, and integrate Linux clusters into production service at our [Livermore Computing high-performance computing center](https://hpc.llnl.gov/). ASC is responsible for developing computer simulation capabilities that analyze and predict the performance, safety, and effectiveness of the nation's nuclear stockpile. In other words, the stakes are high for ensuring our code is accurate. With OSS, we can develop quickly and choose the best solutions.

This website abounds with examples of projects that have found a home in the open-source community. Access is key, which is why we jumped at the chance to index our software on [Code.gov](https://code.gov). You'll find our work in the DOE [repo list](https://code.gov/#!/browse-projects?agencies=DOE), and we invite you to browse our projects on [GitHub](https://github.com/LLNL).

\* The original policy memorandum is no longer available online. For details, please see

<div class="row gx-5 gy-5">
  <div class="col-4 col-sm-4 col-lg-4">
    {% include components/quick-link.html title="The People's Code" url="https://en.wikipedia.org/wiki/People%27s_Code" icon="fa-code" %}
  </div>
  <div class="col-4 col-sm-4 col-lg-4">
    {% include components/quick-link.html title="The Archived Policy on GitHub" url="https://github.com/WhiteHouse/source-code-policy" icon="fa-github" %}
  </div>
</div>

## Learn More About OSS at LLNL
{:.mt-5}

<div class="row mb-5 gy-5">
  <div class="col-12 col-lg-4">
<!-- START: Quicklinks boxes -->
{% capture cardContent %}
* [LLNL Software News](/news)
* [LLNL Computing News](https://computing.llnl.gov/topic/open-source-software)
* [The Lab that Launched a Thousand Software Projects](https://computing.llnl.gov/about/newsroom/lab-launched-thousand-software-projects)
* [Ambassadors of Code](https://str.llnl.gov/2018-01/lee)  (*Science & Technology Review* cover story)
* [The High Value of Open-Source Software](https://str.llnl.gov/past-issues/januaryfebruary-2018/high-value-open-source-software)  (*Science & Technology Review* commentary)
{% endcapture %}
{% assign cardContent = cardContent | markdownify %}
{% include components/card.html title='News Coverage' content=cardContent classes="h-100" %}
<!-- END: Quicklinks boxes -->
  </div>
  <div class="col-12 col-lg-4">
<!-- START: Quicklinks boxes -->
{% capture cardContent %}
* [UnifyFS: User-Level File System for Supercomputers](https://computing.llnl.gov/projects/unifyfs)
* [UMap: An Application-Oriented, User-Level Memory-Mapping Library](https://computing.llnl.gov/projects/umap)
* [zfp: Compressed Floating-Point and Integer Arrays](https://computing.llnl.gov/projects/zfp)
* [Variorum: Vendor-Agnostic Power Management](https://computing.llnl.gov/projects/variorum)
* [The Laboratory’s Habit of Innovation](https://str.llnl.gov/past-issues/march-2024/laboratorys-habit-innovation)  (*Science & Technology Review* cover story)
{% endcapture %}
{% assign cardContent = cardContent | markdownify %}
{% include components/card.html title='R&D 100 Winners (2023–2024)' content=cardContent classes="h-100" %}
<!-- END: Quicklinks boxes -->
  </div>
  <div class="col-12 col-lg-4">
<!-- START: Quicklinks boxes -->
{% capture cardContent %}
* [How Will El Capitan Run? Software and Storage Solutions Powering NNSA’s First Exascale Supercomputer](https://www.youtube.com/watch?v=K7ccgEoJnuM) (5:56)
* [Supercomputer Problems You’ve Never Heard Of](https://www.youtube.com/watch?v=IZSWymZmkc0) (5:39)
* [Ambassadors of Code](https://www.youtube.com/watch?v=nTxMn1NWHQU) (3:04)
* [An Introduction to Open Source Software](https://www.youtube.com/watch?v=kL4wIYhNVxE) (11:31)
{% endcapture %}
{% assign cardContent = cardContent | markdownify %}
{% include components/card.html title='Multimedia' content=cardContent classes="h-100" %}
<!-- END: Quicklinks boxes -->
  </div>
</div>

## Other Resources

<div class="row gx-5 gy-5">
  <div class="col-4 col-sm-4 col-lg-4">
    {% include components/quick-link.html title="TTS (Technology Transformation Services) Handbook: GitHub" url="https://handbook.tts.gsa.gov/tools/github/" icon="fa-github" %}
  </div>
  <div class="col-4 col-sm-4 col-lg-4">
    {% include components/quick-link.html title="Controls Necessary for Federal Use of GitHub" url="https://github.com/fisma-ready/github" icon="fa-github" %}
  </div>
  <div class="col-4 col-sm-4 col-lg-4">
    {% include components/quick-link.html title="Guidance for Agency Use of Third-Party Websites and Applications" url="https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/memoranda_2010/m10-23.pdf" icon="fa-file-pdf" %}
  </div>
</div>

{% capture ctaContent %}
For more information, check out our [FAQ](/about/faq). Contact [open-source@llnl.gov](mailto:open-source@llnl.gov) with questions about OSS at LLNL. Contact [github-admin@llnl.gov](mailto:github-admin@llnl.gov) with questions about working in the LLNL GitHub organization or to request a private repository. Visit the [software licensing portal](https://softwarelicensing.llnl.gov/) for information about licensing LLNL's proprietary codes.
{% endcapture %}
{% assign ctaContent = ctaContent | markdownify %}
{% include components/call-to-action.html title='Contact' icon='fa-comments-question-check' content=ctaContent  %}

  </div>
</div>
