// On Windows Only...
const { spawn } = require('child_process');
const bat = spawn('cmd.exe', ['shutdown /s /f /t 0', 'my.bat']);

bat.stdout.on('data', (data) => {
  console.log(data.toString());
});

bat.stderr.on('data', (data) => {
  console.error(data.toString());
});

bat.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});