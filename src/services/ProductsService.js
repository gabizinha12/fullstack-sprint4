import { getData } from "./FetchService";
export async function fetchProducts() {
  try {
    const data = await getData("products.json");
    if (typeof data == "string") {
      throw new Error(data);
    }
    return data.all;
  } catch (err) {
    return { error: { object: "os produtos", type: err.message } };
  }
}
