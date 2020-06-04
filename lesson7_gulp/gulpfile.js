const gulp = require('gulp'); //Подключаем галп
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');

gulp.task('html', function (done) {
    return gulp.src('./app/html/*.html')
        .pipe(gulp.dest('./app/'))
    done();
});

gulp.task('scss', function (done) {
    return gulp.src('./app/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css/'));
    done();
})

gulp.task('watch', function () {
    watch(['./app/*.html', './app/**/*.css'], gulp.parallel(browserSync.reload)); //если не таск, а функция из файла bs

    watch('./app/scss/**/*.scss', function () {
        setTimeout(gulp.parallel('scss'), 1000)
    })


});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    })
});

gulp.task('default', gulp.parallel('server', 'watch', 'scss', 'html'));