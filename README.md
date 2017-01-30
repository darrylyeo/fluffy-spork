# fluffy-spork ![Travis CI Build](https://travis-ci.org/darrylyeo/fluffy-spork.svg?branch=master)
Just playing around with Git. Pull requests welcome.

Join in the fun - we [sure could use more fluff](https://github.com/darrylyeo/fluffy-spork/issues/1).

<img src="https://rawgit.com/darrylyeo/fluffy-spork/master/src/Fluffy%20Sporks.svg" width="400" title="Fluffy.">

# Contributing

Navigate to your terminal and check out the repository:

`git clone git@github.com:darrylyeo/fluffy-spork.git`

Install the npm packages listed in `package.json`. These are used when building.

`npm install`

There are two directories:

 - `/src`: Where all development happens. All code written by you goes here.
 - `/build`: Generated files to be deployed as the end product. **Never modify anything in this folder directly** - leave that to the build tools.

Once you've made your modifications (in `/src`, of course), build the project with Gulp:

`gulp build`

For now, this simply copies all the files from `/src` to `/build`.

If you have any concerns, please [raise an issue](https://github.com/darrylyeo/fluffy-spork/issues) and list to-dos under the appropriate [Project](https://github.com/darrylyeo/fluffy-spork/projects).

May your days be fluffy and sporkly!

— **[Darryl Yeo](https://darryl-yeo.com)**
