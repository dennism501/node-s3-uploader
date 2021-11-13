require('dotenv').config()

const awsPhotoBucket = process.env.AWS_BUCKET_NAME_UPLOAD;
const awsAccessKey = process.env.AWS_ACCESS_KEY_ID;
const awsSecretKey = process.env.AWS_SECRET_ACCESS_KEY;
const awsRegion = process.env.AWS_REGION

module.exports = {
  awsPhotoBucket,
  awsAccessKey,
  awsSecretKey,
  awsRegion
};
