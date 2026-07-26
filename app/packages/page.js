import PackageList from "./PackageList";

export default async function Packages() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return <PackageList products={data.products} />;
}