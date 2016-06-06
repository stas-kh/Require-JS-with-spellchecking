var gulp = require("gulp");
var jslint = require("gulp-jslint");
var jshint = require("gulp-jshint");
var jscs = require("gulp-jscs");
var closureCompiler = require('google-closure-compiler').gulp();

var scriptsPath = "./app/js/*/**";

var jsLintOptions = {
	predef: ["require", "define", "console", "document", "setInterval", "window"]
};
var closureCompilerOptions = {
	warning_level: "DEFAULT",
	language_in: "ECMASCRIPT5_STRICT"
};

gulp.task("jshint", function () {
	return gulp.src(scriptsPath)
		.pipe(jshint())
		.pipe(jshint.reporter("jshint-stylish"))
});

gulp.task("jslint", function () {
	return gulp.src(scriptsPath)
		.pipe(jslint(jsLintOptions))
});

gulp.task("jscs", function () {
	return gulp.src(scriptsPath)
		.pipe(jscs())
		.pipe(jscs.reporter())
});

gulp.task("GCC", function () {
	return gulp.src(scriptsPath)
		.pipe(closureCompiler(closureCompilerOptions))
});

gulp.task("check-style", ["jshint", "jscs", "jslint", "GCC"]);