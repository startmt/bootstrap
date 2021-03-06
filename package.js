// package metadata file for Meteor.js

Package.describe({
  name: 'bootstrap-4', // https://atmospherejs.com/twbs/bootstrap
  summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web.',
  version: '5.0.0-alpha2',
  git: 'https://github.com/twbs/bootstrap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles([
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js'
  ], 'client');
});
