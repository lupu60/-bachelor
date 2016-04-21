module.exports = function(grunt) {
    grunt.initConfig({
        latex: {
            options: {
                haltOnError: 'true'
            },
            pdf_target: {
                options: {
                    outputDirectory: 'pdf'
                },
                src: ['main.tex']
            }
        },
          watch: {
    latex: {
      files: ['*.tex','./_includ/*.tex'],
      tasks: ['latex'],
      options: {
        spawn: false,
      },
    },
  },
    });
    grunt.loadNpmTasks('grunt-latex');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['latex','watch']);
};