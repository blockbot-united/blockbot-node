const version = '2* ';

setInterval(() => {
  console.log(`${version} ${new Date().toISOString()}`);
}, 1000);
