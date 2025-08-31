interface Product {
    readonly id: number;
    title: string | number;
    description?: string;
}


const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);