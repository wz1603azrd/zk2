var gulp = require('gulp');
var uglify = require('gulp-uglify');
var server = require('gulp-webserver');
var list = require('./data/data.json');
var path = require('path');
var url = require('url');
var fs = require('fs');
//压缩js
gulp.task('minjs', function() {
    gulp.src('src/js/**/*.js')
        .pipe()
});
//起服务
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8080,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (req.url === '/faviocn.ico') {
                    return false;
                }
                if (pathname === '/api/data') {
                    res.end(JSON.stringify(list))
                } else {
                    pathname = pathname === '/' ? 'index.html' : pathname;
                    res.end(fs.readFileSync(__dirname, 'src', pathname));
                }
            }
        }))
})