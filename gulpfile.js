var gulp = require("gulp");
var less = require("gulp-less");
var concat = require("gulp-concat");
var sourcemaps = require('gulp-sourcemaps');

gulp.task("less", function () {
   return gulp.src("less/**/*.less")
       .pipe(less())
       .pipe(gulp.dest("css"));
});

gulp.task("default", function () {

    gulp.src('./less/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('./maps'))
        .pipe(concat("main.css"))
        .pipe(gulp.dest('./css'));
})