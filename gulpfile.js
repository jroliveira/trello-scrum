var gulp = require('gulp');
var vfs = require('vinyl-fs');
var karma = require('karma').server;

/**
 * Run jscs code style
 */
gulp.task('jscs', function () {
  var jscs = require('gulp-jscs');

  vfs.src('./src/js/**/*.js')
    .pipe(jscs({
      esnext: true,
      configPath: '.jscsrc'
    }));
});

/**
 * Run jshint for code analysis
 */
gulp.task('lint', function () {  
  var jshint = require('gulp-jshint');

  vfs.src('./src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

/**
 * Run test once and exit
 */
gulp.task('test', ['lint'], function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', ['lint'], function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});

gulp.task('default', ['tdd']);