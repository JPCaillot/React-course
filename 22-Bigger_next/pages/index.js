import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some adress 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some adress 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;
    //fetch data from an API
    //this will run on the server,
    //so you can even use credentials or things
    //you don't want exposed
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}

// export async function getStaticProps() { 
//     //reserved name, runs before the actual page
//     //next will wait for the promises here to be resolved
//     //this code will run only during the build process
//     //not on the server or the visitor's machines
//     //examples:
//     //fetch data from an API
//     //read files from a file system
//     return { //you always need to return an object
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 10
//     };
// }

export default HomePage;
