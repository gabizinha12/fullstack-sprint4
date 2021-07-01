import { getData } from "./FetchService";
export async function fetchCategories() {
  try {
    const data = await getData("categories.json");
    if (typeof data == "string") {
      throw new Error(data);
    }
    return data.all;
  } catch (err) {
    return { error: { object: "as categorias", type: err.message } };
  }
}
