
import { useState } from 'react';
import AddUser from '../../features/AddUser/AddUser';
import UserList from '../../features/UserList/UserList';
import EditUser from '../../features/EditUser/EditUser';
import initialUsers from '../../assets/users.json'; // Импорт JSON-файла
import style from './TeamPage.module.scss';


const TeamPage = () => {
    const [users, setUsers] = useState(initialUsers);
    const [editingUser, setEditingUser] = useState(null);

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    const deleteUser = (email) => {
        setUsers(users.filter(user => user.email !== email));
    };

    const updateUser = (updatedUser) => {
        setUsers(users.map(user => user.email === updatedUser.email ? updatedUser : user));
        setEditingUser(null);
    };

    const editUser = (user) => {
        setEditingUser(user);
    };

    return (
        <div className={style.teamPage}>
            <AddUser addUser={addUser} />
            <div className={style.team}>Команда</div>
            <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
            {editingUser && <EditUser user={editingUser} updateUser={updateUser} />}
        </div>
    );
}

export default TeamPage;