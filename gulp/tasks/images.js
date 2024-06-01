import gulp from 'gulp';
import changed from 'gulp-changed';
import config from '../config';

const copyImages = () => (
  gulp.src(`${config.src.images}/**/*`)
    .pipe(changed(config.dest.images))
    .pipe(gulp.dest(config.dest.images))
);

export const imagesBuild = gulp.series(copyImages);

export const imagesWatch = () => gulp.watch(`${config.src.images}/**/*`, imagesBuild);
