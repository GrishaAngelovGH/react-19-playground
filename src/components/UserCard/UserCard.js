import styles from "./UserCard.module.css"

const UserCard = ({ user }) => (
  <div className={styles.card}>
    <div className={styles.user}>
      <img src={user.picture.large} width={200} className={styles.roundedCircle} />
      <h1>{user.name.first} {user.name.last} ({user.location.country})</h1>
    </div>
  </div>
)

export default UserCard