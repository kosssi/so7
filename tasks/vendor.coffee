gulp = require 'gulp'
gutil = require 'gulp-util'
concat = require 'gulp-concat'

gulp.task 'vendor', (done) ->
  gulp.src [
    'bower_components/bootstrap/dist/js/bootstrap.min.js'
    'bower_components/moment/moment.js'
    'bower_components/lodash/dist/lodash.js'
    'bower_components/classie/classie.js'
  ]
  .pipe(concat('vendor.js'))
  .on 'error', gutil.log
  .pipe gulp.dest('public/js')
  .on 'end', done
  return
