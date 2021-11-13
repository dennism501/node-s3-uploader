require('dotenv').config()

const awsPhotoBucket = process.env.AWS_BUCKET_NAME_UPLOAD;
const awsAccessKey = process.env.AWS_ACCESS_KEY_ID;
const awsSecretKey = process.env.AWS_SECRET_ACCESS_KEY;

module.exports = {
  awsPhotoBucket,
  awsAccessKey,
  awsSecretKey,
};
