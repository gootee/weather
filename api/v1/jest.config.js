module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/dist/" 
  ]
};

// export const preset = 'ts-jest';
// export const testEnvironment = 'node';

// "jest": {
//   "testPathIgnorePatterns": [
//     "/node_modules/",
//     "<rootDir>/ignore/this/path/" 
//   ]
// }