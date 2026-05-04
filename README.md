**Status:** Experimental / Research
**Normative Source:** Riverbraid-Core
**Authority Boundary:** This repository is a Ring 2 runtime fork. It does not define canonical Riverbraid protocol semantics.
# Riverbraid-p5
**Stationary Generative Art**
Riverbraid-p5 is a visualization fork for p5 based Riverbraid creative coding and visual execution experiments.
It is anchored to the local Riverbraid-Core dependency declared in package.json as:
```json
"riverbraid-core": "file:../Riverbraid-Core"
Authority Boundary

This repository does not supersede Riverbraid-Core. Riverbraid-Core remains the normative source for protocol semantics.

API Scoping

Riverbraid-Core does not currently expose internal files such as run-vectors.cjs or gate.mjs as public package scoped APIs. Package scoped imports such as require("riverbraid-core/run-vectors.cjs") are not part of the current supported surface. The local runtime fork path remains the truthful binding for this repository.

Ring 2 Verification Surface

The Ring 2 verification surface for this repository is limited to:

.anchor

AUTHORITY.md

RING.md

verify.mjs

verify-output.json

package.json

verify-output.json records the repository specific verifier output. It does not verify the full constellation.

Verification

node .\verify.mjs

Expected local status: VERIFIED.
