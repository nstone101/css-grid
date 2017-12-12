SystemJS.config({
  devConfig: {
    'map': {
      'babel-plugin-transform-decorators-legacy': 'npm:babel-plugin-transform-decorators-legacy@1.3.4',
      'babel-plugin-transform-class-properties': 'npm:babel-plugin-transform-class-properties@6.24.1',
      'babel-plugin-transform-es2015-typeof-symbol': 'npm:babel-plugin-transform-es2015-typeof-symbol@6.23.0',
      'babel-plugin-transform-flow-strip-types': 'npm:babel-plugin-transform-flow-strip-types@6.22.0',
      'babel-plugin-angular2-annotations': 'npm:babel-plugin-angular2-annotations@5.1.0'
    },
    'packages': {
      'npm:babel-plugin-transform-decorators-legacy@1.3.4': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-template': 'npm:babel-template@6.26.0',
          'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.13.0'
        }
      },
      'npm:babel-plugin-transform-class-properties@6.24.1': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-template': 'npm:babel-template@6.26.0',
          'babel-plugin-syntax-class-properties': 'npm:babel-plugin-syntax-class-properties@6.13.0',
          'babel-helper-function-name': 'npm:babel-helper-function-name@6.24.1'
        }
      },
      'npm:babel-plugin-transform-es2015-typeof-symbol@6.23.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0'
        }
      },
      'npm:babel-plugin-transform-flow-strip-types@6.22.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.18.0'
        }
      },
      'npm:babel-runtime@6.26.0': {
        'map': {
          'core-js': 'npm:core-js@2.5.1',
          'regenerator-runtime': 'npm:regenerator-runtime@0.11.0'
        }
      },
      'npm:babel-template@6.26.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-types': 'npm:babel-types@6.26.0',
          'lodash': 'npm:lodash@4.17.4',
          'babel-traverse': 'npm:babel-traverse@6.26.0',
          'babylon': 'npm:babylon@6.18.0'
        }
      },
      'npm:babel-plugin-angular2-annotations@5.1.0': {
        'map': {
          'babel-generator': 'npm:babel-generator@6.26.0'
        }
      },
      'npm:babel-generator@6.26.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-types': 'npm:babel-types@6.26.0',
          'trim-right': 'npm:trim-right@1.0.1',
          'source-map': 'npm:source-map@0.5.7',
          'lodash': 'npm:lodash@4.17.4',
          'detect-indent': 'npm:detect-indent@4.0.0',
          'jsesc': 'npm:jsesc@1.3.0',
          'babel-messages': 'npm:babel-messages@6.23.0'
        }
      },
      'npm:babel-helper-function-name@6.24.1': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-template': 'npm:babel-template@6.26.0',
          'babel-types': 'npm:babel-types@6.26.0',
          'babel-traverse': 'npm:babel-traverse@6.26.0',
          'babel-helper-get-function-arity': 'npm:babel-helper-get-function-arity@6.24.1'
        }
      },
      'npm:babel-types@6.26.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'lodash': 'npm:lodash@4.17.4',
          'esutils': 'npm:esutils@2.0.2',
          'to-fast-properties': 'npm:to-fast-properties@1.0.3'
        }
      },
      'npm:babel-traverse@6.26.0': {
        'map': {
          'babel-messages': 'npm:babel-messages@6.23.0',
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-types': 'npm:babel-types@6.26.0',
          'babylon': 'npm:babylon@6.18.0',
          'lodash': 'npm:lodash@4.17.4',
          'invariant': 'npm:invariant@2.2.2',
          'babel-code-frame': 'npm:babel-code-frame@6.26.0',
          'globals': 'npm:globals@9.18.0',
          'debug': 'npm:debug@2.6.8'
        }
      },
      'npm:babel-messages@6.23.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0'
        }
      },
      'npm:babel-helper-get-function-arity@6.24.1': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-types': 'npm:babel-types@6.26.0'
        }
      },
      'npm:detect-indent@4.0.0': {
        'map': {
          'repeating': 'npm:repeating@2.0.1'
        }
      },
      'npm:babel-code-frame@6.26.0': {
        'map': {
          'esutils': 'npm:esutils@2.0.2',
          'chalk': 'npm:chalk@1.1.3',
          'js-tokens': 'npm:js-tokens@3.0.2'
        }
      },
      'npm:invariant@2.2.2': {
        'map': {
          'loose-envify': 'npm:loose-envify@1.3.1'
        }
      },
      'npm:loose-envify@1.3.1': {
        'map': {
          'js-tokens': 'npm:js-tokens@3.0.2'
        }
      },
      'npm:repeating@2.0.1': {
        'map': {
          'is-finite': 'npm:is-finite@1.0.2'
        }
      },
      'npm:debug@2.6.8': {
        'map': {
          'ms': 'npm:ms@2.0.0'
        }
      },
      'npm:chalk@1.1.3': {
        'map': {
          'has-ansi': 'npm:has-ansi@2.0.0',
          'ansi-styles': 'npm:ansi-styles@2.2.1',
          'supports-color': 'npm:supports-color@2.0.0',
          'strip-ansi': 'npm:strip-ansi@3.0.1',
          'escape-string-regexp': 'npm:escape-string-regexp@1.0.5'
        }
      },
      'npm:is-finite@1.0.2': {
        'map': {
          'number-is-nan': 'npm:number-is-nan@1.0.1'
        }
      },
      'npm:has-ansi@2.0.0': {
        'map': {
          'ansi-regex': 'npm:ansi-regex@2.1.1'
        }
      },
      'npm:strip-ansi@3.0.1': {
        'map': {
          'ansi-regex': 'npm:ansi-regex@2.1.1'
        }
      }
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'ts'
    }
  },
  transpiler: 'ts',
  typescriptOptions: {
    'sourceMap': true,
    'emitDecoratorMetadata': true,
    'experimentalDecorators': true,
    'removeComments': false,
    'noImplicitAny': false
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    '@angular/common': 'npm:@angular/common@2.4.10',
    '@angular/compiler': 'npm:@angular/compiler@2.4.10',
    '@angular/core': 'npm:@angular/core@2.4.10',
    '@angular/http': 'npm:@angular/http@2.4.10',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.4.10',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.4.10',
    '@angular/router': 'npm:@angular/router@3.4.10',
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'core-js': 'npm:core-js@2.5.1',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'events': 'github:jspm/nodelibs-events@0.2.2',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'net': 'github:jspm/nodelibs-net@0.2.0-alpha',
    'os': 'github:jspm/nodelibs-os@0.2.2',
    'path': 'github:jspm/nodelibs-path@0.2.3',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.10',
    'rxjs': 'npm:rxjs@5.1.1',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'timers': 'github:jspm/nodelibs-timers@0.2.0-alpha',
    'ts': 'github:frankwallis/plugin-typescript@7.0.3',
    'typescript': 'npm:typescript@2.5.2',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
    'zone.js': 'npm:zone.js@0.7.8'
  },
  packages: {
    'npm:rxjs@5.1.1': {
      'map': {
        'symbol-observable': 'npm:symbol-observable@1.0.4'
      }
    },
    'npm:typescript@2.5.2': {
      'map': {
        'source-map-support': 'npm:source-map-support@0.4.18'
      }
    },
    'npm:source-map-support@0.4.18': {
      'map': {
        'source-map': 'npm:source-map@0.5.7'
      }
    },
    'github:jspm/nodelibs-timers@0.2.0-alpha': {
      'map': {
        'timers-browserify': 'npm:timers-browserify@1.4.2'
      }
    },
    'npm:timers-browserify@1.4.2': {
      'map': {
        'process': 'npm:process@0.11.10'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.1'
      }
    },
    'npm:crypto-browserify@3.11.1': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.3',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'inherits': 'npm:inherits@2.0.3',
        'create-hmac': 'npm:create-hmac@1.1.6',
        'pbkdf2': 'npm:pbkdf2@3.0.14',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'browserify-sign': 'npm:browserify-sign@4.0.4',
        'randombytes': 'npm:randombytes@2.0.5',
        'public-encrypt': 'npm:public-encrypt@4.0.0'
      }
    },
    'npm:create-hash@1.1.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'ripemd160': 'npm:ripemd160@2.0.1',
        'sha.js': 'npm:sha.js@2.4.8'
      }
    },
    'npm:create-hmac@1.1.6': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.3',
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'ripemd160': 'npm:ripemd160@2.0.1',
        'sha.js': 'npm:sha.js@2.4.8'
      }
    },
    'npm:browserify-sign@4.0.4': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.3',
        'create-hmac': 'npm:create-hmac@1.1.6',
        'inherits': 'npm:inherits@2.0.3',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'bn.js': 'npm:bn.js@4.11.8',
        'parse-asn1': 'npm:parse-asn1@5.1.0',
        'elliptic': 'npm:elliptic@6.4.0'
      }
    },
    'npm:pbkdf2@3.0.14': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.3',
        'create-hmac': 'npm:create-hmac@1.1.6',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'ripemd160': 'npm:ripemd160@2.0.1',
        'sha.js': 'npm:sha.js@2.4.8'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.5',
        'miller-rabin': 'npm:miller-rabin@4.0.0',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:randombytes@2.0.5': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.3',
        'randombytes': 'npm:randombytes@2.0.5',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'bn.js': 'npm:bn.js@4.11.8',
        'parse-asn1': 'npm:parse-asn1@5.1.0'
      }
    },
    'npm:cipher-base@1.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'browserify-des': 'npm:browserify-des@1.0.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'browserify-aes': 'npm:browserify-aes@1.0.8'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.4',
        'inherits': 'npm:inherits@2.0.3',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:evp_bytestokey@1.0.3': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'md5.js': 'npm:md5.js@1.3.4'
      }
    },
    'npm:browserify-aes@1.0.8': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.4',
        'create-hash': 'npm:create-hash@1.1.3',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.5',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'elliptic': 'npm:elliptic@6.4.0'
      }
    },
    'npm:ripemd160@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'hash-base': 'npm:hash-base@2.0.2'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'brorand': 'npm:brorand@1.1.0'
      }
    },
    'npm:sha.js@2.4.8': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:parse-asn1@5.1.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.0.8',
        'create-hash': 'npm:create-hash@1.1.3',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'pbkdf2': 'npm:pbkdf2@3.0.14',
        'asn1.js': 'npm:asn1.js@4.9.1'
      }
    },
    'npm:elliptic@6.4.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'inherits': 'npm:inherits@2.0.3',
        'brorand': 'npm:brorand@1.1.0',
        'hash.js': 'npm:hash.js@1.1.3',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1',
        'hmac-drbg': 'npm:hmac-drbg@1.0.1',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.3.3'
      }
    },
    'npm:md5.js@1.3.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'hash-base': 'npm:hash-base@3.0.4'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.1'
      }
    },
    'npm:hash-base@2.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:hash-base@3.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hash.js@1.1.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hmac-drbg@1.0.1': {
      'map': {
        'hash.js': 'npm:hash.js@1.1.3',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:asn1.js@4.9.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.8',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'ieee754': 'npm:ieee754@1.1.8',
        'base64-js': 'npm:base64-js@1.2.1'
      }
    },
    'npm:readable-stream@2.3.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.1',
        'isarray': 'npm:isarray@1.0.0',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'string_decoder': 'npm:string_decoder@1.0.3',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7'
      }
    },
    'npm:string_decoder@1.0.3': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.1'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    }
  }
});
