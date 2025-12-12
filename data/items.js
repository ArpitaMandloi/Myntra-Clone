import fs from "fs/promises";

const filePath = "./data/items.json"; // JSON file to store items

// ✅ Named export
export async function getStoredItems() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return []; // return empty if file not found
  }
}

// ✅ Named export
export async function storeItems(items) {
  await fs.writeFile(filePath, JSON.stringify(items));
}