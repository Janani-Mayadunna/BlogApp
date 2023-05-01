module.exports = {
    // ... other Jest configuration options ...
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
    },
    testEnvironment: 'jsdom'

  };
  