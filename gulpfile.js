const gulp = require("gulp");
const gutil = require("gulp-util");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync");
const autoprefixer = require("gulp-autoprefixer");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");

const scripts = [
  "node_modules/fullpage.js/dist/fullpage.js",
  "base/scripts/main.js",
];

const styles = [
  "node_modules/fullpage.js/dist/fullpage.css",
  "base/styles/css/styles.css",
];

gulp.task("browserSync", function () {
  browserSync({
    server: {
      baseDir: "./",
    },
    notify: false,
  });
});

gulp.task("bs-reload", function () {
  browserSync.reload();
});

gulp.task("scripts", function () {
  return gulp
    .src(scripts)
    .pipe(plumber())
    .pipe(concat("main.js"))
    .on("error", gutil.log)
    .pipe(gulp.dest("assets/scripts"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(terser())
    .pipe(gulp.dest("assets/scripts"));
});

gulp.task("sass", function () {
  return gulp
    .src("base/styles/scss/styles.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(rename("styles.css"))
    .pipe(gulp.dest("base/styles/css"));
});

gulp.task("styles", function () {
  return gulp
    .src(styles)
    .pipe(
      plumber({
        errorHandler: function (err) {
          console.log(err);
          this.emit("end");
        },
      })
    )
    .pipe(
      autoprefixer({
        cascade: true,
      })
    )
    .on("error", gutil.log)
    .pipe(concat("styles.css"))
    .pipe(gulp.dest("assets/styles"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("assets/styles"));
});

gulp.task("default", ["sass", "styles", "scripts"], function () {});

gulp.task("watch", ["default", "browserSync"], function () {
  gulp.watch("base/styles/scss/**/*.scss", ["sass"]);
  gulp.watch("base/styles/css/*.css", ["styles", "bs-reload"]);
  gulp.watch("base/scripts/*.js", ["scripts", "bs-reload"]);
  gulp.watch(["*.html"], ["bs-reload"]);
});
