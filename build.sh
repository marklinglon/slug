set -e
export CGO_ENABLED=0
export GOOS=linux
export GOARCH=amd64
version=${1:-latest}
env=$2
docker build --no-cache -t marklinglon/slug:${version} -f Dockerfile-${env} . 
docker push marklinglon/slug:${version}