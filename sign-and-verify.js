import fs from "node:fs";
import JWT from "jsonwebtoken";

const signParams = (obj, privateKey) => {
  return JWT.sign(obj, privateKey, {
    algorithm: "ES256",
    expiresIn: "24h",
  });
};

const getParams = (token, publicKey) => {
  return JWT.verify(token, publicKey, { algorithms: ["ES256"] });
};

const decodeParams = (token) => {
  return JWT.decode(token, { complete: true });
};

//

const privateKey = fs.readFileSync("./dev-private-key.pem");
const publicKey = fs.readFileSync("./dev-public-key.pem");

const payload = {
  msg: "hello world",
  ids: [12, 34, 56, 78, 90],
};

const signedJwt = signParams(payload, privateKey);

console.log(publicKey.toString().trim());
console.log(`\nsigned params:\n${signedJwt}`);

console.log("\ndecoded:\n");
console.log(decodeParams(signedJwt));

console.log("\nparams:\n");
console.log(getParams(signedJwt, publicKey));
