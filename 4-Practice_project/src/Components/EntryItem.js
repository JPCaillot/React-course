import styles from './EntryItem.module.css';

const EntryItem = (props) => {
    return <li className={styles.item}>
        {props.username} ({props.age} Years);
    </li>
};

export default EntryItem;