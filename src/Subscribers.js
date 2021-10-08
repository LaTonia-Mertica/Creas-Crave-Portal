import { useEffect, useState, useRef } from "react";

const Subscribers = () => {
  return <div>Subscribers Page</div>;
};

export default Subscribers;

// // let Subscribers;
// const Subscribers = () => {
//   const [subscribers, setSubscribers] = useState(null);
//   const table = useRef(null);

//   useEffect(() => {
//     async () => {
//       const response = await fetch(`http://localhost:3001/subscribers`, {
//         method: "POST",
//         headers: {
//           emailAddress: localStorage.emailAddress,
//         },
//       });

//       const addSubscriber = async (event) => {
//         event.preventDefault();
//         // const firstName = event.target.firstName.value;
//         // const lastName = event.target.lastName.value;
//         // const address1 = event.target.address1.value;
//         // const address2 = event.target.address2.value;
//         // const city = event.target.city.value;
//         // const state = event.target.state.value;
//         // const zipCode = event.target.zipCode.value;
//         // const phoneNumber = event.target.phoneNumber.value;

//         let formData = {};

//         for (const formField of event.target) {
//           // console.log(formField.id, formField.value);
//           if (formField.id) {
//             formData[formField.id] = formField.value;
//           }
//         }

//         const data = await response.json();

//         if (data.error) {
//           alert(data.error);
//         } else {
//           setSubscribers(data.subscribers);
//           table.current.scrollIntoView();

//           for (const formField of event.target) {
//             formField.value = "";
//           }
//         }
//       };
//     };

//     return <div></div>;
//   });
//   export default Subscribers;
// };
