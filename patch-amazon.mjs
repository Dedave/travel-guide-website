// patch-amazon.mjs
// Run with: node patch-amazon.mjs
// Place this file in the root of your project alongside package.json.
// It will update src/data/guidesData.ts in place.

import { readFileSync, writeFileSync } from "fs";

const FILE = "./src/data/guidesData.ts";

const patches = [
  // AFRICA
  { id: "zanzibar-guide",        amazonUrl: "https://www.amazon.com/dp/B0GY7QNN6L"  },
  // EUROPE
  { id: "scotland-guide",        amazonUrl: "https://www.amazon.com/dp/B0GYQWHNTW"  },
  { id: "iceland-guide",         amazonUrl: "https://www.amazon.com/dp/B0GYW432QQ"  },
  { id: "porto-guide",           amazonUrl: "https://www.amazon.com/dp/B0GYRXSY9X"  },
  { id: "santorini-guide",       amazonUrl: "https://www.amazon.com/dp/B0GSFK52KJ"  },
  { id: "amsterdam-guide",       amazonUrl: "https://www.amazon.com/dp/B0GZQF99BN"  },
  // ASIA
  { id: "bangkok-guide",         amazonUrl: "https://www.amazon.com/dp/B0GZPZBF3N"  }, // NOTE: also listed as B0GYYVNFGR — using first
  { id: "bali-indonesia",        amazonUrl: "https://www.amazon.com/dp/B0GZPXB17X"  },
  { id: "izmir-guide",           amazonUrl: "https://www.amazon.com/dp/B0GX314GZM"  }, // Kindle
  // NORTH AMERICA
  { id: "costa-rica-guide",      amazonUrl: "https://www.amazon.com/dp/B0GZL2VXS4"  },
  { id: "yellowstone-guide",     amazonUrl: "https://www.amazon.com/dp/B0GSS5W6YY"  }, // Kindle
  { id: "utah-guide",            amazonUrl: "https://www.amazon.com/dp/B0GFYQT6JC"  },
  { id: "oahu-guide",            amazonUrl: "https://www.amazon.com/dp/B0G2QSFSK7"  },
  // OCEANIA
  { id: "new-zealand-adventure", amazonUrl: "https://www.amazon.com/dp/B0GS8GZN2N"  },

  // ── NOT YET IN guidesData.ts ─────────────────────────────────────────
  // green-bay-guide → https://www.amazon.com/dp/B0GZL3KHRY
  // sicily-guide    → https://www.amazon.com/dp/B0G3VH93QZ
  // Add these guides to guidesData.ts first, then re-run this script.
  // ─────────────────────────────────────────────────────────────────────
];

let content = readFileSync(FILE, "utf8");
let totalPatched = 0;
const notFound = [];

for (const { id, amazonUrl } of patches) {
  // Check if amazonUrl already exists for this guide and update it
  const existingPattern = new RegExp(
    `(id:\\s*["']${id}["'][\\s\\S]*?)amazonUrl:\\s*["'][^"']*["']`
  );

  if (existingPattern.test(content)) {
    content = content.replace(existingPattern, `$1amazonUrl: "${amazonUrl}"`);
    console.log(`✅  Updated existing amazonUrl: ${id}`);
    totalPatched++;
    continue;
  }

  // Insert after gumroadUrl if present
  const afterGumroad = new RegExp(
    `(id:\\s*["']${id}["'][\\s\\S]*?gumroadUrl:\\s*["'][^"']*["'],)`
  );
  if (afterGumroad.test(content)) {
    content = content.replace(afterGumroad, `$1\n      amazonUrl: "${amazonUrl}",`);
    console.log(`✅  Inserted after gumroadUrl: ${id}`);
    totalPatched++;
    continue;
  }

  // Insert after price if present
  const afterPrice = new RegExp(
    `(id:\\s*["']${id}["'][\\s\\S]*?price:\\s*["'][^"']*["'],)`
  );
  if (afterPrice.test(content)) {
    content = content.replace(afterPrice, `$1\n      amazonUrl: "${amazonUrl}",`);
    console.log(`✅  Inserted after price: ${id}`);
    totalPatched++;
    continue;
  }

  // Last resort — insert directly after the id line
  const afterId = new RegExp(`(id:\\s*["']${id}["'],)`);
  if (afterId.test(content)) {
    content = content.replace(afterId, `$1\n      amazonUrl: "${amazonUrl}",`);
    console.log(`⚠️  Inserted after id line: ${id}`);
    totalPatched++;
    continue;
  }

  console.log(`❌  NOT FOUND: ${id}`);
  notFound.push(id);
}

writeFileSync(FILE, content, "utf8");

console.log(`\n✅  Done — ${totalPatched}/${patches.length} guides patched.`);

if (notFound.length) {
  console.log(`❌  Not found: ${notFound.join(", ")}`);
}

console.log(`
⚠️  NOTES:
  • Bangkok has two Amazon listings (B0GZPZBF3N and B0GYYVNFGR).
    The first was used. If you need the second, manually update
    "bangkok-guide" → amazonUrl in guidesData.ts.

  • green-bay-guide and sicily-guide are not yet in guidesData.ts.
    Once you add those guide objects, add these lines:
      green-bay-guide → amazonUrl: "https://www.amazon.com/dp/B0GZL3KHRY"
      sicily-guide    → amazonUrl: "https://www.amazon.com/dp/B0G3VH93QZ"
`);
