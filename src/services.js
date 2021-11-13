const AWS = require("aws-sdk");
const fs = require("fs");
const {
  awsPhotoBucket,
  awsAccessKey,
  awsSecretKey,
  awsRegion,
} = require("./config.js");

const s3 = new AWS.S3({
  accessKeyId: awsAccessKey,
  secretAccessKey: awsSecretKey,
  region: awsRegion,
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
    if (err) {
      console.log(err);
      return;
    }

    return console.log(data);
  });
};

const downloadFile = (fileName) => {
    const params = {
        Bucket: awsPhotoBucket,
        Key: fileName
    }
    //Change the file to something else
     return s3.getObject(params,(err, data) => {
        fs.writeFileSync(`./images/${fileName}`, data.Body)
    })
};

module.exports = {
  uploadFile,
  downloadFile
};
