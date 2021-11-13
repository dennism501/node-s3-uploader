import AWS from "aws-sdk";
import { awsPhotoBucket,awsAccessKey,awsSecretKey } from 'src/config/config.js';

const s3 = new AWS.S3({
  accessKeyId: awsAccessKey,
  secretAccessKey: awsSecretKey,
});

//=====READ AND WRITE======

const uploadFile = (fileName) => {
    const fileContent = fs.readFileSync(fileName);

    const params = {
        Bucket: awsPhotoBucket,
        Key: filename,
        Body: fileContent
    }

    s3.upload(params, (err, data) => {
        if(err) reject(err);
        
        return resolve(data);
    })
}