module.exports = function(grunt){
	
	const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
	
	//configure main project settings
	
	grunt.initConfig({
		//basic settings and info about our plugins
		pkg: grunt.file.readJSON('package.json'),   //this gona read all basic info package.json file
		
	
		cssmin:{   //it's tasks
			combine: {  //this combine the css files  
				files: {
					'css/style.min.css': ['css/style.css'],
					'css/mixin.min.css': ['css/mixin.css'],
					'css/variables.min.css': ['css/variables.css']
				}
			}
		},
		
		uglify:{   //it's tasks
			dist: {  //this combine the css files   
				files: {
					'js/custom.min.js': ['js/custom.js']
				}
			}
		},
		sass: {
			dist: {
			  files: {
				'css/style.css': 'css/style.scss'
			  }
			}
		  },
		  
		watch: {
		  css: {
			files: 'js/*.js',
			tasks: ['uglify'],
			options: {
			 spawn: false,
			},
		  },
		},
	imagemin: {
		static: {
            options: {
                optimizationLevel: 3,
                svgoPlugins: [{removeViewBox: false}],
                use: [imageminJpegtran()]
            },
            files: {
                'images/dist/banner1.jpg': 'images/banner.jpg'
            }
        },
          dynamic: {
            files: [{
                expand: true,
                cwd: 'images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'images/compressed'
            }]
        }
    },
	
});
	
	//this is for load all task or plugins
	require('load-grunt-tasks')(grunt);
	
	//to do the task
	grunt.registerTask('default',['cssmin', 'uglify', 'sass', 'imagemin']);    //min the two css file that is task
	
	
};