import gulp from 'gulp';
import config from '../config';
import sharpResponsive from 'gulp-sharp-responsive';

const sharp = () => {
  return gulp.src(`${config.src.images}/**/*.{jpg,png}`)
    .pipe(sharpResponsive({
      formats: [
        // jpeg
        { format: "jpeg", quality: 80},
        // webp
        { format: "webp", quality: 80 },
        // png
        { format: "png", quality: 80 },
      ],
    }))
    .pipe(gulp.dest(`${config.dest.images}`));
};

export default sharp;
