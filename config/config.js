var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';
var appName = 'EA';

var config = {
  development: {
    root: rootPath,
    app: {
      name: appName
    },
    port: 6969,
    db: 'mongodb://localhost/'+appName+'-dev'
    
  },

  test: {
    root: rootPath,
    app: {
      name: appName
    },
    port: 6969,
    db: 'mongodb://localhost/'+appName+'-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: appName
    },
    port: 6969,
    db: 'mongodb://localhost/'+appName+'-prod'
    
  }
};

module.exports = config[env];
