---
---

# Guidelines

This collection gives you an overview about the guidelines we are follow to improve our teamwork.

::: tip INFO
This section is still in progress and support highly welcome.
:::

## Code Guidelines

### Pull Requests
 1. Make sure you respect all language specific code guidelines.
 2. Make sure you that you not modified any IDE settings files as long as the changes are not related to you pull request.
 3. Please do not reformat code sections if not required. Always try to follow the project related code formatting rules.
 4. Do not include useless modifications such as changing white spaces..
 5. No one is happy to criticize your code changes. Therefore, please perform your own code review before submitting any pull requests since this can save project maintainer a huge amount of time during the code revise.
    * To do so, change into the branch you wanna submit and check all changes against the project master branch. Therefore, use git to track all changes: ``git diff --word-diff master``

### Java
 1. Please never return ``null`` in any methods bodies since this can easily lead to ``NullpointerExceptions``.
    * Use ``void`` instead if there is nothing to return or throw an ``CouldNotPerformException`` in error cases.
 2. Please do not use ``boolean`` as return values to indicate success or error of a method execution.
    * Thats what Exception are good for. Therefore, throw an ``CouldNotPerformException`` in error cases.
 3. Do not just print exceptions via ``System.out`` / ``System.err`` or by passing the exception to any logger print.
    * Please use the ``ExceptionPrinter.printHistory(...)`` for printing any exceptions.
 4. Declare global and local variables always ``final`` if useful.
 5. Always use ``org.slf4j`` as logging framework since its an logger abstraction layer which enables one to exchange the logger backend later without any code modifications.
    * Therefore, try to avoid logging via ``System.in`` / ``System.err``

## Project Guidelines

### Installer
  * Provide an ``install.sh`` script in any repository which enables an easy installation of the application. Furthermore, try to minimize external dependencies such as using multiple build tools and warn if those are not available.

### License
  * Include the license file on top-level in any project repository.
