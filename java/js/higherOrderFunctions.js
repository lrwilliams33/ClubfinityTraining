
// higher order function does either
// 1) takes a function as a parameter
// 2) or it returns a function as the result

// import data (pretend)
import {posts} from "./posts.js";

// forEach() alternative to for loop
posts.forEach(post => {
  console.log(post);
});

// filter (returns array of the objects with user.Id === 1)
const filterPosts = posts.filter(post => {
  return post.userId === 1;
});
console.log(filterPosts);

// map (returns an array with just the values of the id * 10)
const mappedPosts = filterPosts.map(post => {
  return post.id * 10;
});
console.log(mappedPosts);

// reduce (returns only a number of the total of the ids)
const reducedPostValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reducedPostValue);