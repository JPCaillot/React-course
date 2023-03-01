// import { useEffect, useState } from 'react';
import { useLoaderData, json } from "react-router-dom"; //access to closest loader data

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData(); // pay attention if you're extracting the whole object or the key you want

  if (data.isError) {
    // return <p>{data.message}</p>
  }
  const events = data.events;

  return <EventsList events={events} />;
}

export async function loader() {
  //THIS IS EXECUTED IN THE BROWSER = COMPATIBLE WITH APIs, BUT NOT REACT HOOKS - NOT A COMPONENT
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch events.'};

    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // }); //router detects the closest error element if its thrown in a loader

    throw json({ message: "Could not fetch events." }, { status: 500, }); //converts data automatically
  } else {
    //normal way we always did:
    // const resData = await response.json();
    // return resData.events; //react router will detect the promise and automatically give the resolved data

    //new alternative way:
    // const res = new Response('any data', {status: 201}); // router will detect the fist argument in the response and return it automatically if res is returned
    // return res;

    //showing that this could be done because router supports responses, and so this is accepted:
    return response;
  }
}

//STANDARD FETCH
// function EventsPage() {
// const [isLoading, setIsLoading] = useState(false);
// const [fetchedEvents, setFetchedEvents] = useState();
// const [error, setError] = useState();

// useEffect(() => {
//   async function fetchEvents() {
//     setIsLoading(true);
// const response = await fetch('http://localhost:8080/events');

// if (!response.ok) {
//   setError('Fetching events failed.');
// } else {
//   const resData = await response.json();
//   setFetchedEvents(resData.events);
// }
//     setIsLoading(false);
//   }

//   fetchEvents();
// }, []);
//   return (
//     <>
//       <div style={{ textAlign: 'center' }}>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//       </div> */}
//       {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
//     </>
//   );
// }

export default EventsPage;
