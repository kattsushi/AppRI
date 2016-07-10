import gulp from 'gulp';
import path from 'path';
import symdest from 'gulp-symdest';
import electron from 'gulp-atom-electron';
import gulpLoadPlugins from 'gulp-load-plugins';
import {
    SRC_DIR,
    SRC_ELECTRON,
    PROD_DIR, 
    SRC_PACKAGE,
    DIST_PACKAGE
} from '../../gulp.conf';

gulp.task('build:package:prod', [
  'build:package:prod:electron',
  'build:package:prod:osx',
  'build:package:prod:linux',
  'build:package:prod:windows'
]);
 
gulp.task('build:package:prod:electron', ()=> {
  return gulp.src([
    SRC_ELECTRON + '/main.js',
    SRC_ELECTRON + '/package.json'
  ])
    .pipe(gulp.dest(PROD_DIR));
});

gulp.task('build:package:prod:osx', ()=> {
  return gulp.src(PROD_DIR + '/**/*')
    .pipe(electron({
      version: '0.36.7',
      platform: 'darwin'
    }))
    .pipe(symdest(DIST_PACKAGE + '/osx'));
});
 
gulp.task('build:package:prod:linux', ()=> {
  return gulp.src(PROD_DIR + '/**/*')
    .pipe(electron({
      version: '0.36.7',
      platform: 'linux'
    }))
    .pipe(symdest(DIST_PACKAGE + '/linux'));
});
 
gulp.task('build:package:prod:windows', ()=> {
  return gulp.src(PROD_DIR + '/**/*')
    .pipe(electron({
      version: '0.36.7',
      platform: 'win32'
    }))
    .pipe(symdest(DIST_PACKAGE + '/windows'));
});