import fs from "node:fs";
import Keypairs from "@root/keypairs";
// generate a new keypair as jwk
// (defaults to EC P-256 / secp256r1 when no options are specified)
// 'prime256v1' in `node:crypto`?
const jwk = await Keypairs.generate();

const keys = {
  jwk,
  pem: {
    private: await Keypairs.export({ jwk: jwk.private, format: "pkcs8" }),
    public: await Keypairs.export({ jwk: jwk.public, format: "spki" }),
  },
};

process.stderr.write(JSON.stringify(keys, 0, 2) + "\n");

fs.writeFileSync("dev-public-key.pem", keys.pem.public);
fs.writeFileSync("dev-private-key.pem", keys.pem.private);
