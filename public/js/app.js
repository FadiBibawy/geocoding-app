console.log("client javascript is successfully loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const forecast = document.querySelector(".forecast");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submited");
  const location = search.value;

  const message1 = document.querySelectorAll(".m1");
  if (message1) {
    message1.forEach((message) => message.remove());
  }
  search.value = "";

  forecast.insertAdjacentHTML("beforeend", `<p class="m1">${location}</p>`);

  fetch(`http://localhost:3005/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        console.log(data);
        forecast.insertAdjacentHTML(
          "beforeend",
          `<p class="m1">${JSON.stringify(data)}</p>`
        );
      });
    }
  );
});
