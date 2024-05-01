import commonStyle from "components/common.module.css"

import { use } from "react"

const Products = ({ productsPromise }) => {
  const products = use(productsPromise)

  return (
    <div className={commonStyle.container}>
      <ul className={commonStyle.list}>
        {
          products.map(v => (
            <li key={v.id} className={commonStyle.listItem}>{v.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Products