# English Monster Academy

A polished neon browser game for teenage B1 English learners. It contains four complete mini-games: Monster Battle, Picture Challenge, Sentence Lab and Word Rush.

## Features

- More than 60 carefully written B1 tasks
- Score, stars, streaks, achievements and local progress saving
- Grammar battles, visual vocabulary, sentence building and timed vocabulary
- Responsive keyboard-accessible interface
- Global sound preference and graceful image/audio fallbacks

## Project structure

```text
index.html
css/style.css
js/main.js
js/monster-battle.js
js/picture-challenge.js
js/sentence-lab.js
js/word-rush.js
images/
sounds/
```

## How to run

1. Open this folder in Visual Studio Code.
2. Install the **Live Server** extension if needed.
3. Open `index.html`.
4. Click **Open with Live Server**.

You can also double-click `index.html`; no build step, server or database is required.

## Replacing assets

Place replacement PNG images in `images/` using the existing filenames. Place MP3 effects in `sounds/` using the existing filenames. Missing assets never stop the game: images receive a styled monster fallback and unsupported audio fails silently.
