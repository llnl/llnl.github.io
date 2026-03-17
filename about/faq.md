---
title: FAQ
layout: container-default
description: Get answers to frequently asked questions about Lawrence Livermore National Laboratory's open source software.
permalink: /about/faq/
breadcrumb: FAQ
menus:
  about:
    weight: 2
---

<!-- START: Info box -->
{% capture alertContent %}
**These FAQs primarily target LLNL developers** working in the [LLNL GitHub organization](https://github.com/LLNL). Don't see your question listed below? Please contact [LLNL GitHub admins](mailto:github-admin@llnl.gov). Please also refer to our [Contributing Guidelines](/about/contribute) and [Code of Conduct](/about/conduct).
{% endcapture %}
{% assign alertContent = alertContent | markdownify %}
{% include components/alert.html type="warning" icon="fa-circle-info" content=alertContent  %}
<!-- End: Info box -->

<!-- START: Accordions Each h2 below will be a separate accordion. -->
<div class="border-top-gradient-impact-extreme border-bottom-gradient-impact-extreme">
  {% capture accordionContent %}
If you’re new to GitHub and open source in general, figuring out how to get set up can be a challenge. You may want to read through the GitHub Help pages on [setting up and managing your GitHub profile](https://support.github.com/features/account).

1. [Create an account on GitHub](https://github.com/join).

    You *do not need* a separate work account and personal account. Instead, you can [link multiple email addresses to the same GitHub account](https://help.github.com/articles/adding-an-email-address-to-your-github-account/), which is almost always preferred.

2. [Update your profile information](https://github.com/settings/profile).

    * **Photo**: A headshot photo, or image that is uniquely you.
    * **Name**: Your first and last name.
    * **Bio**: Include a few words about yourself! Don't forget to mention @LLNL.
    * **URL**: This might be your [people.llnl.gov](https://people.llnl.gov) page, or a personal website if you prefer.
    * **Company**: `Lawrence Livermore National Laboratory, @LLNL`.
    * **Location**: Your primary location.
    {:.mb-3}
3. Add your `@llnl.gov` email address (and any aliases) to your [Email Settings](https://github.com/settings/emails) page. This will link any commits done via [your Git identity](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup#Your-Identity) to your GitHub account.

4. [Enable two-factor authentication (2FA)](https://github.com/settings/security).
    * [Learn how to set up 2FA at the Lab <i class="fa fa-light fa-lock"></i>](https://dev.llnl.gov/security-access/2fa).
{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='How do I set up a GitHub account?' slug='account' content=accordionContent %}

{% capture accordionContent %}
<!-- START: Warning box -->
{% capture alertContent %}
Membership in the @LLNL GitHub organization requires that 2FA has been enabled on your GitHub account.
{% endcapture %}
{% assign alertContent = alertContent | markdownify %}
{% include components/alert.html type="warning" icon="fa-circle-info" content=alertContent  %}
<!-- END: Warning box -->

There are several options for configuring 2FA for your GitHub account:

### [YubiKey](https://yubico.com) hardware security keys

* The YubiKey deployment (called "MyPass" at LLNL) is in its pilot phase, and not all users have them yet.
* YubiKeys are the preferred 2FA option, due to the security of the YubiKey hardware tokens. If you have been issued your LLNL YubiKey, it is highly recommended for securing your GitHub (and other) accounts which support them.
* [Learn more about setting up your YubiKey with GitHub](https://help.github.com/articles/configuring-two-factor-authentication/#configuring-two-factor-authentication-using-fido-u2f)

### [Google Authenticator](https://support.google.com/accounts/answer/1066447)

* Google Authenticator is a mobile application which you can install on your personal or government issued phone.
* It provides a one-time token (OTP) which you can use to authenticate to GitHub.com
* [Learn more about setting up Google Authenticator with GitHub](https://help.github.com/articles/configuring-two-factor-authentication/#configuring-two-factor-authentication-using-a-totp-mobile-app)

### [Authy](https://authy.com/guides/github/)

* Authy is a desktop- or laptop-based application which can be used to generate a one-time token (OTP) for use logging in to GitHub.
* This option is usually best for when you do all or most of your work in an environment where you do not have access to a mobile phone or USB YubiKey.
* [Learn more about setting up Authy with GitHub.com](https://authy.com/guides/github/)

### Additional 2FA info

* You have the option during 2FA to generate and save a list of recovery codes to get into your account in the event you lose access to one of your 2FA methods. **Saving your recovery codes is *highly* recommended**, and the recovery codes should be stored someplace safe. Some options for storing your recovery codes include:
  * Printing the codes and storing them in a safe place in your office.
  * Storing the recovery codes in a password manager that you might be using.

* **We recommend that you set up multiple 2FA options.** This can protect your access to your account in the event that you lose access to one of your authenticators. Please note that SMS is not a secure option and not recommended for LLNL accounts.

<!-- START: Buttons -->
{% include components/button.html content='GitHub 2FA blog post' url="https://github.com/blog/1614-two-factor-authentication" tag="a" %}
{% include components/button.html content='GitHub 2FA instructions' url="https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication" tag="a" %}
{% include components/button.html content='Contact the LLNL GitHub Admins' url="mailto:github-admin@llnl.gov" tag="a" %}
<!-- END: Buttons -->
{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='How do I set up two-factor authentication (2FA)?'  slug='2fa' content=accordionContent %}

{% capture accordionContent %}
If you are an employee at LLNL and have 2FA enabled, you are eligible to join the [LLNL GitHub organization](https://github.com/llnl) and appear in the [member list](https://github.com/orgs/LLNL/people).

1. Send an email, with your GitHub username included, to the [LLNL GitHub admins](mailto:github-admin@llnl.gov) from your `@llnl.gov` email, requesting to be added to the organization.

2. After an administrator has added you to the organization, you will receive a notification email from GitHub. Alternatively, once the invitation has been sent, you will see a notification banner at the top of [github.com/llnl](https://github.com/llnl) which you can use to accept the invitation.

3. Head over to the [@LLNL People](https://github.com/orgs/LLNL/people) page and make your membership `Public`.
{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='How do I join the LLNL organization on GitHub?'  slug='join' content=accordionContent %}

{% capture accordionContent %}
Before content is placed into an LLNL GitHub.com repository, it should be reviewed and released via LLNL's Information Management (IM) process–even if you plan on setting the repository to *Private* instead of *Public*. All information produced by LLNL must follow the guidance set forth by the LLNL IM/RR policy for both [initial release and incremental contributions <i class="fa fa-light fa-lock"></i>](https://dev.llnl.gov/opensource/contributing/). LLNL employees can follow ["one-stop shop" instructions <i class="fa fa-light fa-lock"></i>](https://dev.llnl.gov/open-source/one-stop-shop/) for releasing software.
{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='How do I get my repo reviewed and released for GitHub?' slug='released' content=accordionContent %}

{% capture accordionContent %}
Remember that these repositories *are hosted on GitHub* servers, ***not** LLNL servers*, and content placed in them should be limited to "email-like" communications. That means:

* No classified information
* No export controlled information (ECI)
* No Health Insurance Portability and Accountability Act- (HIPAA-) related information
* No personally identifiable information (PII)
* No nondisclosure agreement or vendor-proprietary information
* No controlled unclassified information (CUI)
* No unclassified controlled nuclear information (UCNI)

When in doubt, contact a Derivative Classifier (DC) and/or IM/RR for further guidance.
{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title="What is/isn't allowed in my repo?"  slug='allowed' content=accordionContent %}

{% capture accordionContent %}
Make sure your repo contains [community health files](https://github.com/LLNL/.github/tree/main/community-health), including:

* An appropriate **open source license** and `LLNL-CODE-xxxxxx` **release number**. See the [LLNL Software Licensing](/about/licenses) page for details and examples.
* A [**README**](https://guides.github.com/features/wikis/) file that summarizes what the software does and how others can use it.
* A [**NOTICE**](https://github.com/LLNL/.github/blob/main/community-health/NOTICE.md) file that includes LLNL auspice and disclaimer statements.
* A [**CODE OF CONDUCT**](https://github.com/LLNL/.github/blob/main/community-health/CODE_OF_CONDUCT.md) file that defines standards for how to engage in your project's community.
* A [**CONTRIBUTING**](https://github.com/LLNL/.github/blob/main/community-health/CONTRIBUTING.md) file that communicates how others should contribute to your repo.

After your project has been initially released on GitHub and you are ready to provide a new version, a good practice is to tag the version and include [**release notes**](https://github.com/LLNL/.github/blob/main/community-health/release-template.md).

Another good practice is to provide **user documentation**. Read the Docs (RtD) is a common platform for user guides, tutorials, quick start instructions, and other forms of documentation. Our [LLNL/.github repo](https://github.com/LLNL/.github) contains step-by-step instructions for setting up a RtD instance, a [template](https://github-main.readthedocs.io/en/latest/) you can start with, and links to various resources for tips and additional details.

Submit your repo to [**DOE CODE**](https://www.osti.gov/doecode/FAQs#what-is) so others can find it when searching through DOE-funded projects. After your repo is included in DOE CODE, you may also want to add the [**digital object identifier** (DOI)](/about/licenses/#digital-object-identifier-doi) to the repo.

If your repo is research software, consider submitting it to the [*Journal of Open Source Software* (JOSS)](https://joss.theoj.org/about). Submission will produce a **citation** to include in your README file, then users or other researchers can cite your software correctly.

The [JOSS RtD site](https://joss.readthedocs.io/en/latest/submitting.html) describes the submission requirements. JOSS defines *research software* as "software that solves complex modeling problems in a scientific context (physics, mathematics, biology, medicine, social science, neuroscience, engineering); supports the functioning of research instruments or the execution of research experiments; extracts knowledge from large data sets; offers a mathematical library; or similar." (You can also [become a reviewer](https://joss.readthedocs.io/en/latest/editing.html#), if you are so inclined.)
{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title="My project is approved for release. Now what? What about docs?"  slug='approved' content=accordionContent %}

{% capture accordionContent %}

Most LLNL repos use the standard GitHub URL of `github.com/llnl/*`. However, you may use the `software.llnl.gov` domain, where you append `/*` to it. Alternatively, you can use GitHub pages to create a custom `*.llnl.gov` URL that redirects to `software.llnl.gov/*`.

| --- | ----- | ---- |
| URL | Setup | Help |
| --- | ----- | ---- |
| `github.com/llnl/*` | [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) | <github-admin@llnl.gov> |
| `software.llnl.gov/*` | [Configuring a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) | <webmaster-comp@llnl.gov> |
| `*.llnl.gov` | [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) | <github-admin@llnl.gov> |
{:.table .table-striped .table-bordered}

**Note:** `software.llnl.gov` uses a reverse proxy and is hosted on LLNL Computing servers, which fetches the content from GitHub behind the scenes. If you would like to use the `software.llnl.gov/*` URL, you do *not* need to check the "Enforce HTTPS" box in your repo's settings (Settings > Pages > Custom Domain > Enforce HTTPS). This checkbox is for sites that point directly to GitHub, not the LLNL Computing servers. The <webmaster-comp@llnl.gov> team manages the DNS and SSL certificate for `software.llnl.gov` only, not for `*.llnl.gov`.

{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='Can I create a custom URL for my repo?' slug='repo-url' content=accordionContent %}

{% capture accordionContent %}
<!-- START: Warning Box -->
{% capture alertContent %}

* Repositories within the LLNL organization are owned and managed by LLNL. Please do not create personal repositories here.
* All LLNL repos must go through the IM/RR process (see the FAQ [How do I get my repo reviewed and released for GitHub?](https://software.llnl.gov/about/faq/#released)) and display the appropriate open source license and `LLNL-CODE-xxxxxxx` release number.
* If the repo wasn't developed at LLNL, its license needs to be clearly indicated. See the [LLNL Software Licensing](/about/licenses) page for examples.

{% endcapture %}
{% assign alertContent = alertContent | markdownify %}
{% include components/alert.html type="warning" icon="fa-circle-info" content=alertContent  %}
<!-- END: Warning Box -->

If you've set up your repository within the **LLNL organization**, you don't need to take any action; it will automatically appear after the next data update.

* **Organization transfer.** If your repository exists under a different organization, you can move it to LLNL: Settings > Danger Zone > Transfer ownership > Transfer button. This process notifies our GitHub admins, who can update your role. For instance, upon transfer, repo admins are defaulted to the `write` role instead of `admin`. The transfer process also includes your project's association with team members who contribute to the repo; they too come over with the `write` role by default.

    * See also [GitHub's instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository) for transferring a repo.
    * Sometimes the transferring organization wants to retain a copy (mirror or fork) of the repo, or a project lead "takes" the repo with them to another organization.

* **Standalone organization.** Alternatively, if you do not wish to transfer your repo, you can instead submit a pull request updating the [`input_lists.json` file](https://github.com/LLNL/llnl.github.io/blob/main/_visualize/input_lists.json) with your organization and/or repository names. List your organization under the `"orgs"` line *only if you intend for all of its repositories to be included in the catalog* (e.g., `glvis`); otherwise, list only the repository under the `"repos"` line within the context of your organization (e.g., `ceed/laghos`).

    * If you transfer your repo *from* a standalone organization into the LLNL org, please remove it from `"orgs"` in the [`input_lists.json` file](https://github.com/LLNL/llnl.github.io/blob/main/_visualize/input_lists.json). You don't need to explicitly add it to the LLNL org in the JSON file; all public repos under the LLNL org are automatically pulled into the catalog.

If you have a **project logo**, please follow the [Contributing Guidelines](/about/contribute) (see the question [How do I change how a specific repo appears in the catalog?](https://software.llnl.gov/about/contribute/#catalog)) for naming and uploading the file. If your repo is part of a non-LLNL organization that has its own avatar, that image will automatically display next to the repo name in the catalog, unless superseded by a repo-specific logo.

Please also tag your repo with this site's **catalog categories** so it will show up in the filterable catalog. Follow the [Contributing Guidelines](/about/contribute) (see the question [How do I update or use the catalog categories?](https://software.llnl.gov/about/contribute/#categories)) for a list of tags.
{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='How do I include my repo in the LLNL organization and/or this website’s catalog?'  slug='catalog' content=accordionContent %}

{% capture accordionContent %}
Now that your project is on GitHub, make sure users and contributors can find it! There are several ways to do this. Contact [open-source@llnl.gov](mailto:open-source@llnl.gov) if you need help.

1. Include meaningful metadata (description and topic tags) in your repository. Example: [Spack](https://github.com/spack/spack) lists several topic tags below a one-sentence description.

    * Start with our list of recommended, standardized topics, which are listed under the question *How do I change how a specific repo appears in the catalog?* in our [Contributing Guidelines](/about/contribute).

    * See helpful hints on [GitHub's topic help page](https://help.github.com/articles/about-topics/). Add tags relevant to your project's programming language, platforms, and more (e.g., Python, HPC, Linux).

2. Let [X/Twitter](https://x.com/Livermore_Comp) followers know your project is available on GitHub. Feel free to tag the `@Livermore_Comp` handle in your own post, or submit a request to <comp-comms@llnl.gov> to post on your behalf.

3. Publicize any outreach activities or major milestones related to your project such as:
   * A paper/poster/presentation is accepted at a conference
   * An upcoming workshop or webinar you're hosting
   * Your project received an award nomination
   * You're guest blogging or speaking on a podcast
   {:.mb-3}

4. Include a summary of your project with GitHub and documentation links on LLNL's [Computing website](https://computing.llnl.gov/projects). Contact <comp-comms@llnl.gov> for this particular task.
{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='How do I let people know about my new repo?'  slug='publicize' content=accordionContent %}

{% capture accordionContent %}
Yes, you can give external contributors Write access to your GitHub repo. Anyone with Admin access to your repo can enable this: Settings > Collaborators and teams > Manage access > Add people > enter their username and select.

**Note:** At this time, external (non-LLNL) collaborators should be invited as [Outside Collaborators](https://github.com/orgs/LLNL/outside-collaborators), not [LLNL org Members](https://github.com/orgs/LLNL/people). They can be added to a [Team](https://github.com/orgs/LLNL/teams) for a specific repo without being a Member of the LLNL org. This setup allows them to contribute to LLNL repos from the source branch (i.e., the collaborator creates a branch in the repo and submits a PR from it).

If you don't already have Admin access to your repo, contact [github-admin@llnl.gov](mailto:github-admin@llnl.gov) to request it.

{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='Can non-LLNL developers/collaborators contribute to my project?'  slug='collaborators' content=accordionContent %}

{% capture accordionContent %}
If the owner/admin of a repo leaves the project, another team member(s) with a GitHub account must take over the Admin role.

If you need help re-assigning permissions in your repo, contact [github-admin@llnl.gov](mailto:github-admin@llnl.gov) to confirm the user's departure and successor(s).

{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='How do I change ownership of a specific repo?'  slug='new-owner' content=accordionContent %}

{% capture accordionContent %}

1. Remove the specific topic tags (e.g., `math-physics`) that connect it to this website's browsable categories.

2. Submit a pull request updating the [`input_lists.json` file](https://github.com/LLNL/llnl.github.io/blob/main/_visualize/input_lists.json) to remove your repo's name.

3. Change your repo's status via Settings > Manage Access > Who has access > Manage > Danger Zone > Archive this repository (`settings#danger-zone`). Contact [open-source@llnl.gov](mailto:open-source@llnl.gov) if for some reason GitHub won't let you complete this step.
{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='What should I do if my repo is no longer actively developed/maintained?'  slug='remove' content=accordionContent %}

{% capture accordionContent %}
The process to transfer organizational ownership is straightforward but generally discouraged. This should really only be done for projects that are starting to build a "bigger than LLNL" community, and the decision should not be made lightly.

Migrating the repo outside of the LLNL organization requires an organization admin. Contact [github-admin@llnl.gov](mailto:github-admin@llnl.gov) to coordinate the move.

**Once the repository has moved to the new organization:**

1. Submit a pull request updating the [`input_lists.json` file](https://github.com/LLNL/llnl.github.io/blob/main/_visualize/input_lists.json) to add the new organization/repo's name. This allows the software catalog to continue including the project even after it moves.

2. Retain topic tags (e.g., `math-physics`) to connect it to this website's browsable categories.
{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='My repo has grown. How do I move it out of the LLNL organization?'  slug='transfer-out' content=accordionContent %}

{% capture accordionContent %}
<!-- START: Warning Box -->
{% capture alertContent %}

Even if your collection of repos are housed under another organization but developed on behalf of LLNL, they must go through the IM/RR process (see the FAQ [How do I get my repo reviewed and released for GitHub?](https://software.llnl.gov/about/faq/#released)) and display the appropriate open source license and `LLNL-CODE-xxxxxxx` release number.

{% endcapture %}
{% assign alertContent = alertContent | markdownify %}
{% include components/alert.html type="warning" icon="fa-circle-info" content=alertContent  %}
<!-- END: Warning Box -->

Follow the instructions in the question [How do I include my repo in the LLNL organization and/or this website’s catalog?](https://software.llnl.gov/about/faq/#catalog) beginning with the second bullet point since you are not transferring the organization to LLNL.

{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='I need to create repos under a new org for business reasons. Can I still include them in this catalog?'  slug='new-org' content=accordionContent %}

{% capture accordionContent %}
Refer to individual projects for their requirements on accepting contributions. (To contribute to this website, see our [Contributing Guidelines](/about/contribute).) In general, though, we follow the "fork and pull" Git workflow model:

1. Fork a repository.

2. Develop your changes in your fork.

3. Sync your fork to the upstream repository (`git remote add upstream git@github.com:org/repo.git`).

4. Create a pull request to the "upstream" repository.

5. If approved, changes will be merged in by a repository maintainer.
{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='How do I contribute to an LLNL repo?'  slug='contribute-repo' content=accordionContent %}

{% capture accordionContent %}
Submit a pull request! This website is a GitHub repo just like any other LLNL open source project. News is housed in the [`_posts` directory](https://github.com/LLNL/llnl.github.io/tree/main/_posts), and templates are found in the [LLNL/.github repo](https://github.com/LLNL/.github). See [Contributing Guidelines](../contribute) for more information.

Before contributing, please contact [open-source@llnl.gov](mailto:open-source@llnl.gov) with your idea or if you have questions about whether your proposed content requires the LLNL review and release process.
{% endcapture %}
  {% assign accordionContent = accordionContent | markdownify %}
  {% include components/accordion.html title='How do I contribute news or other content to this website?'  slug='contribute-here' content=accordionContent %}

</div>
<!-- END: Accordions -->
