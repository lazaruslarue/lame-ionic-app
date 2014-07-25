Mobile Angular Ionic Express app
================================

This is an addon starter mobile application template using the [Ionic Framework](http://ionicframework.com/), as well as [Angular UI Router](http://angular-ui.github.io/ui-router/), [Angular-UI-Bootstrap](http://angular-ui.github.io/), [Express JS](http://expressjs.com/). 

What's missing: 
* Testing
* Concatenated JS files... ie. Gulp isn't really working yet
* A database (if you want Neo4j as a db see [this repo](https://github.com/lazaruslarue/riffin-on-ripple) )
* there's probably a lot of other stuff missing... submit issues when you find it

Where'd it come from?
* The ionic stuff is lifted from Ionic's blank App
* The rest is from a library I built

## How to use this template mobile app

```bash
$ sudo npm install -g ionic cordova gulp express nodemon
$ npm install
$ bower install
$ ionic serve
```
Unless you have a PORT environment variable set, you'll find your app sitting at ````localhost:3000````

### To build the Ionic app:
(this section is totally lifted from Ionic)
cd into `myApp` and run:

```bash
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

Substitute ios for android if not on a Mac, but if you can, the ios development toolchain is a lot easier to work with until you need to do anything custom to Android.

## Issues
I'll gladly accept pull requests that make sense and are properly documented. Alternatively, if you have any suggestions for how to make it better, open up a new issue or comment on an existing one. 

## everything below here is lifted from Ionic. 

## Using Sass (optional)

This project makes it easy to use Sass (the SCSS syntax) in your projects. This enables you to override styles from Ionic, and benefit from
Sass's great features.

Just update the `./scss/ionic.app.scss` file, and run `gulp` or `gulp watch` to rebuild the CSS files for Ionic.

Note: if you choose to use the Sass method, make sure to remove the included `ionic.css` file in `index.html`, and then uncomment
the include to your `ionic.app.css` file which now contains all your Sass code and Ionic itself:

```html
<!-- IF using Sass (run gulp sass first), then remove the CSS include above
<link href="css/ionic.app.css" rel="stylesheet">
-->
```

## Updating Ionic

To update to a new version of Ionic, open bower.json and change the version listed there.

For example, to update from version `1.0.0-beta.4` to `1.0.0-beta.5`, open bower.json and change this:

```
"ionic": "driftyco/ionic-bower#1.0.0-beta.4"
```

To this:

```
"ionic": "driftyco/ionic-bower#1.0.0-beta.5"
```

After saving the update to bower.json file, run `gulp install`.

Alternatively, install bower globally with `npm install -g bower` and run `bower install`.
