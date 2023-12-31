const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')
const rename = require('gulp-rename')

function buildStyles() {
  src('uzbek/**/*.scss').pipe(sass({ outputStyle: 'compressed' })).pipe(rename('uzbek.css')).pipe(dest('css'));
  return src('uzbek/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('css'))
}

function watchTask() {
  watch(['uzbek/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)