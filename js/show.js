const get = document.querySelector("#get");

const url = "https://reqres.in/api/users?page=1";

get.addEventListener("click", async () => {
  const response = await fetch(url);
  const users = await response.json();
  // console.log(users);
  display(users.data);
});

function display(data) {
  
  const container = document.querySelector(".container");

  for (let user of data) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card m-5" style="width: 18rem;">
        <img class="card-img-top" src="${user.avatar}" alt="a user image">
        <div class="card-body">
          <h5 class="card-title">${user.first_name}</h5>
          <p class="card-text">${user.first_name} ${user.last_name} <br>
          ${user.email}</p>
        </div>
      </div>
`;

    container.append(div);
  }
}
