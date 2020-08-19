const version = 3;

setInterval(() => {
  console.log(`${version} ${new Date().toISOString()}`);
}, 1000);
