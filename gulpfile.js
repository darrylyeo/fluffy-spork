var gulp = require('gulp')
var concat = require('gulp-concat')
var browserSync = require('browser-sync').create()
var babel = require('gulp-babel')
var cssnano = require('gulp-cssnano')
var lintspaces = require('gulp-lintspaces')
var postcss = require('gulp-postcss')
var postcss_import = require('postcss-import')
var postcss_url = require('postcss-url')
var postcss_cssnext = require('postcss-cssnext')

//var assets = require('./src/assets/assets')

gulp.task('css', () => {
	var cssFiles = assets.css.map(handle => `src/assets/${handle}.css`)
	return gulp.src(cssFiles)
	//return gulp.src('src/assets/*.css')
		.pipe(
			lintspaces({
				newlineMaximum: 3,
				trailingspaces: true,
				indentation: 'tabs'
			}
		))
		.pipe(cssnano({
			discardUnused: {
				fontFace: false
			}
		}))
		.pipe(concat('all.min.css'))
		.pipe(
			postcss([
				postcss_import(),
				postcss_url(),
				postcss_cssnext({
					features: {
						rem: {
							html: false
						}
					}
				}),
				//require('gulp-cssnano')(),
			])
		)
		.pipe(gulp.dest('build/assets'))
})
//gulp.watch('src/assets/*.css', gulp.parallel('css'))

gulp.task('js', () => {
	var jsFiles = assets.js.map(handle => `src/assets/${handle}.js`)
	return gulp.src(jsFiles)
	//return gulp.src('src/assets/*.js')
		.pipe(
			lintspaces({
				newlineMaximum: 3,
				trailingspaces: true,
				indentation: 'tabs'
			}
		))
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

gulp.task('build', gulp.parallel(/*'assets',*/ 'copy-directories'))