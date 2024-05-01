"use client"

import { useState, useActionState } from "react"

import styles from "./EmailForm.module.css"
import commonStyles from "components/common.module.css"

const update = async email => new Promise((resolve, reject) => {
	setTimeout(() => {
		email === "incorrect@some.com" ? reject("The email is incorrect") : resolve()
	}, 2000)
})

const EmailForm = () => {
	const [value, setValue] = useState("")

	const [actionState, submitAction, isPending] = useActionState(
		async (prevState, formData) => {
			try {
				const email = formData.get("email")
				await update(email)
				return { message: "The email is successfully changed" }
			} catch (error) {
				return { message: error }
			}
			finally {
				setValue("")
			}
		},
		{ message: "" }
	)

	return (
		<div className={commonStyles.container}>
			<h1>Change Email</h1>

			<button className={`${styles.button} ${styles.correct}`} onClick={() => { setValue("correct@some.com"); actionState.message = "" }}>Set correct email</button>
			<button className={`${styles.button} ${styles.incorrect}`} onClick={() => { setValue("incorrect@some.com"); actionState.message = "" }}>Set incorrect email</button>

			<form action={submitAction}>
				<label htmlFor="userEmail">
					<input
						id="userEmail"
						type="email"
						value={value}
						className={commonStyles.formControl}
						onChange={({ target }) => { setValue(target.value) }}
						placeholder="Email"
						name="email"
						required
					/>
				</label>
				<button type="submit" className={commonStyles.submitButton}>Submit</button>
			</form>

			{isPending && <h1 className={styles.label}>Processing...</h1>}

			{actionState.message.length > 0 && <h1 className={styles.label}>{actionState.message}</h1>}
		</div>
	)
}

export default EmailForm