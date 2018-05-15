'use strict';

var gulp = require ('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');

gulp.task("concatScripts", function() {
    gulp.src([//creates a readable stream of data
        'js/jquery.js', //jquery has to come before sticky plugin
        'js/sticky/jquery.sticky.js', 
        'js/main.js'])//this code depends on code before so it has to be last
    .pipe(concat("app.js"))//pipe method streams source data to concat to which we pass out newly concatenated file
    .pipe(gulp.dest("js"));//stream resulting files to dest method to which we pass the location where the new file will live;app.js
    });

gulp.task("minifyScripts", function(){
    gulp.src("js/app.js")//what file you're compressing
        .pipe(uglify())//to compact code 
        .pipe(rename('app.min.js'))//change the name so you can keep the original file
        .pipe(gulp.dest('js'));//put it in the js folder
});

gulp.task('compileSass', function(){
    gulp.src('scss/application.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task("default", ["hello"], function(){
    console.log("This is the default task!");
});