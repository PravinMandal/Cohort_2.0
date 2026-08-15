const { ImageKit, toFile } = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile({ buffer, fileName, filename, folder = "" }) {
  const targetFileName = fileName || filename || "file";

  const file = await client.files.upload({
    file: await toFile(Buffer.from(buffer), targetFileName),
    fileName: targetFileName,
    folder,
  });

  return file;
}

module.exports = {
  uploadFile,
};
