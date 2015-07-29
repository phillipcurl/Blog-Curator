var gulp       = require('gulp'),
    usemin     = require('gulp-usemin'),
    wrap       = require('gulp-wrap'),
    connect    = require('gulp-connect'),
    watch      = require('gulp-watch'),
    minifyCss  = require('gulp-minify-css'),
    minifyJs   = require('gulp-uglify'),
    gUtil      = require('gulp-util'),
    concat     = require('gulp-concat'),
    less       = require('gulp-less'),
    rename     = require('gulp-rename'),
    minifyHTML = require('gulp-minify-html'),
    nodemon    = require('gulp-nodemon');

var paths = {
    scripts: 'src/js/**/*.*',
    styles: 'src/less/**/*.*',
    images: 'src/img/**/*.*',
    templates: 'src/templates/**/*.html',
    index: 'src/index.html',
    api: 'app/**/*.*',
    bower_fonts: 'src/components/**/*.{ttf,woff,eof,svg}'
};

/**
 * Handle bower components from index
 */
gulp.task('usemin', function() {
    return gulp.src(paths.index)
        .pipe(usemin({
            js: [minifyJs(), 'concat'],
            css: [minifyCss({keepSpecialComments: 0}), 'concat'],
        }))
        .pipe(gulp.dest('dist/'));
});

/**
 * Copy assets
 */
gulp.task('build-assets', ['copy-bower_fonts']);

gulp.task('copy-bower_fonts', function() {
    return gulp.src(paths.bower_fonts)
        .pipe(rename({
            dirname: '/fonts'
        }))
        .pipe(gulp.dest('dist/lib'));
});

/**
 * Handle custom files
 */
gulp.task('build-custom', ['custom-images', 'custom-js', 'custom-less', 'custom-templates']);

gulp.task('custom-images', function() {
    return gulp.src(paths.images)
        .pipe(gulp.dest('dist/img'));
});

gulp.task('custom-js', function() {
    return gulp.src(paths.scripts)
        .pipe(minifyJs().on('error', gUtil.log))
        .pipe(concat('dashboard.min.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('custom-less', function() {
  gulp.src(paths.styles)
    .pipe(less())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('src/css'));

  return gulp.src('src/css/styles.css')
    .pipe(minifyCss())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('custom-templates', function() {
    return gulp.src(paths.templates)
        .pipe(minifyHTML())
        .pipe(gulp.dest('dist/templates'));
});

/**
 * Watch custom files
 */
gulp.task('watch', function() {
    gulp.watch([paths.images], ['custom-images']);
    gulp.watch([paths.styles], ['custom-less', 'custom-templates']);
    gulp.watch([paths.scripts], ['custom-js']);
    gulp.watch([paths.templates], ['custom-templates']);
    gulp.watch([paths.index], ['usemin']);
});

/**
 * Live reload server
 */
// gulp.task('webserver', function() {
//     connect.server({
//         root: 'dist',
//         livereload: true,
//         port: 8888
//     });
// });
//
// gulp.task('livereload', function() {
//     gulp.src(['dist/**/*.*'])
//         .pipe(watch())
//         .pipe(connect.reload());
// });

gulp.task('nodemon', function() {
  nodemon({
    script: 'server.js',
    ext: 'js less html'
  })
    .on('start', ['watch'])
    .on('change', ['watch'])
    .on('restart', function() {
      console.log('Restarted!');
    });
});

/**
 * Gulp tasks
 */
gulp.task('build', ['usemin', 'build-assets', 'build-custom']);
gulp.task('default', ['build', 'nodemon']);
