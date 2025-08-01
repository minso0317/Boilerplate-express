const commonConfig = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

module.exports = {
  projects: [
    {
      displayName: "**test_file_name**-unit", // 파일명 수정
      ...commonConfig,
      testMatch: ["**/unitTest/**test_file_name**Test/test_file_name*.test.ts"], // 경로수정
    },
    {
      displayName: "**test_file_name**-integration", // 파일명 수정
      ...commonConfig,
      testMatch: ["**/integrationTest/**/test_file_name*.test.ts"], //경로수정
    },
  ],
};
