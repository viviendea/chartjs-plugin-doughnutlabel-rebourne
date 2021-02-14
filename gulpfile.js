'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var zip = require('gulp-zip');
var merge = require('merge2');
var path = require('path');
var rollup = require('rollup-stream');
var source = require('vinyl-source-stream');
var pkg = require('./package.json');
var gulpIf = require('gulp-if');
const browserSync = require('browser-sync');

var argv = require('yargs')
  .option('output', {alias: 'o', default: 'dist'})
  .option('samples-dir', {default: 'samples'})
  .option('docs-dir', {default: 'docs'})
  .option('www-dir', {default: 'www'}).argv;

function watch(glob, task, done) {
  gutil.log('Waiting for changes...');
  browserSync.init({
    server: {
      baseDir: ['./', './samples/'],
    },
  });
  return gulp
    .watch(glob, task)
    .on('end', done)
    .on('change', function(file) {
      gutil.log('Changes detected for', path.relative('.', file));
    })
    .on('change', browserSync.reload);
}

function isFixed(file) {
  return file.eslint !== null && file.eslint.fixed;
}

gulp.task(
  'lint',
  gulp.series(function() {
    var files = ['samples/**/*.js', 'src/**/*.js', 'test/**/*.js', '*.js'];

    return gulp
      .src(files)
      .pipe(eslint({fix: true}))
      .pipe(eslint.format())
      .pipe(
        gulpIf(
          isFixed,
          gulp.dest((file) => file.base)
        )
      )
      .pipe(eslint.failAfterError());
  })
);

gulp.task(
  'build',
  gulp.series(function(done) {
    var out = argv.output;
    var task = function() {
      return rollup('rollup.config.js')
        .pipe(source(pkg.name + '.js'))
        .pipe(gulp.dest(out))
        .pipe(rename(pkg.name + '.min.js'))
        .pipe(streamify(uglify({output: {comments: 'some'}})))
        .pipe(gulp.dest(out));
    };

    return argv.watch
      ? [task(), watch(['src/**/*.js', 'samples/**/*.js'], task, done)]
      : task();
  })
);

gulp.task(
  'samples',
  gulp.series(function() {
    // since we moved the dist files one folder up (package root), we need to rewrite
    // samples src="../dist/ to src="../ and then copy them in the /samples directory.
    var out = path.join(argv.output, argv.samplesDir);
    return gulp
      .src('samples/**/*', {base: 'samples'})
      .pipe(
        streamify(
          replace(/src="((?:\.\.\/)+)dist\//g, 'src="$1', {skipBinary: true})
        )
      )
      .pipe(gulp.dest(out));
  })
);

gulp.task(
  'package',
  gulp.series('build', 'samples', function() {
    var out = argv.output;
    var streams = merge(
      gulp.src(path.join(out, argv.samplesDir, '**/*'), {base: out}),
      gulp.src([path.join(out, '*.js'), 'LICENSE.md'], {allowEmpty: true})
    );

    return streams.pipe(zip(pkg.name + '.zip')).pipe(gulp.dest(out));
  })
);

gulp.task('default', gulp.series('build'));
