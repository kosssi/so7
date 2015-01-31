gulp = require 'gulp'
gutil = require 'gulp-util'
jade = require 'gulp-jade'
templateCache = require 'gulp-angular-templatecache'

gulp.task 'jade', (done) ->
  gulp.src(['src-public/**/[^_]*.jade'])
    .pipe(jade(doctype: 'html'))
    .on 'error', gutil.log
    .pipe gulp.dest('public')
    .on 'end', done
  return
