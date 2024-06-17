import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  //handle side effects and avoids us causing an infinite loop
  //Using promises
  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch(
  //       "https://sterling-react-meetup-default-rtdb.firebaseio.com/meeptups.json"
  //     )
  //       .then((response) => {
  //         return response.json(); //returns an object
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         const meetups = [];
  //         for (const key in data) {
  //           const meetup = {
  //             id: key,
  //             ...data[key],
  //           };
  //           meetups.push(meetup);
  //         }
  //         setIsLoading(false);
  //         console.log(meetups);
  //         setLoadedMeetups(meetups);
  //       });
  //   }, []);

  //   if (isLoading) {
  //     return (
  //       <section>
  //         <p>Loading...</p>
  //       </section>
  //     );
  //   }

  //   Using Async
  useEffect(() => {
    const fetchMeetups = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://sterling-react-meetup-default-rtdb.firebaseio.com/meeptups.json"
        );
        const data = await response.json();
        console.log(data);

        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        console.log(meetups);
        setLoadedMeetups(meetups);
      } catch (error) {
        console.error("Error fetching meetups:", error);
        setIsLoading(false);
      }
    };

    fetchMeetups();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
