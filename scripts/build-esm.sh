pnpm tsc -b tsconfig.build.json

# Check if src exists, due to .tsbuildinfo not always running tsc due to caching
if [ -d dist/esm/src/ ]; then
  mv dist/esm/src/* dist/esm/
  rm -rf dist/esm/src

  mv dist/dts/src/* dist/dts/
  rm -rf dist/dts/src
fi
