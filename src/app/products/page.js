import Products from "components/Products"

const ProductsPage = () => {
  const productsPromise = Promise.resolve([
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" }
  ])

  return (<Products productsPromise={productsPromise} />)
}

export default ProductsPage