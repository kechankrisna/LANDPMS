## About Laraveutify

Laraveutify is created in order to speed up production with laravel and vue. This application has been configed everything which need to done on using Laravel + Vue + Vuetify. It is also include other neccessary libray such chat, moment,... to complete a full application.

## Guide Line

Make sure you have composer and nodejs install on your computer otherwise you can go to install them first by the links [Install composer](https://getcomposer.org/) and [Install nodejs](https://nodejs.org/en/) or [Install yarn](https://yarnpkg.com/)

    open your terminal
    git clone https://github.com/kechankrisna/laravuetify.git
    cd laravuetify
    composer install
    npm install
    php -r "file_exists('.env') || copy('.env.example', '.env');"
    go to .env to config your database
    php artisan key:generate
    php artisan migrate:reset
    php artisan migrate
    php artisan passport:install
    php artisan storage:link
    go to .env to update your ClIENT_KEY 1 and 2 and config your mail driver
    open file app/mail.php to config your mailing setup
    php aritan serve && npm run watch
    

## Future

I am planning to make this framework to work as full dashboard with metarial design supported by vuetify. So that developers can bring it to their production faster without worry about configuration anymore. Thank you.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Learning Vue && Vuex && Vue-router
Vue.js is an MIT-licensed open source project with its ongoing development made possible entirely by the support of these awesome backers. 
For questions and support please use the official forum or community chat. The issue list of this repo is exclusively for bug reports and feature requests. [Vue documentation](https://github.com/vuejs/vue).

## Learning Vuetify
Vuetify is a Material Design Component Framework for the Vue framework. We believe that you shouldn't need design skills to build beautiful Vue applications. More information please visit [Vuetify documentation](https://github.com/vuetifyjs/vuetify)


## Laravuetify Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please contact me through email ke.chankrisna@mylekha.app


## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

    The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

    Vue is MIT-licensed open source project with its ongoing development made possible entirely by the support of these awesome backers. [MIT license](https://opensource.org/licenses/MIT).

    Vuetify is a Material Design Component Framework for the Vue framework licensed under the [MIT license](https://opensource.org/licenses/MIT).