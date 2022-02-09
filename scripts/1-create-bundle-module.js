import { getApp } from "./helpers.js";

async function main() {
  const app = await getApp();

  console.log("Deploying bundle collection module...");

  const bundleModule = await app.deployBundleModule({
    name: "Lootbox Bundle",
    sellerFeeBasisPoints: 100, // sellerFeeBasisPoints: 100 means 1%.
  });

  console.log(
    `Deployed bundle collection module with address ${bundleModule.address}`
  );
}

try {
  await main();
} catch (error) {
  console.error("Error creating the bundle collection module", error);
  process.exit(1);
}


// 0x44c10fc9E7be575956233E6c8aDA72d4f0b3899e