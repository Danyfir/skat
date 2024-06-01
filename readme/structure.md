# Структура папок и файлов

```text
new-gulp
├── gulp
|   ├── tasks
|   |   ├── assets.js
|   |   ├── beautify-html.js
|   |   ├── clean.js
|   |   ├── images.js
|   |   ├── pug.js
|   |   ├── scripts.js
|   |   ├── server.js
|   |   ├── sprite.js
|   |   ├── squosh.js
|   |   └── styles.js
|   └── config.js
├── src
│   ├── assets
│   │   ├── favicon
|   |   ├── fonts
|   |   ├── icons
|   |   |   ├── mono
|   │   │   └── multi
|   |   ├── img
│   |   └── js
|   |       └── backend.js
│   ├── js
│   │   ├── helpers
|   |   ├── modules
|   |   └── main.js
│   ├── pug
│   │   ├── data
│   │   │   └── config.pug
│   │   ├── layout
|   |   |   └── default.pug
│   │   ├── mixins
|   |   ├── pages
|   |   |   └── index
|   |   |       └── intro.pug
|   |   └── parts
|   |       └── modals
│   ├── scss
│   │   ├── helpers
│   │   │   └── media.scss
│   │   ├── pages
|   |   |   └── index
|   |   |       └── intro.scss
│   │   ├── settings
│   │   │   ├── fonts.scss
|   │   │   ├── mixins.scss
|   |   |   └── settings.scss
│   │   ├── UI
|   │   │   ├── controls
|   |   |   |   ├── footer.scss
|   |   |   |   └── button.scss
|   │   │   ├── footer.scss
|   |   |   ├── header.scss
|   |   |   └── modal.scss
│   │   ├── vendor
|   │   |   └── reset.scss
│   |   └── style.scss
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .npmrc
├── .pug-lintrc.json
├── .stylelintignore
├── .stylelintrc
├── gulpfile.babel.js
├── package.json
└── README.md
```

## `gulp`

В папке `gulp` хранятся основные файлы сборки, содержащий Gulp-задачи.

## `src`

В папке `src` хранятся исходные файлы проекта.

## `src/assets/favicon`

Папка `favicon` предназначена для хранения favicon.

## `src/assets/fonts`

Папка `fonts` предназначена для хранения шрифтов(woff/woff2).

## `src/assets/icons`

Папка `src/assets/icons` предназначена для хранения векторных (SVG) иконок.

## `src/assets/icons/mono`

Папка `src/assets/icons/mono` предназначена для хранения иконок у которых можно менять fill, stroke

## `src/assets/icons/multi`

Папка `src/assets/icons/multi` предназначена для хранения иконок у которых не возможно поменять fill, stroke(например разноцветная иконка)

## `src/assets/img`

Папка `img` предназначена для хранения изображений.
При сборке файлы из данной папки попадают в `build/assets/images`.

## `src/assets/js`

Папка `src/assets/js` предназначена для хранения js кода не требующего минификации(пр. для общего с бекендом кода) либо для библеотек которых нет в npm.
При сборке данный файл попадает в `build/assets/js`.

## `src/js`

Папка `src/js` предназначена для хранения скриптов.

## `src/js/helpers`

Папка `src/js/helpers` предназначена для хранения вспомогалтельных скриптов.

## `src/js/modules`

Папка `src/js/modules` предназначена для хранения модулей, скритпы отвечающие основной логике сайта.

## `src/js/main.js`

Файл `src/js/main.js` предназначен для импорта модулей.
При сборке данный файл попадает в `build/assets/js`.

## `src/pug`

Папка `src/pug` предназначена для хранения шаблонов.

## `src/pug/data`

Папка `src/pug/data` предназначена для хранения основных переменных.

## `src/pug/layout.pug`

В файле `src/pug/layout.pug` хранится базовый шаблон страниц сайта.

## `src/pug/mixins.pug`

Файл `src/pug/mixins.pug` предназначен для подключения Pug-миксин из папки `src/pug/mixins`.

## `src/pug/pages`

Папка `src/pug/pages` предназначена для хранения частей кода страниц.

## `src/pug/parts`

Папка `src/pug/parts` предназначена для хранения компонентов.

## `src/scss`

Папка `src/scss` предназначена для хранения стилей.

## `src/scss/helpers`

Папка `src/scss/helpers` предназначена для хранения вспомогательных SCSS-функций.

## `src/scss/pages`

Папка `src/scss/pages` предназначена для хранения SCSS кода страниц.

## `src/scss/settings`

Папка `src/scss/pages` предназначена для хранения SCSS кода fonts/mixins/settings.scss.

## `src/scss/vendor`

Папка `src/scss/vendor` предназначена для хранения стилей сторонних библиотек.

## `src/scss/UI.scss`

Файл `src/scss/UI.scss` предназначен для хранения стилей компонентов.

## `.babelrc`

`.babelrc` — файл настроек JavaScript-транспайлера Babel.

## `.editorconfig`

`.editorconfig` — файл настроек редактора.

## `.eslintignore`

`.eslintignore` — файл настроек ESLint для игнорирования файлов.

## `.eslintrc`

`.eslintrc` — файл настроек ESLint.

## `.gitignore`

`.gitignore` — файл настроек Git для игнорирования файлов.

## `.npmrc`

`.npmrc` — файл настроек npm.

## `.pug-lintrc.json`

`.pug-lintrc.json` — файл настроек pug-lint.

## `.stylelintignore`

`.stylelintignore` — файл настроек stylelint для игнорирования файлов.

## `.stylelintrc`

`.stylelintrc` — файл настроек stylelint.

## `gulpfile.babel.js`

`gulpfile.babel.js` — основной файл сборки.

## `package.json`

`package.json` — файл, содержащий базовую информацию о проекте и список требуемых библиотек.

## `README.md`

`README.md` — описание проекта.
