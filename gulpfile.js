var gulp = require('gulp'),
  gts = require('gulp-typescript'),
  ts = require('typescript'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('typescript', function(){
  var tsProject = gts.createProject('tsconfig.json', {
    typescript: ts
  });

  return gulp.src(['typings/**/**.ts', 'typescript/*.ts'])
    .pipe(sourcemaps.init())
    .pipe(gts(tsProject))
    .pipe(sourcemaps.write('../maps', { includeContent: false, sourceRoot: '/typescript' }))
    .pipe(gulp.dest('js'));
});