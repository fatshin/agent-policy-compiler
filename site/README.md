# Public fixture viewer

This directory contains the public browser view for one independent Build Week
product. The shared React component owns layout and interaction only.
`app/product-data.ts` is product-owned and must match the default fixture and
verified output from the repository-root `product.py`.

The public page deliberately reveals a precomputed acceptance result. It does
not present that result as a live GPT-5.6 response. The repository-root README
and `./scripts/run.sh` provide the authoritative local judge path.

## Verify

```sh
npm ci
npm test
```

`npm test` builds the production bundle and checks the server-rendered product
shell. Repository-root Python tests additionally guard product-specific fixture
tokens so the public evidence cannot silently drift from the tested engine.
