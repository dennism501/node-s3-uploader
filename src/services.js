import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

//=====READ AND WRITE======

const uploadFile = (fileName) => {
    const fileContent = fs.readFileSync(fileName);

    const params = {
        
    }
}