// import { useRef } from "react";

// import Card from "../ui/Card";
// import classes from "./NewMeetupForm.module.css";

// const NewMeetupForm = (props) => {
//   const titleInputRef = useRef();
//   const imageInputRef = useRef();
//   const addressInputRef = useRef();
//   const descriptionInputRef = useRef();
//   const submitHandler = (e) => {
//     e.preventDefault();

//     const enteredTitle = titleInputRef.current.value;
//     const enteredImage = imageInputRef.current.value;
//     const enteredAddress = addressInputRef.current.value;
//     const enteredDescription = descriptionInputRef.current.value;

//     const meetupData = {
//       title: enteredTitle,
//       image: enteredImage,
//       address: enteredAddress,
//       description: enteredDescription,
//     };

//     props.onAddMeetup(meetupData);
//     // console.log(meetupData);
//   };
//   return (
//     <Card>
//       <form className={classes.form} onSubmit={submitHandler}>
//         <div className={classes.control}>
//           <label htmlFor="title">Meetup Title</label>
//           <input type="text" required id="title" ref={titleInputRef} />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor="image">Meetup Image</label>
//           <input type="url" required id="image" ref={imageInputRef} />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor="address">Meetup Address</label>
//           <input type="text" required id="address" ref={addressInputRef} />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor="description">Meetup Description</label>
//           <textarea
//             id="description"
//             required
//             rows="5"
//             ref={descriptionInputRef}
//           ></textarea>
//         </div>

//         <div className={classes.actions}>
//           <button>Add Meetup</button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default NewMeetupForm;

// using useState instead of useRef
import { useState } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredImage, setEnteredImage] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);

    // Reset the form after submission
    setEnteredTitle("");
    setEnteredImage("");
    setEnteredAddress("");
    setEnteredDescription("");
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            id="title"
            required
            value={enteredTitle}
            onChange={(e) => setEnteredTitle(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            id="image"
            required
            value={enteredImage}
            onChange={(e) => setEnteredImage(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input
            type="text"
            id="address"
            required
            value={enteredAddress}
            onChange={(e) => setEnteredAddress(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            id="description"
            required
            rows="5"
            value={enteredDescription}
            onChange={(e) => setEnteredDescription(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
