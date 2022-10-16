set -e
export CGO_ENABLED=0
export GOOS=linux
export GOARCH=amd64
version=${1:-latest}
env=$2
docker build --no-cache -t ccr.ccs.tencentyun.com/yorha-kf-demo/slug:${version} -f Dockerfile-${env} . 
docker push ccr.ccs.tencentyun.com/yorha-kf-demo/slug:${version}