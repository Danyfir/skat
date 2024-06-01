import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import sassGlob from 'gulp-sass-glob';
import config from '../config';

const sass = gulpSass(dartSass);

export const sassBuild = () => (
  gulp.src(`${config.src.sass}/style.scss`, { sourcemaps: config.isDev })
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass({
      includePaths: ['node_modules'],
    }))
    .pipe(gulpif(config.isProd, gcmq()))
    .pipe(gulpif(config.isProd, autoprefixer({
      cascade: false
    })))
    .pipe(gulpif(config.isProd, cleanCSS({ level: 2 })))
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(gulp.dest(config.dest.css, { sourcemaps: config.isDev }))
);

export const sassWatch = () => gulp.watch(`${config.src.sass}/**/*.scss`, sassBuild);
