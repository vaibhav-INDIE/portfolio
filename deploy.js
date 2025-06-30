const ghpages = require('gh-pages');
const path = require('path');

const options = {
  branch: 'gh-pages',
  repo: 'https://github.com/vaibhav-INDIE/CuttuOP.git',
  dotfiles: true
};

const callback = (err) => {
  if (err) {
    console.error('Deployment failed:', err);
  } else {
    console.log('Successfully deployed to GitHub Pages!');
  }
};

// Deploy the public directory to GitHub Pages
ghpages.publish('out', options, callback);
