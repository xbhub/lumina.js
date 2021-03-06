var gulp = require('gulp');
var gulpif = require('gulp-if');
var del = require('del');
var fs = require("fs")
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
const zip = require('gulp-zip');
const unzip = require('gulp-unzip');
const moment = require('moment');
var minifyCSS = require('gulp-cssnano');
var postcss = require('gulp-postcss'); // CSS 预处理
var postcssAutoprefixer = require('autoprefixer');
var util = require('gulp-util');
var concat = require('gulp-concat');

var back_up_number = 3;
var paths = {
    src: {
        dir: './src'
    },
    dist: {
        dir: './dist'
    }
}

var js_min_options = {
    mangle: true, //输出变量名替换后的文件
    compress: {
        sequences: true, //使用逗号操作符加入连续的简单语句
        properties: true, //使用点好重写属性访问，例如foo["bar"] → foo.bar
        dead_code: true, //移除不可达的代码
        drop_debugger: true, //移除调试器和调试语句
        conditionals: true, //为if -else 和条件表达式应用优化
        evaluate: true, //尝试去计算常量表达式
        booleans: true, //多种针对布尔上下文的优化，例如 !!a ? b : c → a ? b : c
        loops: true, //当我们可以静态的判断条件的取值时，针对do,while和for循环的优化
        unused: true, //去掉没有被引用过的函数和变量
        hoist_funs: true, // 提升函数声明
        hoist_vars: false, //(默认值: false) — 提升var声明 (因为一般看起会增加输出的大小，所以它默认是false的)
        if_return: true, //这对 if/return 和 if/continue 的优化
        join_vars: true, //加入连续的var语句
        // cascade      : true, //对于 sequences, transform x, x into xandx = something(), x into x = something() 的一些小优化
        drop_console: true, //默认为false.  传入true会丢弃对console.函数的调用.
        comparisons: true, //针对二进制节点应用某些特定的优化，例如:!(a <= b) → a > b (只在不安全时), 尝试去否认二进制节点，例如.a = !b && !c && !d && !e → a=!(b||c||d||e) 等等.
        unsafe: false //应用“不安全”的转换
    }
}
//自动补全
function compileAutoprefixer() {
    return gulp.src(paths.src.dir + '/**/*.css')
        .pipe(postcss([
            postcssAutoprefixer({
                browsers: ['last 5 versions']
            })
        ]))
        .pipe(gulp.dest(paths.dist.dir));
}

//CSS 压缩
function miniCSS() {
    return gulp.src(paths.src.dir + '/**/*.css')
        .pipe(minifyCSS({
            safe: true,
            reduceTransforms: false,
            advanced: false,
            compatibility: 'ie7',
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest(paths.dist.dir));
}

function miniJs() {
    return gulp.src([paths.src.dir + '/**/*.js'])
        .pipe(gulpif('!**/*.min.js', babel({
            presets: ['@babel/env']
        })))
        .pipe(gulpif('!**/*.min.js', uglify(js_min_options)))
        .pipe(gulp.dest(paths.dist.dir));
}
function devMiniJs() {
    return gulp.src([paths.src.dir + '/**/*.js'])
        .pipe(gulp.dest(paths.dist.dir));
}

function delDist() {
    return del([paths.dist.dir], {force: true});
}

// 复制资源
function copyResource() {
    return gulp.src(paths.src.dir + '/**/*.{JPG,jpg,png,gif,svg,eot,ttf,woff}')
        .pipe(gulp.dest(paths.dist.dir));
}

function alljs() {

    var mods = 'lodash.core,laytpl,laypage,slider,colorpicker,form,tree,transfer,dropdown,carousel,rate,flow'
    var src = [
        paths.src.dir + '/lumina.js',
        paths.src.dir + '/packages/layer.js',
        paths.src.dir + '/util.js',
        paths.src.dir + '/all.js',
        paths.src.dir + '/packages/element.js',
        paths.src.dir + '/packages/laydate/laydate.js',
        paths.src.dir + '/extends/upload/upload.js',
        paths.src.dir + '/packages/**/{'+mods+'}.js',
        paths.src.dir + '/admin.js',
        paths.src.dir + '/packages/table.js'
    ];

    return gulp.src(src).pipe(uglify())
      .pipe(concat('lumina.all.js', {newLine: ''}))
    .pipe(gulp.dest(paths.dist.dir));
}

function allcss() {
    var src = [
        paths.src.dir + '/style/lumina.css',
        paths.src.dir + '/packages/laydate/laydate.css',
        paths.src.dir + '/extends/upload/upload.css',
        paths.src.dir + '/extends/wangEditor/css/wangEditor.css',
    ]
    return gulp.src(src).pipe(minifyCSS({
        safe: true,
        reduceTransforms: false,
        advanced: false,
        compatibility: 'ie7',
        keepSpecialComments: 0
    }))
    .pipe(postcss([
        postcssAutoprefixer({
            browsers: ['last 5 versions']
        })
    ]))
    .pipe(concat('lumina.all.css', {newLine: ''}))
    .pipe(gulp.dest(paths.dist.dir + '/style'));
}


//监听文件
var getType = function (file) {
    var filename = file;
    var index1 = filename.lastIndexOf(".");
    var index2 = filename.length;
    var type = filename.substring(index1 + 1, index2);
    return type;
}

var sleep = false;
var watchHandler = function (type, file) {
    var target = getType(file);

    util.log(file + ' has been' + type);
    switch (target) {
        case 'js':
            devMiniJs();
            break;
        case 'css':
            miniCSS();
            break;
        case 'html':
        case 'img':
        case 'media':
            copyResource();
            break;
    }

};


function watch(cb) {
    var watcher = gulp.watch([
        paths.src.dir + '/**/*.js',
        paths.src.dir + '/**/*.css'
    ], {
        ignored: /[\/\\]\./
    });

    watcher
        .on('change', function (file) {
            watchHandler('changed', file);
        })
        .on('add', function (file) {
            watchHandler('add', file);
        })
        .on('unlink', function (file) {
            watchHandler('removed', file);
        });

    cb();
}

//注册 build_dist 任务
gulp.task('build_dist', gulp.series(
    copyResource,
    miniJs,
    alljs,
    allcss
    // backupStatic
));

//注册 build_dist 任务
gulp.task('build_dev', gulp.series(
    delDist,
    miniJs,
    copyResource,
    alljs,
    allcss,
    watch
));
