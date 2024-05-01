import { use, Suspense } from "react"

import UserCard from "components/UserCard"

const fetchUser = async () => {
  const res = await fetch("https://randomuser.me/api", { cache: "no-cache" })
  return res.json()
}

const UserPage = () => {
  const { results: [user] } = use(fetchUser())

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <UserCard user={user} />
    </Suspense>
  )
}

export default UserPage