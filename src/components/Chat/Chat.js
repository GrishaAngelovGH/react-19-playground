"use client"

import { useOptimistic, useState, useRef } from "react"

import styles from "components/common.module.css"

const deliverMessage = async message => {
  await new Promise((res) => setTimeout(res, 1000))
  return message
}

const Thread = ({ messages, sendMessage }) => {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true
      }
    ]
  )

  const formRef = useRef()

  const formAction = async formData => {
    const message = formData.get("message")

    if (message.length) {
      addOptimisticMessage(message)
      formRef.current.reset()
      await sendMessage(formData)
    }
  }

  return (
    <div className={styles.container}>
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="Send a message" className={styles.formControl} />
        <button type="submit" className={styles.submitButton}>Send</button>
      </form>

      <ul className={styles.list}>
        {
          optimisticMessages.map((message, index) => (
            <li className={styles.listItem} key={index}>
              <h1>{message.text} {message.sending && <span>📨</span>}</h1>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "What's up?", sending: false, key: 1 }
  ])

  const sendMessage = async formData => {
    const sentMessage = await deliverMessage(formData.get("message"))
    setMessages((messages) => [...messages, { text: sentMessage }])
  }

  return (
    <Thread messages={messages} sendMessage={sendMessage} />
  )
}

export default Chat