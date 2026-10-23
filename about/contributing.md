---
title: Contributing Guidelines
layout: container-default
description: Learn how to update this website or adapt a fork of it for your own organization.
permalink: /about/contribute/
breadcrumb: Contributing Guidelines
menus:
  about:
    weight: 2
---

<!-- START: Info box -->
{% capture alertContent %}
The LLNL Software Catalog website is an open source project. We welcome contributions via pull requests as well as questions, feature requests, or bug reports via issues. Contact our team at [open-source@llnl.gov](mailto:open-source@llnl.gov) with any questions. Please also refer to our [FAQ](/about/faq) and [Code of Conduct](/about/conduct).
{% endcapture %}
{% assign alertContent = alertContent | markdownify %}
{% include components/alert.html type="warning" icon="fa-circle-info" content=alertContent  %}
<!-- End: Info box -->

To contribute to this website, please create a fork of [llnl.github.io](https://github.com/LLNL/llnl.github.io). Our CI tests are automatically run against every new PR, and passing all tests is a requirement for merging. In general, please:

* Create your branches off the `repo:main` branch.
* Clearly name your branches, commits, and PRs to help us manage queued work in a timely manner.
* Articulate your commit messages clearly (e.g., `Adds new privacy policy link to README`).
* Commit your work in logically organized commits, and group commits together logically in a PR.
* Title each PR clearly and give it an unambiguous description.
* Review existing issues before opening a new one. Your issue might already be under development or discussed by others. Feel free to add to any outstanding issue/bug.
* Be explicit when opening issues and reporting bugs. What behavior are you expecting? What is your justification or use case for the new feature/enhancement? How can the bug be recreated? What are any environment variables to consider (e.g., browser, OS)?

<!-- START: Accordions Each h2 below will be a separate accordion. -->
<div class="border-top-gradient-impact-extreme border-bottom-gradient-impact-extreme">

{% capture accordionContent %}
Before you begin, make sure you have working installs of Git, Ruby, and [Bundler](https://bundler.io). After you fork the repo, make sure you are in the directory you just created by running `cd llnl.github.io` Then you can use `bundler` to install the Ruby dependencies (see the [Jekyll installation docs](https://jekyllrb.com/docs/installation/) for step-by-step guides to setting this up):

```bash
bundle install
```

Running this will install everything in your Gemfile (including Jekyll).

```bash
bundle exec jekyll serve
```

Finally, open <http://localhost:4000> in a web browser.

## Tips

The gems in your sourcefile get updated frequently. It is a good idea to occasionally run `bundle update` from within your project's root directory to make sure the software on your computer is up to date.

Sometimes there can be dependency conflicts if your local version of Ruby is different from this repo or GitHub pages deployment settings. You can find the version number of each of GitHub Page's current dependency's [here](https://pages.github.com/versions/). You can often avoid dependency issues if you use the same versions, including for Ruby.

For example, the default version of Ruby used to deploy GitHub Pages on github.com as of 2021-04-08 was Ruby 2.7.1. If you tried running Ruby version 3.0.0 locally on macOS, you'll need to do some extra steps to correctly install the dependencies for this repository. You'd need to run `bundle add webrick` as it is no longer a prepackaged dependency with Ruby in 3.0.0. You may also need to run `gem install eventmachine -- --with-openssl-dir=/usr/local/opt/openssl@1.1` as MacOS >10.14 doesn't use OpenSSL from the same path as is still assumed to be in by eventmachine.

## Spellcheck

The [GitHub workflow](https://github.com/LLNL/llnl.github.io/blob/main/.github/workflows/main.yaml) currently includes an action for a Rust tool called [crate-ci/typos](https://github.com/marketplace/actions/typos-action) that will spellcheck all posts and pages. If your CI fails, spelling suggestions will be shown and you can manually update the mistakes, or [install typos](https://github.com/crate-ci/typos#install) and have all errors fixed automatically:

```bash
typos ./_posts ./README.md ./about/faq.md ./about/contributing.md --write-changes
```

If a word needs to be ignored, see [instructions](https://github.com/crate-ci/typos#false-positives) for adding an entry to the [`_typos.toml`](https://github.com/LLNL/llnl.github.io/blob/main/_typos.toml) file.

{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='How do I build this site locally?' slug='local' content=accordionContent %}

{% capture accordionContent %}
A [JSON file](https://github.com/LLNL/llnl.github.io/blob/main/visualize/github-data/category_info.json) contains the info for the software catalog categories displayed on the home page: title, Font Awesome icon, description. If any changes need to be made to these categories, just edit the data in the JSON and the home page will reflect your changes automatically. (These catalog categories/topics are distinct from the tags on [News posts](../../news).) The list below contains each category's description to ensure consistency in phrasing and length. Note that in some cases the category is plural, but the corresponding tag is singular.

**Note:** The `All Software` category appears at the top of the list by virtue of a blank space before the first letter in the `title` field (see the JSON file linked above). All other categories appear in alphabetical order.

| -------- | ----------- | ------ | ------- |
| Category | Description | Tag(s) | FA icon |
| -------- | ----------- | ------ | ------- |
| **All Software** | Browse all LLNL open-source projects | (no tags required) | (image: `logomark-llnl.svg`) |
| **SI & Machine Learning** | Integrate super intelligence (also known as AI) and machine learning into scientific applications | `artificial-intelligence`, `deep-learning`, `machine-learning`, `neural-network`, `super-intelligence` | fa-brain-circuit |
| **App Infrastructure** | Browse tools for basic functionality common in HPC codes | `app-infrastructure` | fa-gear-complex-code |
| **Applications** | Browse scientific simulation codes and IT management tools | `application`, `applications`, `simulation`, `simulations` | fa-laptop-code |
| **Build Tools** | Automate and simplify complex dependencies and deployments | `build-tools` | fa-tools |
| **Data Management & Viz** | Manage visualizations with robust features and configurable analysis | `data-management`, `data-viz` | fa-display-chart-up |
| **Docs & Tutorials** | Learn more about our software via documentation, examples, and tutorials | `docs`, `documentation`, `tutorial`, `tutorials` | fa-file-lines |
| **File Systems** | Configure data storage and retrieval for more efficient workloads | `file-system` | fa-folders |
| **Math & Physics Libraries** | Optimize solvers, higher order methods, and AMR frameworks | `math-physics` | fa-books |
| **Performance & Workflow** | Manage and scale complex workflows, tracking, and data collection | `performance`, `workflows` | fa-gauge-high |
| **Portable Execution & Memory Mgmt** | Automate data motion and memory allocation on advanced architectures | `memory-management`, `portability` | fa-briefcase |
| **Proxy Applications** | Prepare for testing and porting applications | `proxy-application` | fa-clone |
| **RADIUSS** | Rapid Application Development via an Institutional Universal Software Stack | `radiuss` | radiuss-icon-bw.png |
| **System Software** | Manage laptop and desktop computer systems, HPC clusters, and parallel environments | `system-software` | fa-floppy-disk |
{:.table .table-striped .table-bordered}

A repository can have up to 20 tags. In general, topic tags raise a repo's visibility on GitHub and help users find related projects. The following tags, which are not associated with the home page categories above, are recommended for LLNL repos: `amr` (adaptive mesh refinement), `arbitrary-lagrangian-eulerian` (ALE), `benchmark`, `biology`, `checkpoint`, `chemistry`, `cmake`, `compiler`, `cpp` (C++), `data-analysis`, `energy`, `exascale-computing`, `finite-elements`, `fortran`, `gpu`, `graph`, `high-dimensional-data`, `hpc`, `java`, `javascript`, `library`, `materials`, `materials-science`, `matlab`, `molecular-dynamics`, `monte-carlo`, `mpi`, `natural-language-processing`, `openmp`, `parallel-computing`, `pde`, `python`, `quantum`, `seismology`, `shell`, `simulation`, `solver`, `templates`, `testing`, `uncertainty-quantification`.

**To add a new category to the catalog:**

1. Update the list above with the category name (in alphabetical order), description, and tag.
2. Update [`category_info.json`](https://github.com/LLNL/llnl.github.io/blob/main/visualize/github-data/category_info.json) with category metadata such as Font Awesome icon, descriptive blurb, and corresponding topic(s).
3. Tag repos with the new topic as appropriate.

**To add/change an icon for a category:** Go to the `category_info.json` file and modify the `icon` property of the given category. To specify a Font Awesome icon, use the `fa` property listing the full CSS class for the Font Awesome Icon. To specify a file as an icon, use the `path` property to specify the absolute path to the icon. If the URL to icon is not in this repository, also specify the domain in the `path`.

**To add your repo to the catalog:** See the FAQ [How do I include my repo in the LLNL organization and/or this website’s catalog?](https://software.llnl.gov/about/faq/#catalog)

{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='How do I update or use the catalog categories?' slug='categories' content=accordionContent %}

{% capture accordionContent %}

## Project Tags

See the FAQ [How do I include my repo in the LLNL organization and/or this website’s catalog?](https://software.llnl.gov/about/faq/#catalog) for information about tagging an individual repo. See the topic [How do I update or use the catalog categories?](https://software.llnl.gov/about/contribute/#categories) above for information about managing the categories.

## Project Logos

The home page displays a logo next to each repo when they appear under the topic categories. If a repo has its own logo, that should display. If not, then the LLNL logo displays by default. There are two steps to adding a logo to this website:

**1. Upload the image file.**

Repo logo files should follow a naming convention and be added to the [logos directory](https://github.com/LLNL/llnl.github.io/tree/main/assets/images/logos). All files must be in `.png` format.

* Repository logo: `<repo_name>.png`
* Directory: `/assets/images/logos/<org name>`

**2. Call the image file name.**

An LLNL repo with its own logo also needs the image file name added to [`repo_logos.json`](https://github.com/LLNL/llnl.github.io/blob/main/visualize/github-data/repo_logos.json).

{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='How do I change how a specific repo appears in the catalog?' slug='catalog' content=accordionContent %}

{% capture accordionContent %}
News posts appear in reverse chronological order (i.e., newest first). The list is curated to promote LLNL's open-source endeavors and community engagement. Posts should be tagged with at least one of the following categories, which are not associated with the catalog browse categories (described above) applied to repos.

* `event` - announcement or recap of an event/conference
* `multimedia` - synopsis of a video or podcast published on another platform (e.g., YouTube)
* `new-repo` - announcement of new repo added to LLNL's software catalog
* `story` - synopsis of a relevant news or research-focused article; profile of a developer

Categories should appear alphabetically in each post's metadata under the title, with no punctuation between multiple categories:

```bash
title: "Title of Post"
categories: multimedia story
```

LLNL's [.github repo](https://github.com/LLNL/.github/tree/main/news-templates) contains .md templates for each of these types of posts. For posts that combine multiple tags (e.g., multimedia, event), a combination of templates may be used. File naming conventions are also provided.

Software releases are not included in News. See the separate, and automatically populated, [Releases page](../../releases).

{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='How do I update news content?' slug='news' content=accordionContent %}

{% capture accordionContent %}

The informational pages on this site (e.g., this page, [About](/about), [FAQ](/about/faq)) are markdown pages that can be updated with a pull request. Please note the following style preferences:

* H2 headings in title case
* H3 headings in sentence case
* News post titles in title case
* Accordion titles in the form of a sentence-case question

**To update the banners on the home page:** The IPO message is in a `<div>` container using the [`button.html` include file](https://github.com/LLNL/llnl.github.io/blob/main/_includes/components/button.html).

**To modify the site menu:** Update the menu in the [`header.html`](https://github.com/LLNL/llnl.github.io/blob/main/_includes/header.html), rather than adding each page to the menu using page attributes.

**To create an accordion slug:** Accordion titles automatically generate a unique URL hash so the user can go directly to an expanded accordion using a unique URL. As an accordion's title is often lengthy question text, a shortened slug can be used to shorten the URL hash. For example, this accordion's title is `How do I update the FAQ or other text?` but the hash is the much shorter `#faq`. Add `slug='unique-hash'` after the `title` in the accordion's `include` syntax. Slugs should be unique to the page they're on; in other words, a page should not have two accordions with the same slug.

Here is a template for creating a new accordion. Somewhat unintuitively, the title of the accordion appears *below* its contents.

```liquid
{% raw %}
{% capture accordionContent %}

Text/content goes here

{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='Title of the FAQ in the form of a question?' slug='unique-hash' content=accordionContent %}
{% endraw %}
```

{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='How do I update the FAQ or other text?' slug='faq' content=accordionContent %}

{% capture accordionContent %}
This site's [visualizations](../../visualize) are governed by several scripts and queries. See the following `README` files for details:

* [`scripts/README.md`](https://github.com/LLNL/llnl.github.io/blob/main/_visualize/scripts/README.md): data collection scripts
* [`_visualize/README.md`](https://github.com/LLNL/llnl.github.io/blob/main/_visualize/README.md): queries to GitHub's GraphQL API
* [`visualize/README.md`](https://github.com/LLNL/llnl.github.io/blob/main/visualize/README.md): data storage

{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='How do I modify the visualizations?' slug='viz' content=accordionContent %}

{% capture accordionContent %}

* *Organization-specific content to update/replace:* header, footer, favicon, default headers/text in data visualizations, CNAME, README, license, `_config.yml`
* *Content to remove:* RADIUSS (including policies), LLNL news posts
* *Elements to review:* links vis-a-vis GitHub pages base URL structure, Google Analytics setup

See also GitHub's instructions for [creating a template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository).

{% endcapture %}
{% assign accordionContent = accordionContent | markdownify %}
{% include components/accordion.html title='How do I adapt this website for my own organization?' content=accordionContent %}

{% capture accordionContent %}

## Materials Science Category

Add `Materials Science` into the catalog browse by adding this code (alphabetically among the other categories) to `/visualize/github-data/category_info.json`:

        "Materials Science": {
            "title": "Materials Science",
            "hash": "MaterialsScience",
            "icon": {
                "fa": "fa-hexagon",
                "alt": "Materials Science"
            },
            "description": {
                "short": "Software supporting research in materials design, optimization, and innovation",
                "long": ""
            },
            "topics": [
                "materials",
                "materials-science"
            ]
        },

## RADIUSS Features

April 2022: The standalone RADIUSS site launched at [github.com/llnl/radiuss](https://github.com/llnl/radiuss) via [issue 567](https://github.com/LLNL/llnl.github.io/issues/567).

September 2025: The RADIUSS site was retired and the filterable browse on this site reinstated via [issue 719](https://github.com/LLNL/llnl.github.io/issues/719).

<!--* The code for standalone RADIUSS site was lines 190–205 in `/visualize/github-data/category_info.json`:

```bash
        "RADIUSS": {
            "title": "RADIUSS Software",
            "hash": "RADIUSSSoftware",
            "icon": {
                "path": "/assets/images/radiuss-icon-bw.png",
                "alt": "RADIUSS Software"
            },
            "description": {
                "short": "",
                "long": ""
            },
            "topics": [
                "radiuss-software"
            ],
            "url": "https://software.llnl.gov/radiuss/projects/"
        },
```

Note that `/project/category_info_radiuss.json` is not currently being used. If it were to be reinstated, it would need its categories updated to match the latest Catalog (e.g., `Docs and Tutorials`).

Comment back in lines 31-38 in `Category.service.js`

```bash
    this.containsRadiussTopics = function(catTopics, repoTopics) {
        for (var i = 0; i < catTopics.length; i++) {
            if ($.inArray(catTopics[i], repoTopics) != -1 && $.inArray('radiuss', repoTopics) != -1) {
                return true;
            }
        }
        return false;
    };
```

* Update link/text on home page
* Update links/text on [Policies & Guidelines](/about/policies)
* Update links/text on [FAQ](/about/faq)
* Update relevant READMEs
* Update links/text on <https://dev.llnl.gov/radiuss/>
* Point URL alias <https://radiuss.llnl.gov> back to `/explore/#/RADIUSS` (request this of <webmaster-comp@llnl.gov>)

No changes yet, if ever:

* [Policies & Guidelines](/about/policies) are currently still on this site
* RADIUSS logo (`radiuss-icon-bw.png`) is still in the `/assets/images/` folder
-->

{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='For site admins: notes on deprecated features' slug='admins' content=accordionContent %}

</div>
<!-- END: Accordions -->
