const get = document.querySelector("#get");
const post = document.querySelector("#post");

const url = "https://reqres.in/api/users";

// get.addEventListener("click", () => {

//   fetch(url)
//     .then(response => response.json())
//     .then(users => {
//       console.log(users);
//       console.log(users.page);
//       console.log(users.data[0].email);
//     })
//     .catch((error) => console.error("Error: " + error.message));
// });

get.addEventListener("click", async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
});


post.onclick = () => {

  const payload = {
    name: "morpheus",
    job: "leader",
  };

  fetch(url, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(payload),
  })
    .then(response => response.json())
    .then(resp => {
      console.log(resp);
    })
    .catch((error) => console.error("Error: " + error.message));
};

