/*
* grunt-fsmdjson
*
* Copyright (c) 2014 Joshua Jensen
* Licensed under the MIT license.
*/

'use strict';

module.exports = function (grunt) {

  
  var fs = require('fs');
  var markdown = require('marked');

  grunt.registerMultiTask('fsmdjson', 'transforms a directory tree of markdown prefaced files into json data containing parsed markdown', function (a, b) {
    var data = {};
    var skippedFiles = 0;
    var options = this.options({
      detectMD_begin: "/*",
      detectMD_end: "*/"
    });

      function setObject(name, value, data) {
        var detectMd = value.split("");
        
        var splitLength = options.detectMD_begin.split("").length;
        
        var detectMD_str = "";
        for(i=0; i<splitLength; i++){
          
          detectMD_str += detectMd[i];
          
        }
        
        if(detectMD_str != options.detectMD_begin){
          skippedFiles++;
          
            return false;
        }


        var md = value.split(options.detectMD_begin);
        md = md[1];
        md = md.split(options.detectMD_end);
        md = markdown(md[0]);
        var parts = name.split("."),
            p = parts.pop();
        for (var i=0, j; data && (j=parts[i]); i++){
            data = (j in data ? data[j] : data[j]={});
        }
        name = name.split(".").join("/");
        grunt.log.ok(name);
        return data && p ? (data[p]=md) : undefined; // Object
      }

      this.files.forEach(function(file) {
        var contents = file.src.filter(function(filepath) {
          if (grunt.file.isFile(filepath)) {
              return true;
          }       
        }).map(function(filepath) {
          var index = filepath.lastIndexOf("/");
          var fileName = filepath.substr(index + 1);
          var path = filepath.split('/').join('.');
          path = path.substr(0, path.lastIndexOf("."));

          try {
              setObject(path, fs.readFileSync(filepath).toString(), data);
              
          } catch(e) {
              grunt.log.error(filepath);
              grunt.fail.warn(e);
          }
        });
        grunt.log.writeln(skippedFiles +" files skipped because first characters in those files did not match detectMD_begin string: "+options.detectMD_begin )
        grunt.file.write(file.dest, JSON.stringify(data));
      });


  });

};
