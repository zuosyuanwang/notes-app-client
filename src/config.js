export default {
  s3: {
	REGION: "ap-northeast-1",
	BUCKET: "notes-app-upload-zswang"
  },
  apiGateway: {
	REGION: "ap-northeast-1",
	URL: "https://639179klcl.execute-api.ap-northeast-1.amazonaws.com/prod"
  },
  cognito: {
	REGION: "ap-northeast-1",
	USER_POOL_ID: "ap-northeast-1_q2DBtNBUI",
	APP_CLIENT_ID: "3ntokaq9eoaosl26kf8epdn8lu",
	IDENTITY_POOL_ID: "ap-northeast-1:d9fec89f-d206-4596-a086-3f948bee12b6"
  }
};
