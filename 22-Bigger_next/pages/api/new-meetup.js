import { MongoClient } from "mongodb";

// /api/new-meetup
// only POST triggers it

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.wi8lhio.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
    );
    //returns a promise
    const db = client.db(); //gets hold of the database

    const meetupCollection = db.collection("meetups");
    //collections = 'tables', documents = 'entries'
    const result = await meetupCollection.insertOne(data); //an object

    console.log(result);
    //we can wrap all of this in a try/catch for error handling

    client.close(); //close the connection

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
