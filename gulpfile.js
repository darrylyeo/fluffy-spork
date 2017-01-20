var gulp = require('gulp')
var concat = require('gulp-concat')
var browserSync = require('browser-sync').create()
var assets = require('./src/assets/assets')
var babel = require('gulp-babel')
var cssnano = require('gulp-cssnano')

gulp.task('css', () => {
	var cssFiles = assets.css.map(handle => `src/assets/${handle}.css`)
	return gulp.src(cssFiles)
	//return gulp.src('src/assets/*.css')
		.pipe(cssnano({
			discardUnused: {
				fontFace: false
			}
		}))
		.pipe(concat('all.min.css'))
		.pipe(require('gulp-postcss')([
			require('postcss-import')(),
			require('postcss-url')(),
			require('postcss-cssnext')({
				features: {
					rem: {
						html: false
					}
				}
			}),
			//require('gulp-cssnano')(),
		]))
		.pipe(gulp.dest('build/assets'))
})
//gulp.watch('src/assets/*.css', gulp.parallel('css'))

gulp.task('js', () => {
	var jsFiles = assets.js.map(handle => `src/assets/${handle}.js`)
	return gulp.src(jsFiles)
	//return gulp.src('src/assets/*.js')
		.pipe(
			babel({
				presets: ['babili'],
				comments: false
			})
		)
		.pipe(concat('all.min.js'))
		.pipe(gulp.dest('build/assets'))
})
gulp.task('assets', gulp.parallel('css', 'js'))


gulp.task('copy-directories', () => {
	return gulp.src([
		'src/**/*.*'
	], {
		base: 'src/'
	})
		.pipe(gulp.dest('build'))
		.pipe(browserSync.stream())
})

gulp.task('build', gulp.parallel('assets', 'copy-directories'))