var gulp = require('gulp');	
var gulpBabel = require('gulp-babel');		  // es6转es5
var gulpSass = require('gulp-sass');		  // scss转css
var browserSync = require('browser-sync'); 	  // 页面刷新
var gulpUglify = require('gulp-uglify');
var gulpCleanCss = require('gulp-clean-css'); // 压缩css文件
gulp.task('transformCss',function(){
	gulp.src('./src/sass/*.scss')
		.pipe(gulpSass())
		.pipe(gulp.dest('./src/css'));
})

// 自动刷新页面并监听文件
// gulp.task('default',function(){
// 	browserSync({
// 		server:'./src',
// 		port:18887,
// 		files:['./src/css/*.css','./src/index.html']
// 	});


// gulp.watch('./src/sass/*.scss',['transformCss']);
// })
// 
gulp.task('compressJS',function(){
	gulp.src('./dist/js/*.js')
		.pipe(gulpUglify())
		.pipe(gulp.dest('./dist/js_min/'));
});
gulp.task('compressCSS',function(){
	gulp.src('./src/css/*.css')
		.pipe(gulpCleanCss())
		.pipe(gulp.dest('./dist/css_min/'));
});
gulp.task('compressCssES5',function(){
	gulp.src('./src/css/*.css')
		.pipe(gulpBabel())
		.pipe(gulp.dest('./dist/css_ES5/'));
});
