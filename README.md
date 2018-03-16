# [Studio Ghibli API](https://github.com/Neil188)

> [Tania Rascia's How to Connect to an API with JavaScript article](https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/)

![Logo of the project](./dist/images/ghibliapp.png)

A simple web app that connects to a Studio Ghibli API, retrieves the data with JavaScript, and displays it on the front end of a website.

Updated to use fetch API, widely [supported](https://caniuse.com/#feat=fetch) in most modern browsers.
Note a [polyfill](https://github.com/github/fetch) is available, but as this is only a demo I haven't included it.

logo.png included from [Tania Rascia's ghibli project](https://github.com/taniarascia/sandbox/tree/master/ghibli).
Optimised using [Optimzilla](http://optimizilla.com/).

## Installation Instructions

1. Clone locally using:

    `git clone https://github.com/Neil188/studioghibliapi.git`

2. Install dependencies (Eslint and prettier, no dependencies required to run the code so this can be skipped) :

    `npm install`

3. To build minified files in dist folder:

    `npm run build`

    Files can now be tested from dist/index.html

4. To push latest build to Git Hub pages:

    `npm run deploy`

    Note this will re-run build first.
    Make sure 'homepage' setting in package.json is correct before running deploy.

## Auditing

After any changes re-run Chrome DevTools Audits to make sure results have not significantly changed.
Last report has been stored in audits folder.  Scores:

* Performance 90
* Progressive Web App 55 (not built as a web app so can ignore)
* Accessibility 100
* Best Practices 100
* SEO 100
