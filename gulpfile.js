const gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    htmlReplace = require('gulp-html-replace'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    cssmin = require('gulp-cssmin');

gulp.task('default', ['copy'], function () {
    gulp.start('build-img', 'usemin')
});

gulp.task('copy', ['clean'], function () {

    gulp.src('site/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build-img', function () {

    return gulp.src('site/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('usemin', function () {
    gulp.src('dist/**/*.php')
    .pipe(usemin({
        'js' : [uglify],
        'css' : [cssmin]
    }))
    .pipe(gulp.dest('dist'));
});




