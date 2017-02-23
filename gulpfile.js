var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnext = require('postcss-cssnext'),
    rename = require("gulp-rename"),
    simpleGrid = require('postcss-simple-grid'),
    easyImport = require('postcss-easy-import'),
    connect = require('gulp-connect'),
    fileinclude = require('gulp-file-include');

//CSS
gulp.task('css', function () {
    var processors = [
        easyImport,
        simpleGrid({separator: ['--']}),
        cssnext({browsers: ['last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']})
    ];
    return gulp.src('./src/css/_*.css')
        .pipe(postcss(processors))
        .pipe(rename("./css/main.css"))
        .pipe(gulp.dest('./'));
});

//Rename

//Server
gulp.task('connect', function() {
	connect.server({
		root: './',
		livereload: true
	});
});

//Include
gulp.task('fileinclude', function() {
  gulp.src(['./src/components/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

//Watch
gulp.task('watch', function() {
	gulp.watch(['./src/**/_*.css'], ['css']);
	gulp.watch(['./src/components/*.html'], ['fileinclude']);
});

gulp.task('default', ['css', 'connect', 'fileinclude', 'watch'], function() {});
