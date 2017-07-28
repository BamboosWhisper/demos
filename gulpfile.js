'use strict';  

  
// 在gulpfile中先载入gulp包，因为这个包提供了一些API  
var gulp = require('gulp');  
var less = require('gulp-less');  
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');  
var uglify = require('gulp-uglify');    
var htmlmin = require('gulp-htmlmin');  
var browserSync = require('browser-sync');  
var autoprefixer = require('gulp-autoprefixer')
var uncss = require('gulp-uncss');
var gulpImagemin = require('gulp-imagemin');

// 1. 压缩 --合并没有必要，一般预处理CSS都可以导包  
gulp.task('style', function() {  
  // 这里是在执行style任务时自动执行的  
  gulp.src(['./static/css/*.css'])  
//    .pipe(less())  
    .pipe(cssnano())  
    .pipe(gulp.dest('dist/styles'))  
    .pipe(browserSync.reload({  
      stream: true  
    }));  
});  
  
  

  
  
// 2. JS合并 压缩
gulp.task('script', function() {  
  gulp.src('./static/js/*.js')  
    .pipe(concat('all.js'))  
    .pipe(uglify())  
    .pipe(gulp.dest('dist/scripts'))  
    .pipe(browserSync.reload({  
      stream: true  
    }));  
});  
  
  
// 3. 图片复制  
gulp.task('image', function() {  
  gulp.src('./static/img/*.*')  
    .pipe(gulp.dest('dist/images'))  
    .pipe(browserSync.reload({  
      stream: true  
    }));  
});  
  
  

// 4. HTML  
gulp.task('html', function() {  
  gulp.src('./templates/index2.html')  
    .pipe(htmlmin({  
      collapseWhitespace: true,  
      removeComments: true  
    }))  
    .pipe(gulp.dest('dist'))  
    .pipe(browserSync.reload({  
      stream: true  
    }));  
});  
  
  

gulp.task('serve', function() {  
  browserSync({  
    server: {  
      baseDir: ['dist']  
    },  
  }, function(err, bs) {  
    console.log(bs.options.getIn(["urls", "local"]));  
  });  
}); 
  

gulp.task('default',['style','script','image','html','serve']);
  
gulp.watch('./static/css/*.css',['style']);  
gulp.watch('./static/js/*.js',['script']);  
gulp.watch('./static/img/*.*',['image']);  
gulp.watch('./templates/index2.html',['html']);  
