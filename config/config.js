var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'simplelanding'
    },
    port: 6969,
    db: 'mongodb://localhost/simplelanding-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'simplelanding'
    },
    port: 6969,
    db: 'mongodb://localhost/simplelanding-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'simplelanding'
    },
    port: 6969,
    db: 'mongodb://localhost/simplelanding-production'
    
  }
};

module.exports = config[env];
