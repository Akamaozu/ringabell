var process = require('child_process').spawn,
    child = process('node', ['./app.js'], {
  
      detached: true,
      stdio: 'ignore'
    });

child.unref();