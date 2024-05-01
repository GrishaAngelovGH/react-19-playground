import styles from "./UserCard.module.css"
import commonStyles from "components/common.module.css"

const UserCard = ({ user }) => (
  <div className={commonStyles.container}>
    <div className={styles.user}>
      <img src={user.picture.large} width={200} className={styles.roundedCircle} />
      <h1>{user.name.first} {user.name.last} ({user.location.country})</h1>
    </div>
  </div>
)

export default UserCard