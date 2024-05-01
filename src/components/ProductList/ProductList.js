"use client"

import { useState } from "react"

import commonStyles from "components/common.module.css"

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
		<div className={commonStyles.container}>
			<h1>Product List</h1>

			<form action={formAction}>
				<label htmlFor="productName">
					<input
						id="productName"
						type="text"
						className={commonStyles.formControl}
						placeholder="Product Name"
						name="productName"
						value={productName}
						onChange={handleProductNameChange}
						required
					/>
				</label>
				<button type="submit" className={commonStyles.submitButton}>Submit</button>
			</form>

			<ul className={commonStyles.list}>
				{
					products.map(v => (
						<li className={commonStyles.listItem} key={v.id}>{v.name}</li>
					))
				}
			</ul>
		</div>
	)
}

export default ProductList