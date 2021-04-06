let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let csscomb = require('gulp-csscomb');
let webserver = require('gulp-webserver');
let del = require('del');
let livereload = require('gulp-livereload');
let header = require('gulp-header');
let whoami = require('whoami');
let footer = require('gulp-footer');
let findCssClasses = require('find-css-classes');
let fs = require("fs");
let tap = require('gulp-tap');

/**
 * Options
 */

let options = {
  server: {
    root: './',
    open: './index/',
    port: 8080,
    directoryListing: true
  },
  livereload: {
    start: true
  },
  styles: {
    src: 'styles/**/*.scss',
    outputstyle: 'expanded',
    dest: 'assets/styles'
  },
  get timestamp() { 
    var d = new Date(),
        date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear(),
        time = d.getHours() + 'h' + String(d.getMinutes()).padStart(2, "0");

    return date + ' ' + time;
   }
};

/**
 * Plain functions tasks
 */

// Start Web Server http://localhost:80
function server() {
  return gulp.src(options.server.root)
    .pipe(webserver({
      port: options.server.port,
      directoryListing: options.server.directoryListing,
      open: options.server.open
  }));
};

// Livereload
function reload(done) {
  livereload({ 
    start: options.livereload.start,
    quiet: true
  }), done();
}

// Compile SCSS to CSS
function styles() {
  return gulp.src(options.styles.src)
  .pipe(sass({outputStyle:options.styles.outputstyle}).on('error', sass.logError))
  //config csscomb in .csscomb.json (@ root folder)
  .pipe(csscomb())
  // .pipe(cleanCSS())
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 15 versions', "ie >= 10"],
    cascade: false
  }))
  .pipe(header('/* UPDATED ON: ' + options.timestamp + ' */ \n/* ' + whoami + ' */\n\n'))
  .pipe(gulp.dest(options.styles.dest))
  .pipe(livereload());
}

// Watch Function
function watch() {
  return gulp.watch(options.styles.src),
  livereload.listen(),
  console.log('LiveReload Init');
}
// Delete Build Folder
function delBuild () {
  return (async () => {
    const deletedPaths = await del(options.styles.dest);
    console.log('Deleted folder: ', deletedPaths.join('\n'));
  })();
};


/**
 * Run! Time ( tasks declared as CommonJS 'exports' )
 */
let build = gulp.series( gulp.parallel(server, reload), styles, watch);

// Init Server
exports.server = server;

// LiveReload
exports.livereload = reload;

// Compile SCSS to CSS
exports.styles = styles;

// Watch Task
exports.watch = watch;

// Delete Build Folder
exports.delBuild = delBuild;

// Default Task
exports.default = build;