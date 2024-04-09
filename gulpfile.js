const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');



// Таск для отслеживания изменений в файлах Sass
 function bs() {
  // Инициализируем BrowserSync
  browserSync.init({
    server: {
      baseDir: "./" // Папка, которую мы хотим сервером
    }
  });
  watch("*./*.html*").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("*./js/*js").on('change', browserSync.reload);
};
  // Таск для компиляции Sass в CSS
 function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*scss") // Исходные файлы Sass
      .pipe(sass()) // Компилируем Sass в CSS
      .pipe(gulp.dest("./css")) // Сохраняем скомпилированный CSS
      .pipe(browserSync.stream()); // Обновляем страницу при изменении CSS
};
exports.serve = bs;
  
  
  
  
