import styles from './addUser.module.scss';
import PropTypes from 'prop-types';
import {useState} from "react";

const AddUser = ({ addUser }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [permissions, setPermissions] = useState("");
    const [image, setImage] = useState("");

    const handleAddUser = () => {
        addUser({
            name,
            email,
            permissions: permissions.split(","),
            image,
        });
        setName("");
        setEmail("");
        setPermissions("");
        setImage("");
    };

    return (
        <div className={styles.AddUserWrapper}>
            <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.Input}
            />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.Input}
            />
            <input
                type="text"
                placeholder="Права доступа"
                value={permissions}
                onChange={(e) => setPermissions(e.target.value)}
                className={styles.Input}
            />
            <input
                type="text"
                placeholder="Ссылка на изображение"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className={styles.Input}
            />
            <button onClick={handleAddUser} className={styles.Button}>
                Добавить пользователя
            </button>
        </div>
    );
};

AddUser.propTypes = {
    addUser: PropTypes.func.isRequired,
};

export default AddUser;