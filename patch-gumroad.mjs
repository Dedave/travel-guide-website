// patch-gumroad.mjs
// Run with: node patch-gumroad.mjs
// Place this file next to your guidesData.ts and run it once.
// It will update the file in place.

import { readFileSync, writeFileSync } from "fs";

const FILE = "./src/data/guidesData.ts";

const patches = [
  // AFRICA
  { id: "zanzibar-guide",         price: "$6.99",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/etcmwy" },
  // EUROPE
  { id: "scotland-guide",         price: "$6.99",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/bjiirw" },
  { id: "dublin-guide",           price: "$6.99",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/pvxpb"  },
  { id: "porto-guide",            price: "$6.77",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/jiucmf" },
  { id: "iceland-guide",          price: "$6.99",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/yqlxcp" },
  { id: "amsterdam-guide",        price: "$6.99",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/xincp"  },
  { id: "copenhagen-guide",       price: "$6.89",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/npowjw" },
  { id: "switzerland-guide",      price: "$6.99",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/nlxvwj" },
  { id: "lake-garda-guide",       price: "$6.89",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/trhgk"  },
  { id: "santorini-guide",        price: "$6.99",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/wpvkg"  },
  { id: "malta-guide",            price: "$6.79",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/dvhta"  },
  // ASIA
  { id: "bangkok-guide",          price: "$6.99",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/skwkng" },
  { id: "bali-indonesia",         price: "$6.99",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/nrqozj" },
  { id: "izmir-guide",            price: "$6.99",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/wbxpy"  },
  // NORTH AMERICA
  { id: "costa-rica-guide",       price: "$6.99",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/gfgefl" },
  { id: "alaska-guide",           price: "$6.89",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/wlqvia" },
  { id: "yellowstone-guide",      price: "$6.99",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/rjdoih" },
  { id: "utah-guide",             price: "$6.99",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/qvxguf" },
  { id: "oahu-guide",             price: "$6.99",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/ueayg"  },
  // OCEANIA
  { id: "new-zealand-adventure",  price: "$6.99",  gumroadUrl: "https://wanderlustguides.gumroad.com/l/aqdxxl" },
];

let content = readFileSync(FILE, "utf8");
let totalPatched = 0;
let notFound = [];

for (const { id, price, gumroadUrl } of patches) {
  // Find the guide block by its id field
  const idPattern = new RegExp(`(id:\\s*["']${id}["'][\\s\\S]*?)(?=id:\\s*["']|\\]\\s*,|$)`, "m");

  // 1. Update price field
  const pricePattern = new RegExp(`(id:\\s*["']${id}["'][\\s\\S]*?price:\\s*["'])\\$[\\d.]+["']`);
  if (pricePattern.test(content)) {
    content = content.replace(pricePattern, `$1${price}"`);
  } else {
    // price field not found — we'll add it along with gumroadUrl below
  }

  // 2. Add or update gumroadUrl
  const gumroadPattern = new RegExp(`(id:\\s*["']${id}["'][\\s\\S]*?)gumroadUrl:\\s*["'][^"']*["']`);
  if (gumroadPattern.test(content)) {
    // Update existing gumroadUrl
    content = content.replace(
      gumroadPattern,
      `$1gumroadUrl: "${gumroadUrl}"`
    );
    console.log(`✅  Updated: ${id}`);
    totalPatched++;
  } else {
    // Insert gumroadUrl after the price field
    const insertAfterPrice = new RegExp(
      `(id:\\s*["']${id}["'][\\s\\S]*?price:\\s*["']${price.replace("$", "\\$")}["'],)`,
    );
    if (insertAfterPrice.test(content)) {
      content = content.replace(
        insertAfterPrice,
        `$1\n      gumroadUrl: "${gumroadUrl}",`
      );
      console.log(`✅  Inserted gumroadUrl for: ${id}`);
      totalPatched++;
    } else {
      // Fallback: insert after the id line itself
      const insertAfterId = new RegExp(`(id:\\s*["']${id}["'],)`);
      if (insertAfterId.test(content)) {
        content = content.replace(
          insertAfterId,
          `$1\n      price: "${price}",\n      gumroadUrl: "${gumroadUrl}",`
        );
        console.log(`⚠️  Inserted price + gumroadUrl after id for: ${id}`);
        totalPatched++;
      } else {
        console.log(`❌  NOT FOUND: ${id}`);
        notFound.push(id);
      }
    }
  }
}

writeFileSync(FILE, content, "utf8");
console.log(`\n✅  Done — ${totalPatched}/${patches.length} guides patched.`);
if (notFound.length) {
  console.log(`❌  Not found (check IDs): ${notFound.join(", ")}`);
}
