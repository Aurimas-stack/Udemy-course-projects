import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/Meetups/NewMeetupForm";

const NewMeetupsPage = () => {
  const navigate = useNavigate();

  const addMeetupHandler = async (meetupData) => {
    const response = await fetch(
      "https://react-summary-b0e5a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if(response.ok) {
        navigate("/", {replace: true})
    }
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupsPage;
