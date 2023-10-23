// fetch api requires knowing callbakcs, promises, thenables, and async/await

// use promises promises better than call backs use promises
// 3 states: pending, fulfulled, and rejected
const myPromise = new Promise((resolve, reject) => { // define promise
  const error = false;
  if (!error) {
    resolve("Yes resolved promise");
  } else {
    reject ("reject promise");
  }
});

// use promise with thenables
myPromise.then(value => {
  return value + 1;
})
.then(newValue => {
  console.log(newValue); // returns the string in resolved since error is false
})
.catch(err => {
  console.error(err); // if error is true logs error with message of "reject promise" as seen in function above
});

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function() { // waits 3 seconds (3000) before executing the code in the function
    resolve("myNextPromise resolved")
  }, 3000);
});

myNextPromise.then(value => {
  console.log(value);
});

// since myNextPromise must wait 3 seconds the code continues here and this block executes first
myPromise.then(value => {
  console.log(value);
});



// pending state of promises using fetch api
const users = fetch("www.myWebsite.com") // fetches data from the website

// pending promise bc the api is still getting the data
console.log(users);

// .then requres the code before it to be executed before it is executed itsself
fetch("www.myWebsite.com").then(response => {
  return response.json();
})
.then(data => {
  data.forEach(user => {
    console.log(user);
  })
});

// fetch returns a promise so code after the fetch block could be executed first if the promise has not fulfilled yet

// Async / Await (better than before code)
const myUsers = { // my user object
  userList: []
}

// await
async function myFunc() {
  const response = await fetch("www.myWebsite.com") // wait to get these results from the fetch before executing what is next
  const jsonUserData = await response.json();
  return jsonUserData;
}

const anotherFunc = async () => { // arrow function way to async
  const data = await myFunc(); // waits till this is done to execute rest of block
  myUsers.userList = data;
  console.log(myUsers);
}

anotherFunc();
console.log(myUsers); // empty array because another func not done getting data at this point


// ex
const getAllUserEmails = async () => {
  const response = await fetch("www.myWebsite.com") // wait to get these results from the fetch before executing what is next
  const jsonUserData = await response.json();

  const userEmailArray = jsonUserData.map(user => {
    return user.email; // returns user email areay
  });

  console.log(userEmailArray);
}
getAllUserEmails();
// only instructions within the function wait for await so if i added a console log statement, it would execute before function complete


// more fetch (can accept 2nd parameter) fetch get parameter
const getJoke = async () => {
  const response = await fetch("www.myWebsite.com", {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  }); // wait to get these results from the fetch before executing what is next
  const jsonUserData = await response.json();
  
  console.log(jsonUserData);
}
getJoke();

const jokeObj = {
  id: "00.fjfek",
  joke: "joke text"
}

// more fetch (can accept 2nd parameter) fetch post parameter
const postData = async (jokeObj) => {
  const response = await fetch("www.myWebsite.com/post", {
    method: "POST", // post
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jokeObj)
  }); // wait to get these results from the fetch before executing what is next
  const jsonResponse = await response.json();
  
  console.log(jsonResponse);
}
postData(jokeObj); // returns 


// 1) get data from maybe a form
const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"]
  };
  return requestObj;
}

// 2) build request
const buildRequestURL = (requestData) => {
  return `http://myWebsite.com/jokes/rnadom?firstName=${requestData.firstName}
  &lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

// 3) requests the joke
const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
}

// 4) post the joke to the page
const postJokeToPage = (joke) => {
  console.log(joke);
}

// putting those 4 together ex when click a certain button this executes
const processJokeRequest = async () => { // must use async and await together
  const requestData = getDataFromForm();
  const requestURL = buildRequestURL(requestData);
  await requestJoke(requestURL);
  console.log("finished");
}

processJokeRequest();