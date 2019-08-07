## HTTPS resources
  **tl;dr:**
  1. Facebook requests a certificate from DigiCert
      * DigiCert verifies that they are really talking to Facebook
      * Facebook sends DigiCert their public key
      * DigiCert uses their private key to digitally sign Facebook’s public key
      * DigiCert gives Facebook the signed public key
      * This is now Facebook’s SSL Certificate
  2. You connect to Facebook’s website
  3. Facebook sends you their SSL Certificate
  4. Using the DigiCert public key in your root certificate store, you verify DigiCert’s signature on Facebook’s SSL Certificate
  5. You generate a secret key, and use Facebook’s public key from their certificate to encrypt it.
  6. You send the encrypted secret key to Facebook
  7. Facebook decrypts it with their private key, and holds on to it.
  8. You and Facebook use the shared secret key to encrypt your web traffic.

  **More resources:** \
  Diffie-Hellman Key Exchange: https://www.youtube.com/watch?v=YEBfamv-_do \
  RSA: https://hackernoon.com/how-does-rsa-work-f44918df914b \
  RSA signing: https://www.cs.cornell.edu/courses/cs5430/2015sp/notes/rsa_sign_vs_dec.php \
  HTTPS: https://strongarm.io/blog/how-https-works/ \
  Certs: http://www.steves-internet-guide.com/ssl-certificates-explained/ \
  Cert file types: https://blogs.msdn.microsoft.com/kaushal/2010/11/04/various-ssltls-certificate-file-typesextensions/ \
  Localhost certs (self-signed certs): https://letsencrypt.org/docs/certificates-for-localhost/ & https://flaviocopes.com/express-https-self-signed-certificate/

