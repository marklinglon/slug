rm -f /READ*
rm -rf node_modules
# npm config set fetch-retry-mintimeout 20000
# npm config set fetch-retry-maxtimeout 120000
npm config ls -l 
# npm install --registry=https://registry.npmmirror.com
npm install --registry=https://registry.npm.taobao.org
npm run serve