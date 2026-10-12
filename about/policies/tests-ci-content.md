<a name="mtst1"></a>
[![Generic badge](https://img.shields.io/badge/M.tst-1-red.svg)](#mtst1) **Use regression tests in the development process.**

>Rationale
>: Regression tests prevent new features from affecting prior functionality, and they allow developers to have more confidence in their changes when modifying code.
>
>Ref
>: *WSC 5.1*

---
<a name="mtst2"></a>
[![Generic badge](https://img.shields.io/badge/M.tst-2-red.svg)](#mtst2) **Provide a test suite for verifying correctness of build and installation.**

>Details
>: A series of tests (including unit tests) should be runnable by anyone after the package is built to verify a correct build. The installation should also provide tests -- which could derive from or be the same as example codes -- must be run and installed alongside the library for future verification.
>
>Rationale
>: An executable test suite gives users confidence that the product gives correct results. It is also recommended that at least a significant subset of the tests be can be run in batch-only environments.
>
>Ref
>: [*xSDK M2*](https://github.com/xsdk-project/xsdk-community-policies/blob/master/package_policies/M2.md)

---
<a name="mtst3"></a>
[![Generic badge](https://img.shields.io/badge/M.tst-3-red.svg)](#mtst3) **Provide a development test suite along with the source code for external contributors.**

>Details
>: The Git repository must contain test problems an easy way to run them and verify correctness for developers who are working on remote systems. External contributors must also have access to any results from continuous integration pipelines run against their changes before they make a pull request.
>
>Rationale
>: External contributors should be able to test there code to the same standard as the development team. This ensure easier integration of new contribution and transparency in the process.

---
<a name="mtst4"></a>
[![Generic badge](https://img.shields.io/badge/M.tst-4-red.svg)](#mtst4) **Use continuous integration (CI).**

>Details
>: Example CI systems in use by RADIUSS products:
>
> * RAJA with Travis CI on GitHub. See [.travis.yml](https://lc.llnl.gov/gitlab)
> * MFEM with AppVeyor on GitHub. See [.appveyor.yml](https://github.com/mfem/mfem/blob/master/.appveyor.yml)
>
>Rationale
>: CI helps to prevent integration problems by identifying issues as they arise instead of allowing them to compound. This process helps reduce rework, cost, and time. Examples of CI tools include [Travis CI](https://travis-ci.org) for projects hosted on GitHub, or [GitLab CI](https://about.gitlab.com) for projects hosted on a GitLab instance such as [LC-GitLab](https://lc.llnl.gov/gitlab). Some products may use Azure Pipelines in the future.

---
<a name="rtst5"></a>
[![Generic badge](https://img.shields.io/badge/R.tst-5-yellow.svg)](#rtst5) **Continuously check compatibility with different compilers and versions.**

>Details
>: During the development process, tests should include compilation across a matrix of compilers and compiler versions, including both open source and vendor-proprietary when available
>
>Rationale
>: This helps to guard against platform-specific or compiler-specific errors.

---
<a name="rtst6"></a>
[![Generic badge](https://img.shields.io/badge/R.tst-6-yellow.svg)](#rtst6) **Ensure code quality/health in an automated manner.**

>Details
>: Example tools:
>
> * Asan (AddressSanitizer)
> * clang-tidy
> * cppcheck
> * cpplint
>
>Rationale
>: Code quality checkers help to prevent code constructs that may result in errors in future environments where the code may run. They also reduce noise in build output that may obfuscate real errors. Code style checkers can also help enforce consistent style across a project.
>
>Ref
>: *WSC 5.4*

---
