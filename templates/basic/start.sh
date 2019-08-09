rm -rf ./build

mkdir build
cp -R ../../secret-store/certs ./build/certs
cp -R ../../secret-store/apiKeys.js ./build/apiKeys.js
cp -R ./assets/ ./build/
cp -R ./src/ ./build/


cd build && exec http-server -g -S -C ./certs/local.crt -K ./certs/local.key
