"use client"

import { useState } from "react"

import styles from "./ProductList.module.css"

const ProductList = () => {
	const [productName, setProductName] = useState("")
	const [products, setProducts] = useState([])

	const handleProductNameChange = ({ target: { value } }) => {
		setProductName(value)
	}

	const formAction = formData => {
		const newProduct = {
			id: products.length + 1,
			name: formData.get("productName")
		}

		setProductName("")
		setProducts([...products, newProduct])
	}

	return (
		<div className={styles.productList}>
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
				<button type="submit" className={styles.submitButton}>Submit</button>
			</form>

			<ul className={styles.list}>
				{
					products.map(v => (
						<li className={styles.listItem} key={v.id}>{v.name}</li>
					))
				}
			</ul>
		</div>
	)
}

export default ProductList