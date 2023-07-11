#!/bin/sh

tmpdir="$(mktemp -d)"
openssl genrsa -out "${tmpdir}/rsa_2048_priv.pem" 2048
openssl rsa -in "${tmpdir}/rsa_2048_priv.pem" -pubout -out "${tmpdir}/rsa_2048_pub.pem"
cat "${tmpdir}/rsa_2048_priv.pem" "${tmpdir}/rsa_2048_pub.pem"
rm -rf ${tmpdir}
