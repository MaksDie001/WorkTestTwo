import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './editUser.module.scss';

const EditUser = ({ user, updateUser }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [permissions, setPermissions] = useState(user.permissions.join(','));
    const [image, setImage] = useState(user.image);

    const handleUpdateUser = () => {
        updateUser({
            name,
            email,
            permissions: permissions.split(','),
            image
        });
    };

    return (
        <div className={styles.EditUserWrapper}>
            <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} className={styles.Input} />
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.Input} />
            <input type="text" placeholder="Права доступа" value={permissions} onChange={(e) => setPermissions(e.target.value)} className={styles.Input} />
            <input type="text" placeholder="Ссылка на изображение" value={image} onChange={(e) => setImage(e.target.value)} className={styles.Input} />
            <button onClick={handleUpdateUser} className={styles.Button}>Сохранить изменения</button>
        </div>
    );
};

EditUser.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    updateUser: PropTypes.func.isRequired,
};

export default EditUser;