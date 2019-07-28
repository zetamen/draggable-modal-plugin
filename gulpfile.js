const gulp = require('gulp');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('build', function() {
    return gulp.src('draggablemodal/draggablemodal.js')
        .pipe(rename({ suffix: '.min' }))
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify())
        .pipe(gulp.dest('draggablemodal'));
});