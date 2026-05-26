# Riverbraid-p5

Riverbraid-p5 is an experimental visualization surface for p5 based Riverbraid creative coding and visual execution experiments.

## Role in Riverbraid

Riverbraid-p5 is an experimental surface within Riverbraid.

## Public verification boundary

This repository is not part of the current Evaluation Kit canonical verification registry unless explicitly listed there in a future verified registry. It does not define canonical Riverbraid protocol semantics.

## Evidence boundary

This repository does not claim certification, legal approval, production readiness, absolute security, external audit, complete AI safety, adoption, or absence of defects.

## Status

- Status: Experimental / Research
- Normative Source: Riverbraid-Core
- Authority Boundary: This repository is a Ring 2 runtime fork. It does not define canonical Riverbraid protocol semantics.

## Local dependency anchor

Riverbraid-p5 is anchored to the local Riverbraid-Core dependency declared in `package.json` as:

```json
{
  "riverbraid-core": "file:../Riverbraid-Core"
}
```

## Authority boundary

This repository does not supersede Riverbraid-Core. Riverbraid-Core remains the normative source for protocol semantics.

## API scoping

Riverbraid-Core does not currently expose internal files such as `run-vectors.cjs` or `gate.mjs` as public package scoped APIs.

Package scoped imports such as `require("riverbraid-core/run-vectors.cjs")` are not part of the current supported surface. The local runtime fork path remains the truthful binding for this repository.

## Ring 2 verification surface

The Ring 2 verification surface for this repository is limited to:

- `.anchor`
- `AUTHORITY.md`
- `RING.md`
- `verify.mjs`
- `verify-output.json`
- `package.json`

`verify-output.json` records the repository specific verifier output. It does not verify the full constellation.

## Verification

Run:

```powershell
node .\verify.mjs
```

Expected local status: `VERIFIED`.
