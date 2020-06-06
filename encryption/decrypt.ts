import crypto, { Decipher } from "crypto";

const decryptData = (encryptedData: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      const splitEncryptedData: string[] = encryptedData.split(":");
      const iv: string = splitEncryptedData[0];
      const decipher: Decipher = crypto.createDecipheriv(
        "aes-256-cbc",
        Buffer.from(process.env.ENCRYPTION_KEY!),
        Buffer.from(iv, "hex")
      );

      let decryptedData: string = decipher.update(
        splitEncryptedData[1],
        "hex",
        "utf8"
      );
      decryptedData += decipher.final("utf8");

      resolve(decryptedData);
    } catch (error) {
      reject(error);
    }
  });
};

export default decryptData;
