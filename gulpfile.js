var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var browserSync = require('browser-sync').create();
var browserSyncPath = ["src/client/public/**/*", "src/client/index.html"];
var appWatchPath = ["src/client/app/**/*"];


var webpackDevConfig = Object.create(webpackConfig);
webpackDevConfig.devtool = "sourcemap";
webpackDevConfig.debug = true;
var webpackDevCompiler = webpack(webpackDevConfig);

gulp.task("webpack:build-dev", function(callback) {
	webpackDevCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
		callback();
	});

});

gulp.task("watch_app", function() {
    gulp.watch(appWatchPath, ["webpack:build-dev"]);
});

gulp.task("serve", function() {
    browserSync.init({
        server: {
            baseDir: "src/client"
        }
    });

    gulp.watch(browserSyncPath).on("change", browserSync.reload);
});

gulp.task("default", ["serve", "watch_app"]);