import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x672dcd00b8be82c9ad816804a0152393679d88Bc';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}