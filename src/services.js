const AWS = require("aws-sdk");
const fs = require("fs");
const { awsPhotoBucket, awsAccessKey, awsSecretKey } = require("./config.js");

const s3 = new AWS.S3({
  accessKeyId: awsAccessKey,
  secretAccessKey: awsSecretKey,
});

//=====READ AND WRITE======
const uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(fileName);

  const params = {
    Bucket: awsPhotoBucket,
    Key: fileName,
    Body: fileContent,
  };

  s3.upload(params, (err, data) => {
    if (err) console.log(err);

    return console.log(data);
  });
};

module.exports = {
  uploadFile,
};
