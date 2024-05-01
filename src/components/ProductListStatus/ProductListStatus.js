"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"

import styles from "components/common.module.css"

const ProcessingStatus = () => {
  const { pending } = useFormStatus()

  if (!pending) return null

  return (
    <h1 className={styles.label}>Processing...</h1>
  )
}

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending} className={styles.submitButton}>Submit</button>
  )
}

const ProductListStatus = () => {
  const [productName, setProductName] = useState("")
  const [products, setProducts] = useState([])

  const handleProductNameChange = ({ target: { value } }) => {
    setProductName(value)
  }

  const formAction = async formData => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })

    const newProduct = {
      id: products.length + 1,
      name: formData.get("productName")
    }

    setProductName("")
    setProducts([...products, newProduct])
  }

  return (
    <div className={styles.container}>
      <h1>Product List</h1>

      <form action={formAction}>
        <label htmlFor="productName">
          <input
            id="productName"
            type="text"
            className={styles.formControl}
            placeholder="Product Name"
            name="productName"
            value={productName}
            onChange={handleProductNameChange}
            required
          />
        </label>

        <SubmitButton />

        <ProcessingStatus />
      </form>

      <ul className={styles.list}>
        {
          products.map(v => (
            <li className={styles.listItem} key={v.id}>
              {v.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductListStatus