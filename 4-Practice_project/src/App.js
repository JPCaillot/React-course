import { useState } from "react";
import styles from './App.module.css';

import UserInput from "./Components/UserInput";
import EntryList from "./Components/EntryList";

function App() {
  const [completeList, setCompleteList] = useState([]);

  const newEntryHandler = (data) => {
    setCompleteList(prevList => {
      const updatedList = [...prevList];
      updatedList.unshift(data);
      return updatedList;
    });
  };

  return (
    <div className={styles.body}>
      <UserInput onAddEntry={newEntryHandler} />
      <EntryList items={completeList}/>
    </div>
  );
}

export default App;

//[{username: 'João', age: '23'},{username:'Wallison', age: '27'}]
//<EntryList items={completeList} />