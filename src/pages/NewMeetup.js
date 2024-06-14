import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = (meetupData) => {
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
