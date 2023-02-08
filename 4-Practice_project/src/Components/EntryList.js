import EntryItem from "./EntryItem";
import Card from './UI/Card';

import styles from './EntryList.module.css'; //fix - bullets

const EntryList = (props) => {


    return <Card>
        {props.items.length > 0 && 
            <ul className={styles.itemList}>
                {props.items?.map(entry => ( // ? = asking if the array exists first
                    <EntryItem 
                        username={entry.username}
                        age={entry.age}
                        key={entry.nº}
                    />)
                )}
            </ul>
        }
        {props.items.length === 0 &&
            <p className={styles.itemList}>No users listed! Please, add one.</p>
        }
    </Card>
};

export default EntryList;