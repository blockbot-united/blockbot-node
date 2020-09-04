module.exports = {
  apps: [
    {
      script: 'index.js',
      watch: '.',
    },
  ],

  deploy: {
    production: {
      user: 'jeff',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'https://github.com/gofreddo/pm2-dep.git',
      path: '~/dep-test',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
