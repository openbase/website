---
---

# Guidelines

This collection gives you an overview about the guidelines we are follow to improve our teamwork.

::: tip INFO
This section is still in progress and support highly welcome.
:::

## Code Guidelines

### Java
 1. Please never return null instances in any methods since this can easyly lead to Nullpointer Exceptions.
    * Use void instead if there is nothing to return or throw an exception in error case.
 2. Please do not use boolen return values to encode success or error of a method execution.
    * Thats what Exception are good for.
 3. Do not just print exceptions via System.out / System.err or by passing the exception to any logger print.
    * Please use the ExceptionPrinter.printHistory(...) for printing any exceptions.

## Project Guidelines

### Installer
  * Provide an install.sh script in any repository which enables an easy installation of the application. Furthermore, try to minimize external dependencies such as using multible build tools and warn if those are not available.

### License
  * Include the licence file in any project.
