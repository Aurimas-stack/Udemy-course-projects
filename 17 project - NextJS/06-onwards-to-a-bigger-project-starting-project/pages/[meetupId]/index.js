import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import {Fragment} from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail 
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
    />
    </Fragment>
  );
};

export async function getStaticPaths() {
  //ONLY FOR getStaticProps and dynamic pages
  const client = await MongoClient.connect("mongodb+srv://Aurimas-stack:Zedelis123@cluster0.jr9wm.mongodb.net/NextJSMeetups?retryWrites=true&w=majority");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meets = await meetupsCollection.find({}, {_id: 1}).toArray();

  client.close();

  return {
    fallback: false,
    paths: meets.map(meetup => ({params: {meetupId: meetup._id.toString()}}))
  }
}

export async function getStaticProps(context) {
  //fetch data
  const meetId = context.params.meetupId;

  const client = await MongoClient.connect("mongodb+srv://Aurimas-stack:Zedelis123@cluster0.jr9wm.mongodb.net/NextJSMeetups?retryWrites=true&w=majority");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectMeet = await meetupsCollection.findOne({_id: ObjectId(meetId)});

  return {
    props: {
      meetupData: {
        id: selectMeet._id.toString(),
        title: selectMeet.title,
        address: selectMeet.address,
        image: selectMeet.image,
        description: selectMeet.description
      }
    }
  }
};

export default MeetupDetails;
