// let configObj = {
//   method: "POST",
//   header: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
//   body: JSON.stringify(formData),
// };

// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object) {
//         console.log(object);
//     })
//     .catch(function(error) {
//         alert("Baddd tings")
//         console.log(error.message)
//     });

function submitData(personName, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  })
    .then((response) => response.json())
    .then((personObj) => document.body.append(personObj.id))
    .catch(function (error) {
      alert("Oh no");
      document.body.append(error.message);
    });
}

// let configObj(personName, email) {
//   return {
//     method: "POST",
//     header: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       name: personName,
//       email: email,
//     }),
//   };
// }
