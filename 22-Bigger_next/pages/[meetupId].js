import { MongoClient, ObjectId } from "mongodb";

import Head from "next/head";
import { Fragment } from "react";
import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData.description}
        />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.wi8lhio.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  );
  //returns a promise
  const db = client.db(); //gets hold of the database

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
  //first argument = what, second = which fields
  //_id: 1 = only the id, nothing else

  client.close();

  return {
    fallback: 'blocking', //doesn't show anything till it's loaded or true that would return an empty page right away to get the correct one once it's loaded
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    // [
    //   {
    //     params: {
    //     meetupId: 'm1',
    //     },
    //   },
    //   {
    //     params: {
    //     meetupId: 'm2',
    //     },
    //   },
    // ]
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.wi8lhio.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  );
  //returns a promise
  const db = client.db(); //gets hold of the database

  const meetupCollection = db.collection("meetups");

  const selectedMeetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  //first argument = what, second = which fields
  //_id: 1 = only the id, nothing else

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
      // {
      //   image:
      //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg",
      //   id: meetupId,
      //   title: "First Meetup",
      //   address: "Some Street 5, Some City",
      //   description: "This is a first meetup",
      // },
    },
  };
}

export default MeetupDetails;
