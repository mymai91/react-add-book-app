var gulp = require('gulp'),
    connect = require('gulp-connect'), // for server
    open = require('gulp-open'), // for launch browser
    browserify = require('gulp-browserify'), // for browserify or browserify and reactify
    concat = require('gulp-concat'), //for concat any file that we need
    port = process.env.port || 3031;

// Call gulp task

gulp.task('browserify', function () {
  // get main.js file
  gulp.src('./app/src/js/components/main.js') // like call it
      .pipe(browserify({ transform: 'reactify' }))
      .pipe(gulp.dest('./app/dist/js')); // change it
});

// launch browser to the page
gulp.task('open', function () {
  var options = {
    url: 'http://localhost:' + port,
  };
  gulp.src('./app/index.html')
      .pipe(open('', options));
});

// live reload server
gulp.task('connect', function () {
  connect.server({
    root: 'app',
    port: port,
    livereload: true
  });
});

// live reload js
gulp.task('js', function () {
  gulp.src('./app/dist/**/*.js')
      .pipe(connect.reload());
});

// live reload html
gulp.task('html', function () {
  gulp.src('./app/*.html')
      .pipe(connect.reload());
});

// watch files for live reload
gulp.task('watch', function () {
  gulp.watch('app/dist/js/*.js', ['js']);
  gulp.watch('app/index.html', ['html']);
  gulp.watch('app/src/js/**/*.js', ['browserify']);
});

// default of task browserity

gulp.task('default', ['browserify']);

// setup a live serve, launching a browser and watch any change

gulp.task('serve', ['browserify', 'connect', 'open', 'watch']);
