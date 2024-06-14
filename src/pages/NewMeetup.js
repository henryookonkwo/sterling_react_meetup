import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://sterling-react-meetup-default-rtdb.firebaseio.com/meeptups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    );
    return;
  };
  return (
    <section>
      <h1>New Meetups page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
