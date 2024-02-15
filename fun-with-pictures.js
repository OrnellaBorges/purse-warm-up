var urls = [
  { url: "https://jsonplaceholder.typicode.com/photos/1" },
  { url: "https://jsonplaceholder.typicode.com/photos/2" },
  { url: "https://jsonplaceholder.typicode.com/photos/3" },
];

var photos = [];

// To fix the problem we must change the comparison operator.
for (i = 0; i < urls.length; i++) {
  response = fetch(urls[i].url);
  photos[i] = response;
}

console.log(photos);

// 1. What will be printed?
// It will print can't read something undefined.url, because the comparision operator allow that "i
// can be "3", so urls[3] doesn't exist.

// 2. Fix the code
// See above the fixed code.

// 3. Write your preferred solution
// You can see my preferred solution on the file : fun-with-pictures-preferred-solution.js
