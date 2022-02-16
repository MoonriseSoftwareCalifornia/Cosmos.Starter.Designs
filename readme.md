# Open Source Layouts for Cosmos CMS

This repository is a collection of open source starter layouts that have been fitted for [Cosmos CMS](https://cosmos.moonrise.net).
Each layout is packaged to be easily imported into your Cosmos website.

Here is a list of layouts currently provided here:

* [California Design System](https://cosmos-layouts.moonrise.net/Layouts/ca-ds/layout.html) Author: [California Office of Digital Innovation](https://designsystem.webstandards.ca.gov/)
* [Bootstrap 5 Starter](https://cosmos-layouts.moonrise.net/Layouts/bs5-strt/layout.html) Author: [Bootstrap Team](https://getbootstrap.com/docs/5.0/examples/starter-template/) License: [MIT](https://github.com/twbs/bootstrap/blob/main/LICENSE)
* [Bootstrap 5 by Traversy Media](https://cosmos-layouts.moonrise.net/Layouts/tm-dev/layout.html) with [YouTube Tutorial](https://youtu.be/4sosXZsdy-s) Author: [Traversy Media](https://traversymedia.com/) 
* [Clean Blog Layout](https://cosmos-layouts.moonrise.net/Layouts/sb-cb/layout.html) Author: [Start Bootstrap](https://github.com/StartBootstrap/startbootstrap-clean-blog/) License: [MIT](https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
* [Creative Tim Material Kit 2](https://cosmos-layouts.moonrise.net/Layouts/ct-mk2/layout.html) Author: [Creative Tim](https://www.creative-tim.com/) License: [MIT](https://github.com/timcreative/freebies/blob/master/LICENSE.md)
* [MD Bootstrap Carousel Full Cover](https://cosmos-layouts.moonrise.net/Layouts/mdb-cfc/layout.html) Author: [MD Bootstrap](https://mdbootstrap.com/freebies/carousel-full-cover/) License:[MIT](https://mdbootstrap.com/general/license/)
* [MD Bootstrap Dark Theme](https://cosmos-layouts.moonrise.net/Layouts/mdb-dark/layout.html) Author: [MD Bootstrap](https://github.com/mdbootstrap/bootstrap-5-dark-theme) License:[MIT](https://mdbootstrap.com/general/license/)

# How to Add Your Layout

Thank you for contributing!  You're help is very much appreciated!

Here is how to add your layout to the collective:

  * This repository is an Azure Static website built with Visual Studio Code with the [Static Website plugin](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps). You may want to install this before continuing.
  * "Fork" [this repository](https://github.com/CosmosSoftware/Cosmos.Starter.Layouts).
  * Notice within the "src" folder you will see a folder called "Layouts."  This is where the community layouts are placed.
  * Create a new folder here for your own.  Keep the folder name short.
  * Take a look at the file located in "[Layouts/Blank/layout.html](https://github.com/CosmosSoftware/Cosmos.Starter.Layouts/blob/main/src/Layouts/blank/layout.html)".  This is an example layout that is "blank." Within it are notes and comments that can help you create a new layout.
  * Now you want to add your layout to [the catalog](https://github.com/CosmosSoftware/Cosmos.Starter.Layouts/blob/main/src/catalog.json).
  * Finally, create the catalog.json file in your new folder.  This file points to example pages for your layout. See [the example](https://github.com/CosmosSoftware/Cosmos.Starter.Layouts/blob/main/src/Layouts/blank/catalog.json) in the blank layout.
  * Once you have a layout ready to contribute, create a "pull request."

Once the pull request is accepted and code is merged, your layout will be added to the others. When people install Cosmos CMS, they may be using your layout!

If you have questions, please email: mars@moonrise.net.
