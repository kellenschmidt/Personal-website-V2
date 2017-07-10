# kellenschmidt.com
[![Stories in Progress](https://badge.waffle.io/kellenschmidt/kellenschmidt.com.png?label=in%20progress&title=In%20progress)](https://waffle.io/kellenschmidt/kellenschmidt.com?utm_source=badge)
[![Stories in Ready](https://badge.waffle.io/kellenschmidt/kellenschmidt.com.png?label=ready&title=Ready)](https://waffle.io/kellenschmidt/kellenschmidt.com?utm_source=badge)

https://kellenschmidt.com

Personal website of Kellen Schmidt written completely from scratch and designed to illustrate his abilities, work experience, and portfolio of projects.

## Tools used
### Bootstrap 4
The most popular HTML, CSS, and JS framework in the world for building responsive, mobile-first projects on the web. https://v4-alpha.getbootstrap.com/

### Sass
The most mature, stable, and powerful professional grade CSS extension language in the world. http://sass-lang.com

### MDBootstrap
Powerful and free Material Design UI KIT. Combines the best of Bootstrap and Google's Material Design into one package. https://mdbootstrap.com

### Wow.js
Reveals CSS animations as you scroll down a page. Triggers animate.css animations. http://mynameismatthieu.com/WOW

### Animate.css
Cool, fun, and cross-browser animations for just-add-water-awesomeness. https://daneden.github.io/animate.css

### Cron
Software utility that enables scheduling of commands or shell scripts to run periodically at fixed times, dates, or intervals (Used to schedule automatic renewal of https certificates). https://github.com/kelektiv/node-cron

## How to run the project locally
1. Download all of the files from github
    ```
    git clone https://github.com/kellenschmidt/kellenschmidt.com.git
    cd kellenschmidt.com/public/
    ```
2. Install dependencies
    ```
    npm install
    ```
3. Install Sass (If you don't have it already)
    ```
    gem install sass
    ```
    
4. Start Sass compiler
    ```
    sass --watch scss:stylesheets
    ```
5. Open the website
    ```
    open index.html
    ```
