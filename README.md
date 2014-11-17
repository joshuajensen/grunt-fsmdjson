# grunt-fsmdjson

Transforms a directory tree of markdown prefaced files into nested json data containing parsed markdown

## Example Config

```
fsmdjson: {
    sample_config: {
        options: {
          detectMD_begin: "/*", //default
          detectMD_end: "*/" //default
        },
        files: {
            'data.json': ['data/**/*']
        }
    }
},
```