# GULP сборка

## Основные возможности и используемые технологии

* Система сборки [Gulp](https://gulpjs.com/)
* Оптимизация изображений.
* Генерация SVG-спрайтов.
* Шаблонизация с помощью [Pug](https://pugjs.org/).
* CSS-препроцессор [SCSS](http://sass-lang.com/) и [Autoprefixer](https://autoprefixer.github.io/ru/).
* Проверка кода линтерами ([pug-lint](https://www.npmjs.com/package/pug-lint), [stylelint](https://stylelint.io/), [ESLint](http://eslint.org/)).
* [Browsersync](https://www.browsersync.io/), автоматическое обновление страницы при разработке.
* Множество дополнительных параметров сборки.


## Начало работы

Для установки:

```bash
npm install
```

После установки пакетов можно запускать 'gulp'.

Для режима разработки:

```bash
npm run dev
```

Сборка прод версии:

```bash
npm run build:prod
```

В сборке используется deploy для github pages. Для его настройки в фале package.json в url нужно прописать ваш репозиторий.

```bash
"repository": {
		"type": "git",
		"url": "git+https://github.com/USER/PROJECT.git"
	},
```
После запуска команды создастся вторая ветка с деплоем.

## Gulp-задачи

* `dev` — основная задача, запускает `watch`. Режим разработки.
* `build:prod` — сборка всех файлов для продакшена, запускает задачи `build --prod`.
* `deploy` — сборка всех файлов для продакшена. Затем деплоит в GHP, запускает задачи `gh-pages`.
* `squoosh` — оптимизирует изображения в папке `build/assets/images`.

## Документация
1. [Структура проекта](readme/structure.md)
1. [Работа с PUG(JADE)](readme/pug.md)
1. [Работа с стилями(SCSS)](readme/styles.md)
1. [BEM методолгия](readme/bem.md)
1. [Pixel-perfect](readme/pixel-pefect.md)
1. [Кроссбраузерность](readme/crossbrowser.md)
1. [Работа с GIT](readme/git.md)

