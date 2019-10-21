---
---

# Tools

This collection gives you an overview about the tools we use during development.

## IDEs

### Idea - Java Development

For Java we recommend to use the Jetbrain IntelliJ IDE (Idea) with the following setting modifications:

* Enable the Auto-Import feature in IntelliJ for inner classes. This is especially useful to get a clearer overview when using our openbase type library.
  * To do so, go to Settings ``Editor > Code Style > Java`` switch to the ``Imports Tab`` and select the ```Insert imports for inner classes``` checkbox.

## Artifact Deployment

### Java

All projects are deployed with maven by using the group id ``<groupId>org.openbase</groupId>``.
The travis build jobs taking care of deploying our java artifact to the central maven repositories.

### Javascript 

Our javascript are currently manually deployed to the npm repository.
Make sure our project id starts with ```@openbase/``` associate the artifact with our organization. 

## Project Management and Issue Tracker

In general we are using Github to manage our projects and to organize our issues.
To access our issue board, we recommend to install [ZenHub](https://www.zenhub.com) as browser plugin.
This highly improves the issue overview and is free to use for open source projects.
Once installed, a new tab in the github repository view is added which links to the repository related board.
The BCO issue board for example can be accessed via <https://www.github.com/openbase/bco.dal#zenhub>

