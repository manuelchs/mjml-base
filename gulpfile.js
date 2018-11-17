var gulp = require('gulp')
var mjml = require('gulp-mjml')
var mjmlEngine = require('mjml').default

gulp.task('default', function () {
    console.log('Hello, this is the fantastic world of Gulp')
})

gulp.task('mjml', function () {
  return gulp.src('./src/mjml/**/*.mjml')
    .pipe(mjml(mjmlEngine, {minify: false}))
    .pipe(gulp.dest('./src/html'))
})

gulp.task('watch', function () {
    gulp.watch('./src/mjml/**/*.mjml', ['mjml'])
})