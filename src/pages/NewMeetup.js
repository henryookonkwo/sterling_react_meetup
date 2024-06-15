import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const navigate = useNavigate();
  //   const addMeetupHandler = (meetupData) => {
  //     fetch(
  //       "https://sterling-react-meetup-default-rtdb.firebaseio.com/meeptups.json",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(meetupData),
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     ).then(() => {
  //       navigate("/");
  //     });
  //   };
  const addMeetupHandler = async (meetupData) => {
    try {
      const response = await fetch(
        "https://sterling-react-meetup-default-rtdb.firebaseio.com/meeptups.json",
        {
          method: "POST",
          body: JSON.stringify(meetupData),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send meetup data.");
      }

      navigate("/");
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle the error accordingly
    }
  };

  return (
    <section>
      <h1>New Meetups page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
