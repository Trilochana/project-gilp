var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('html', function() {
  gulp.src('app/index.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function() {
  gulp.src('app/sass/main.sass')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
})

gulp.task('scripts', function() {
	// Single entry point to browserify
	gulp.src('app/scripts/main.js')
		.pipe(browserify({
		  insertGlobals : true
		}))
    .pipe(uglify())
    .pipe(rename('bundle.js'))
		.pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch('app/index.html', ['html']);
  gulp.watch('app/**/*.sass', ['sass']);
  gulp.watch('app/scripts/main.js', ['scripts']);
});

// gulp.task('default', ['html', 'sass', 'scripts']);
gulp.task('start', ['html', 'sass', 'scripts', 'server', 'watch']);
