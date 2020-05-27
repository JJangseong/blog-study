import AWS from "aws-sdk";
import moment from "moment";

export async function uploadImage(file: File, fileName: string) {
  let dataUrl: string = "";
  console.log(process.env.I_DENTITY_POLL_ID);
  //아마존 S3에 저장하려면 먼저 설정을 업데이트합니다.
  AWS.config.update({
    region: "ap-northeast-2",
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "ap-northeast-2:1f4eabbc-3d4e-4145-8fcb-d23231d6bb91",
    }),
  }); // for simplicity. In prod, use loadConfigFromFile, or env variables

  var s3 = new AWS.S3();
  var params = {
    Bucket: "sungjin-log-file-server",
    Key: `${fileName}`,
    ContentType: "image/png",
    Body: file,
  };

  const result = await s3.upload(params, (err: any, data: any) => {
    if (err) {
      throw err;
    }
    console.log(data);
    dataUrl = data.Location;
  });

  return result;
}

export const formatFileName = (filename: string) => {
  const date = moment().format("YYYYMMDD");
  const randomString = Math.random().toString(36).substring(2, 7);
  const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const newFilename = `images/${date}${randomString}${cleanFileName}`;
  return newFilename.substring(0, 60);
};
