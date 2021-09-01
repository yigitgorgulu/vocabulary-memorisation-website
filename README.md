# Vocabulary Memorization Website

A vocabulary review website developed as a [Codementor.io](https://www.codementor.io/projects/web/vocabulary-memorization-website-b0wnnh30k3) project. Developed in Angular with [ng-bootstrap](https://ng-bootstrap.github.io/#/home).

# Description

This is a website which allows users to review the vocabulary they learned in foreign languages, similar to language cards. The users can add languages and words to study. The words they add will be randomly presented to them in the foreign language, and the user should enter the translation in their native language.

## Features

- Add multiple languages
- Study words interactively
- Get scores and results instantly

## How to use

To use this website, first sign up by creating a new account. Then, add any language that you want to learn as a new deck, and start adding words to your list of study words.  
Once you feel like there are enough words, switch to **study mode** to start studying those words. A word in the foreign language will pop up on your screen. In the field below, type what you think the word means in your native language.  
When you finish studying, either after finishing all words or by quitting, you'll see your score (correct / total). You'll also see your answers compared to the correct answers.

## Technology Used

- [Angular](https://angular.io/)
- [json-server](https://github.com/typicode/json-server)
- [ng-bootstrap](https://ng-bootstrap.github.io/#/home)

# Installation


This project depends on my [server-side project](https://github.com/yigitgorgulu/vocabulary-memorisation-website-server). First, follow the installation steps of that project to install it to a desired location on your computer.
Then, you can clone this repository by running `git clone <url>` in your favourite terminal. After cloning the repository, use [npm](https://www.npmjs.com/) to install relevant modules by running `npm install` in the project root. Afterwards, running `ng serve` in the project root should get your project up and running on `localhost:4200`.