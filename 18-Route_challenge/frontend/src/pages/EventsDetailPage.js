import { useParams, Link } from "react-router-dom";

const EventsDetailPage = () => {
  const params = useParams();

  return (
    <div>
      <h1>Events Detail Page</h1>
      <p>{params.someId}</p>
      <Link to="edit">Edit Event</Link>
      <button><Link to='..' relative='path'>Back</Link></button>
    </div>
  );
};

export default EventsDetailPage;
