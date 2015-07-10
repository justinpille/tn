var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var reactify = require('reactify');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var watchify = require('watchify');
var handleErrors = require('./util/handleErrors');
var rename = require('gulp-rename');

var path = {
    JS_ENTRY: './src/js/index.js',
    SCSS_ENTRY: 'src/scss/index.scss',
    SCSS: './src/scss/**/*.scss',
    JS: './src/js/**/*.js',
    DEST: './dist/',
    DEST_SCSS: './dist/css/',
    DEST_JS: './dist/js/',
    CSS_DEST_FILE: 'bundle.css',
    JS_DEST_FILE: 'bundle.js'
};

// Static Server + watching scss/html files
gulp.task('default', ['sass', 'build-js'], function() {
    browserSync.init({
        server: {
            baseDir: path.DEST
        }
    });
    gulp.watch(path.SCSS, ['sass']);
});

// Compile with gulp-ruby-sass + source maps
gulp.task('sass', function() {
    return sass(path.SCSS_ENTRY, { sourcemap: true })
        .on('error', handleErrors)
        .pipe(sourcemaps.write())
        .pipe(rename(path.CSS_DEST_FILE))
        .pipe(gulp.dest(path.DEST_SCSS))
        .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('build-js', function() {
    var bundler = browserify({
        entries: [path.JS_ENTRY], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    })
    var watcher = watchify(bundler);

    return watcher
        .on('update', function () { // When any files update
            var updateStart = Date.now();
            console.log('Updating!');
            watcher.bundle() // Create new bundle that uses the cache for high performance
                .on('error', handleErrors)
                .pipe(source(path.JS_DEST_FILE))
                // This is where you add uglifying etc.
                .pipe(gulp.dest(path.DEST_JS))
                .pipe(browserSync.stream({match: '**/*.js'}));
            console.log('Updated!', (Date.now() - updateStart) + 'ms');

        })
        .bundle() // Create the initial bundle when starting the task
        .on('error', handleErrors)
        .pipe(source(path.JS_DEST_FILE))
        .pipe(gulp.dest(path.DEST_JS));
});
