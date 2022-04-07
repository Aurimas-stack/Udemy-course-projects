import { useState, useEffect } from "react";

import MeetupList from "../components/Meetups/MeetupList";


const AllMeetupsPage = () => {
  const [meetupData, setMeetupData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMeetups = async () => {
      setLoading(true);
      const response = await fetch(
        "https://react-summary-b0e5a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
      );
      const data = await response.json();

      const loadedData = [];

      for (const key in data) {
        loadedData.push({
          id: key,
          ...data[key],
        });
      };

      setMeetupData(loadedData);
      setLoading(false);
    };

    fetchMeetups();

  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetupData} />
    </section>
  );
};

export default AllMeetupsPage;
