import PropTypes from 'prop-types';
import UserItem from '../UserItem/UserItem';
import styles from './userList.module.scss';

const UserList = ({ users, deleteUser, editUser }) => {
    return (
        <div className={styles.UserListWrapper}>
            {users.map((user,index) => (
                <UserItem key={index} user={user} deleteUser={deleteUser} editUser={editUser} />
            ))}
        </div>
    );
};

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            email: PropTypes.string,
            permissions: PropTypes.arrayOf(PropTypes.string),
            image: PropTypes.string,
        })
    ).isRequired,
    deleteUser: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
};

export default UserList;