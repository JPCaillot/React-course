import { Link } from "react-router-dom";

const NewEventPage = () => {
    return (<div>
        <h1>New Event Page</h1>
        <button><Link to='..' relative='path'>Back</Link></button>
    </div>)
};

export default NewEventPage;