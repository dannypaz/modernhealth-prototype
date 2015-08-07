var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint');

gulp.task('lint', function(){
  gulp.src('./**/*.js').
    pipe(jshint());
});

gulp.task('start', function(){
  nodemon({
    script: 'app.js',
    ext: 'js html',
    tasks: ['lint'],
    env: { 'NODE_ENV': 'development' }
  }).
  on('restart', function(){
    console.log('restarted');
  });
});