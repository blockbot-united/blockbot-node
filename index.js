const version = 1;

setInterval(() => {
  console.log(`${version} ${new Date().toISOString()}`);
}, 1000);
