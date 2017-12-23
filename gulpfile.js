var gulp = require('gulp'),

/*********** Jade and Pug templating ***********/
    pug = require('gulp-pug'),

/*********** SASS and SCSS compiling ***********/
    sass = require('gulp-sass'),
    autoPrefixer = require('gulp-autoprefixer'),
    purify = require('gulp-purifycss'),

/*********** JS concat ***********/
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),

/*********** IMG minification ***********/
    imagemin = require('gulp-imagemin'),

/*********** Static server ***********/
    bs = require('browser-sync').create(),

/*********** Path vars ***********/
    sassSrc = 'assets/sass/',
    jsSrc = 'assets/js/',

    sassDest = 'dist/assets/css/',
    jsDest = 'dist/assets/js/';

/*********** HTML teplating and compiling ***********/
gulp.task('pug', function () {
    return gulp.src('templates/*.pug')
        .pipe(pug({
            pretty: false
        }))
        .on('error',function(e){
            console.log(e);
        })
        .pipe(gulp.dest('dist/'));
});

/*********** Styles compiling ***********/
gulp.task('sass', function () {
    return gulp.src(sassSrc + '*.sass')
        .pipe(sass({
            ouputStyle: 'compressed'
        })
        .on('error', sass.logError))
        .pipe(autoPrefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(purify(['./dist/**/*.js', './dist/**/*.html']))
        .pipe(gulp.dest(sassDest))
        .pipe(bs.stream());
});

/*********** Concat JS files ***********/
gulp.task('concat', function () {
    return gulp.src(jsSrc + '*.js')
        .pipe(concat('functions.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

/*********** Concat JS files ***********/
gulp.task('imgMin', function () {
    return gulp.src('img/**/*.*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({plugins: [{removeViewBox: true}]})
    ]))
    .pipe(gulp.dest('dist/assets/img/'));
});

/*********** BrowserSync Serve ***********/
gulp.task('serve', ['pug', 'sass', 'concat'], function () {
    bs.init({
        server: {
            baseDir: 'dist/'
        }
    });
});

/*********** Watch files ***********/
gulp.task('watch', function () {
    gulp.watch('templates/**/*.pug', ['pug']).on('change', bs.reload);
    gulp.watch('assets/sass/**/*.sass', ['sass']);
    gulp.watch('assets/js/*.js', ['concat']).on('change', bs.reload);
    gulp.watch('img/**/*.*', ['imgMin']);
});

/*********** Default task ***********/
gulp.task('default', ['watch', 'serve']);
