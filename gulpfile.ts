var gulp = require('gulp');
var gzip = require('gulp-gzip');
//compress dist/project_name/*.* files and images/*.*
gulp.task('compress', function() {
   gulp.src(['./dist/ngfirecamp/*.*'])
      .pipe(gzip())
      .pipe(gulp.dest('./dist/ngfirecamp/'));
   gulp.src(['./dist/ngfirecamp/assets/icons/*.*'])
      .pipe(gzip())
      .pipe(gulp.dest('./dist/ngfirecamp/assets/icons'>));
      return gulp.src(['./dist/ngfirecamp/assets/images/*.*'])
          .pipe(gzip())
          .pipe(gulp.dest('./dist/ngfirecamp/assets/images/'));
  });
