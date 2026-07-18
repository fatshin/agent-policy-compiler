import type { Metadata } from "next";
import { ProductDemo } from "./product-demo";
import { product } from "./product-data";

export const metadata: Metadata = {
  title: `${product.name} — OpenAI Build Week`,
  description: product.tagline,
};

export default function Home() {
  return <ProductDemo product={product} />;
}
