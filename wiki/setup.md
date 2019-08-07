## Setup
  **Install git:** See wiki on [git](git.md) \
  **Install node:** https://nodejs.org/en/ \
  **Install yarn:** `brew install yarn` \
  **Add global node_modules to exports:** Add `export NODE_PATH=/usr/lib/node_modules:/usr/local/lib/node_modules` to `~/.bashrc` or `/.bash_profile` \
  **Instal node web server:** `npm install -g http-server`

## Running local web server
  **Obtain localhost certs:** See wiki on [https](https.md) \
  **Run web server:** \
  Sample command: `http-server -g -S -C ./certs/local.crt -K ./certs/local.key` \
  For mode details, see `http-server -h`
