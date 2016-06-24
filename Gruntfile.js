module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			options: {
				livereload: true
			},
			sass: {
				files: ['app/assets/sass/**/*.scss'],
				tasks: ['sass'],
			},
			assemble: {
				files: 'app/**/*.hbs',
				tasks: 'assemble'
			},
			scripts: {
				files: 'app/assets/js/**/*.js',
				tasks: ['webpack']
			}
		},

		sass: {
			dev: {
				options: {
          			style: 'expanded'
				},
				files: [{
					expand: true,
					cwd: './app/assets/sass',
					src: ['*.scss'],
					dest: './dist/assets/css',
					ext: '.css'
				}]
			},
			dist: {
				options: {
          			style: 'expanded'
				},
				files: [{
					expand: true,
					cwd: './app/assets/sass',
					src: ['*.scss'],
					dest: './dist/assets/css',
					ext: '.css'
				}]
			}
		},

		connect: {
			port: 8001,
          	base: './dist',
          	livereload: true,
          	open: true
		},

		assemble: {
			options: {
				assets: "./app/assets",
				data:   ["./app/data/*.{json}"]
			},
			project: {
				options: {
					layoutdir: "./app/layouts/",
					layout: 'master.hbs',
					partials: "./app/partials/**/*.hbs" 
				},
				files: [{
					expand: true,
					flatten: true,
					src: './app/pages/**/*.hbs',
					dest: './dist/'
				}]
			}
		},

		postcss: {
			options: {
				map: false,
				processors: [
					// require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes 
				]
			},
			dist: {
				src: 'dist/assets/css/*.css'
			}
		},

		webpack: {
			options: {
				module: {
					loaders: [
						{
							loader: 'babel',
							query: {
								presets: ['es2015']
							}
						},
						{ 
							test: /\.hbs$/, 
							loader: "handlebars-loader" 
						}
					]
				},

				stats: {
					// Configure the console output
					colors: true,
					reasons: true
				},
					// stats: false disables the stats output

					progress: false, // Don't show progress
					// Defaults to true

					failOnError: false // don't report error to grunt if webpack find errors
					// Use this if webpack errors are tolerable and grunt should continue
				},
				build: {
					// webpack options
					entry: "./app/assets/js/main.js",
					output: {
						path: "./dist/assets/",
						filename: "main.js",
				},
			}
		},

		yuidoc: {
			compile: {
				name: 'jupiterandthegiraffe',
				description: 'JS associated with Juptier and the Giraffe',
				version: '0.0.1',
				options: {
					paths: 'app/assets/js/',
					outdir: './docs'
				}
			}
		}


	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-assemble');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');


	// Default task(s).
  	grunt.registerTask('default', ['sass:dev', 'assemble', 'webpack', 'connect', 'watch']);
  	// Build task
  	grunt.registerTask('build', ['sass:dist', 'postcss', 'assemble', 'webpack']);

};