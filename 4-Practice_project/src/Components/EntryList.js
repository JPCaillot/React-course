import EntryItem from "./EntryItem";
import styles from './EntryList.module.css';

const EntryList = (props) => {


    return <ul className={styles.itemList}>
        {props.items?.map(entry => ( // ? = asking if the array exists first
            <EntryItem 
                username={entry.username}
                age={entry.age}
            />)
        )}
    </ul>
};

export default EntryList;

// {props.items.map(items => 
//     <EntryItem 
//         username={items.username}
//         age={items.age}
//     />)}