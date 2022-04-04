import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>NextJS Meetups</title>
        <meta name="description" content="NextJS meetups test site"/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

/*export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;


    //fetch data from API
    return {
        props: {
            meetups: meet
        }
    };
}; 
*/

//serverside - changes everytime per request (if you need context obj or data changes a lot (every sec for example)), getStatic is faster

export async function getStaticProps() {
  // fetch data from API
  // always return object
  const client = await MongoClient.connect(
    "mongodb+srv://Aurimas-stack:Zedelis123@cluster0.jr9wm.mongodb.net/NextJSMeetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meets = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      //has to be named props
      meetups: meets.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
