// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import EditEventPage from "./pages/EditEventPage";
import ErrorPage from "./pages/Error";
import EventRoot from "./pages/EventRoot";
import EventsDetailPage from "./pages/EventsDetailPage";
import EventsPage, {loader as eventsLoader} from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import NewEventPage from "./pages/NewEventPage";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            path: "",
            element: <EventsPage />,
            loader: eventsLoader,
            // loader: async () => { // starts this function when we navigate to this path
            //   const response = await fetch("http://localhost:8080/events");

            //   if (!response.ok) {
            //     //...
            //   } else {
            //     const resData = await response.json();
            //     return resData.events; //react router will detect the promise and automatically give the resolved data
            //   }
            // },
          },
          { path: ":someId", element: <EventsDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":someId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;