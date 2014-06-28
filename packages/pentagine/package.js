// To add pentagine run "meteor add pentagine".

Package.describe({
  summary: "Pentagine repackaged for Meteor."
});

Package.on_use(function (api) {
  api.add_files('lib/pentagine.js', ['client']);
  
  api.export && api.export(['Pentagine'], 'client');
});

Package.on_test(function (api) {
  // Add tests
});
