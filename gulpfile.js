//任务概念

//引入gulp

/*
 task（） 布置任务

	三个参数：

	第一个参数：任务名称  默认任务 default

	第二个参数：该任务依赖的其他任务，是一个数组（可选）

	第三个参数：任务回调函数（任务执行）
 */

var gulp=require('gulp');

gulp.task('default',['copyhtml','copyjs','cssmin','jsmin'],function(){
	console.log('默认任务');
});

gulp.task('say',function(){
	console.log('say 任务执行');
});

gulp.task('dance',function(){
	console.log('dance 任务执行');
});

/*
src() 源文件路径 参数可以是一个数组
dest（）目标文件路径 dest参数中的文件夹名称可以自动创建
pipe（）管道 ，表示输送，就是下一步 
 
 */

//布置任务：将src目录下的index.html 复制到dist目录下

gulp.task('copyhtml',function(){
	return gulp.src('src/index.html').pipe(gulp.dest('dist'));
});

//拷贝库文件  lib里面有js，jq ，css 
//布置任务：把js文件复制到dist下面
gulp.task('copyjs',function(){
	return gulp.src('src/js/*.js').pipe(gulp.dest('dist/js'));
});

//src() 参数设置成数组
//布置任务：src目录下css文件和lib下的css文件都拷贝到dist下的css目录下

gulp.task('copycss',function(){
	return gulp.src(['src/css/*.css','src/lib/*.css']).pipe(gulp.dest('dist/css'));
});

//布置任务：将lib下面所有文件都拷贝到dist的lib中     *某个文件

gulp.task('copyfile',function(){
	//拷贝第一级内容
	return gulp.src('src/lib/*').pipe(gulp.dest('dist/lib'));
});

gulp.task('copyfile2',function(){
	//拷贝第二级内容
	return gulp.src('src/lib/*/**').pipe(gulp.dest('dist/lib'));
});

/*
    watch() 监听

	两个参数：
	参数一：监听文件的路径

	参数二：监听任务名称 数组
 */

//监听src下面的index.html有改动 ，就自动复制到dist下面

gulp.task('watchhtml',function(){
	return gulp.watch('src/index.html',['copyhtml']);
});



//实用的任务：

// 1.编译sass
var sass = require('gulp-sass');
gulp.task('sass',function(){
  return gulp.src('src/lib/style.scss')
  			 .pipe(sass())
  			 .pipe(gulp.dest('dist/lib'));
});


//2.布置任务：压缩css文件
var cssmin=require('gulp-cssmin');
gulp.task('cssmin',function(){
  return gulp.src('src/css/*.css')
  			 .pipe(cssmin())
  			 .pipe(gulp.dest('dist/css'));
});


//3.重命名
var rename=require('gulp-rename');
gulp.task('rename',function(){
  return gulp.src('src/lib/css.css')
  			 .pipe(cssmin())
  			 .pipe(rename('css.min.css'))
  			 .pipe(gulp.dest('dist/css'));
});

//4.压缩js并重命名
var uglify=require('gulp-uglify');

gulp.task('uglify',function(){
  return gulp.src('src/js/es5/*.js')
  			 .pipe(uglify())
  			
  			 .pipe(gulp.dest('dist/js'));
});


//5.合并文件
var concat=require('gulp-concat');
gulp.task('concat',function(){
  return gulp.src(['dist/css/aa.css','dist/css/bb.css'])
  			 .pipe(concat('all.css'))
  			 .pipe(gulp.dest('dist/css'));
});

//6.压缩图片

var imagemin=require('gulp-imagemin');

gulp.task('imgmin',function(){
  return gulp.src('src/img/*')
  			 .pipe(imagemin())
  			 .pipe(gulp.dest('dist/img'));
});

// es6-->es5
let babel = require('gulp-babel');

gulp.task('es6',function(){
  gulp.src('src/js/*.js')
  .pipe(babel({
    'presets':['es2015']
  }))
  .pipe(gulp.dest('src/js/es5/'))
});
