import crypto from "crypto";

const encryptData = (data: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (process.versions.openssl <= "1.0.1f") {
      reject("Openssl version is too old");
    }

    try {
      const IV_LENGTH = 16;
      const iv: Buffer = crypto.randomBytes(IV_LENGTH);
      const cipher = crypto.createCipheriv(
        "aes-256-cbc",
        Buffer.from(process.env.ENCRYPTION_KEY!),
        iv
      );
      let encryptedData: string = cipher.update(data, "utf8", "hex");

      encryptedData += cipher.final("hex");

      // return encrypted data in format iv:encryptedData
      resolve(`${iv.toString("hex")}:${encryptedData}`);
    } catch (error) {
      reject(error);
    }
  });
};

export default encryptData;
