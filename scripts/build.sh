#!/bin/bash

pnpm build-esm
pnpm build-annotate
pnpm build-cjs

# rm -rf ~/Sites/koop/node_modules/@ivosabev/hui
# cp -r dist ~/Sites/koop/node_modules/@ivosabev/
# mv ~/Sites/koop/node_modules/@ivosabev/dist ~/Sites/koop/node_modules/@ivosabev/hui

# echo "Done"
