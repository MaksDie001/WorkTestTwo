import PropTypes from 'prop-types';
import styles from './UserItem.module.scss';

const UserItem = ({ user, deleteUser, editUser }) => {
    return (
        <div className={styles.UserItemWrapper}>
            <div className={styles.UserDetails}>
                <img src={user.image} alt={user.name} className={styles.Avatar} />
                <div className={styles.UserInfo}>
                    <div className={styles.contactInfo}>
                        <div className={styles.UserName}>{user.name}</div>
                        <div className={styles.UserEmail}>{user.email}</div>
                    </div>
                    <div className={styles.UserPermissions}>{user.permissions.map((res,index)=>{
                        return(
                            <div key={index} className={styles.permissions}>{res}</div>
                        )
                    })}</div>
                </div>
            </div>
            <div className={styles.ActionButtons}>
                <button onClick={() => editUser(user)} className={styles.Button}>Редактировать</button>
                <button onClick={() => deleteUser(user.email)} className={styles.Button}>Удалить</button>
            </div>
        </div>
    );
};

UserItem.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    deleteUser: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
};

export default UserItem;