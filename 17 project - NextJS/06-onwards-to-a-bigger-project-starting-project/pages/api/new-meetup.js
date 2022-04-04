import { MongoClient } from "mongodb";

// /api/meetup - url

const handler = async (req, res) => {
    if(req.method === "POST") {
        const data = req.body;

        const client = await MongoClient.connect("mongodb+srv://Aurimas-stack:Zedelis123@cluster0.jr9wm.mongodb.net/NextJSMeetups?retryWrites=true&w=majority");
        const db = client.db();

        const meetupsCollection = db.collection("meetups");

        const result = await meetupsCollection.insertOne(data);

        console.log(result)

        client.close();

        res.status(201).json({message: "Meetup done!"});
        
    };
};

export default handler;