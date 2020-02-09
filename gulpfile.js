var gulp = require('gulp')
var sass = require('gulp-sass')
var livereload = require('gulp-livereload')
// task 1
gulp.task('sass', function(){
    return gulp.src('app/styles/style.scss')
            .pipe(sass())
            .pipe(gulp.dest('app/styles'))
            .pipe(livereload());
})
// Watch Files For Changes
gulp.task('watch', function () {
    livereload.listen()
    gulp.watch('styles/*.scss', gulp.series['sass']);
    
});
