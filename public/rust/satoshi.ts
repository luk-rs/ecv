import crypto from "crypto";

function satoshi() {
  // Constants
  const BLOCK_HASH: string =
    "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f";
  const BLOCK_TIMESTAMP: number = 1231006505; // Timestamp of the Bitcoin genesis block in Unix time

  // Get the current date in UTC
  const now: Date = new Date();

  // Calculate the timestamp of the current date in Unix time
  const nowTimestamp: number = Math.floor(now.getTime() / 1000);

  // Calculate the timestamp difference between the current date and the genesis block
  const timestampDiff: number = nowTimestamp - BLOCK_TIMESTAMP;

  // Calculate the number of days in the timestamp difference
  const daysDiff: number = Math.floor(timestampDiff / (24 * 60 * 60));

  // Convert the days difference to a BigInt
  const daysDiffBigInt: bigint = BigInt(daysDiff);

  // Convert the BigInt to a Buffer using a workaround for older versions of Node.js
  const daysDiffBuffer: Buffer = Buffer.alloc(8);
  daysDiffBuffer.writeUIntLE(
    Number(daysDiffBigInt & BigInt("0xffffffff")),
    0,
    4
  );
  daysDiffBuffer.writeUIntLE(Number(daysDiffBigInt >> BigInt(32)), 4, 4);

  // Hash the block hash with SHA-256
  const hash: crypto.Hash = crypto.createHash("sha256");
  hash.update(BLOCK_HASH);
  const blockHash: Buffer = hash.digest();

  // Encrypt the block hash with AES-256 in CBC mode
  const key: Buffer = crypto.randomBytes(32);
  const iv: Buffer = crypto.randomBytes(16);
  const dateCipher: crypto.Cipher = crypto.createCipheriv(
    "AES-256-GCM",
    key,
    iv
  );
  const blockCipher: crypto.Cipher = crypto.createCipheriv(
    "AES-256-GCM",
    key,
    iv
  );

  let encryptedDaysDiff: Buffer = dateCipher.update(daysDiffBuffer);
  encryptedDaysDiff = Buffer.concat([encryptedDaysDiff, dateCipher.final()]);
  const hexEncryptedDaysDiffTimestamp: string =
    encryptedDaysDiff.toString("hex");

  let encryptedBlockHash: Buffer = blockCipher.update(blockHash);
  encryptedBlockHash = Buffer.concat([encryptedBlockHash, blockCipher.final()]);

  // Convert the encrypted block hash to a hexadecimal string
  const hexEncryptedBlockHash: string = encryptedBlockHash.toString("hex");

  let ret = [];
  // Print the results
  ret[0] = `Distance to Bitcoin genesis block: ${daysDiff} days`;
  ret[1] = `Hexadecimal encrypted block hash: ${hexEncryptedBlockHash}`;
  ret[2] = `Hexadecimal encrypted timestamp of days difference: ${hexEncryptedDaysDiffTimestamp}`;

  return ret;
}

console.log(satoshi().join("\n"));
