const { verify } = require('./riverbraid-core/run-vectors.cjs');
console.log("🌀 Verifying p5.js canvas integrity via Riverbraid...");
try {
  verify();
  console.log("✅ Sketch is stationary and mechanically honest.");
} catch (e) {
  console.log("❌ Drift detected in canvas logic.");
  process.exit(1);
}
