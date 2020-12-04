/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";
console.log(axios);
const result = axios.get("https://api.github.com/users/80884lane");
console.log(result);
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
axios
  .get("https://api.github.com/users/80884lane")
  .then((futureData) => {
    console.log("Step 1, future data", futureData);
})
  .catch((err) => {
    console.log(err);
  });
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "https://api.github.com/users/tetondan",
  "https://api.github.com/users/dustinmyers",
  "https://api.github.com/users/justsml",
  "https://api.github.com/users/luishrd",
  "https://api.github.com/users/bigknel",

];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function articleMaker(articles) {
  debugger;
  const article = document.createElement('div');
  const title = document.createElement('h2');
  const dates = document.createElement('p');
  const expand = document.createElement('span');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');

  title.textContent = articles.title;
  dates.textContent = articles.date;
  expand.textContent = '+';
  p1.textContent = articles.firstParagraph;
  p2.textContent = articles.secondParagraph;
  p3.textContent = articles.thirdParagraph;
  
  
  article.classList.add('article');
  dates.classList.add('date');
  expand.classList.add('expandButton');

  article.appendChild(title);
  article.appendChild(dates);
  article.appendChild(p1);
  article.appendChild(p2);
  article.appendChild(p3);
  article.appendChild(expand);

  article.addEventListener("click", (event) => {
  article.classList.toggle("expand");
  });
  return article;

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknel
*/
