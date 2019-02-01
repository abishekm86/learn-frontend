## Guide
1. Create .gitignore and add
```
**/node_modules
**/yarn-error.log
```
2. `brew install yarn`
3. `yarn init`
4. `yarn config set workspaces-experimental true`
5. Add the following snippet to package.json
```
  "private": true,
  "workspaces": [
     "packages/*"
  ],
  "scripts": {
    "bootstrap": "yarn && ./node_modules/.bin/lerna bootstrap"
  },
```
6. `yarn`
7. `yarn global add lerna --dev -W`
8. Create pacakges under ./packages. Run `yarn init` under each
9. Inter-link dependencies using `lerna add <dependency> --scope=<dependent>`

## Read more
  **Yarn Workspaces:** https://yarnpkg.com/en/docs/cli/workspaces \
  **Lerna monorepo tool:** https://github.com/lerna/lerna \
  **Lerna with yarn workspace:** https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d

