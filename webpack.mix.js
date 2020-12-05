const mix = require('laravel-mix');
require('dotenv').config();
const LiveReloadPlugin = require('webpack-livereload-plugin');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/all.scss', 'public/css')
    .sass('resources/sass/app.scss', 'public/css')
    .copyDirectory('resources/img', 'public/img')
    .disableSuccessNotifications()
    .browserSync('http://localhost:8000');

    /*.options({
        hmrOptions: {
            host: 'localhost',
            port: '9000'
        }
    });*/


/*mix.webpackConfig({
    plugins: [
        new LiveReloadPlugin()
    ]
});*/
