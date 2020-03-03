// core-js and regenerator-runtime should be the first line in
// entry point of app, so that async generators are useable
// when babel compiles and builds the app.
import 'core-js/stable';
import 'regenerator-runtime/runtime';

console.log('HELLO WORLD!');
