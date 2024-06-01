import gulp from 'gulp';
import config from '../config';
import prettyHtml from 'gulp-pretty-html';
import htmlmin from 'gulp-htmlmin';

const beautifyHtml = () => {
  return gulp.src('./build/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      removeComments: true
    }))
    .pipe(prettyHtml({
      indent_size: 2,
      indent_char: ' ',
      indent_inner_html: true,
      unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br'],
      content_unformatted: [],
      wrap_line_length: 0,
      inline: [],
      extra_liners: ['header', 'main', 'footer', '/body']
    }))
    .pipe(gulp.dest('./build'));
};

export default beautifyHtml;
