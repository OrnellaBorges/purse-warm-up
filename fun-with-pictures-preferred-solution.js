// Preferred solution :
var urls = [
  { url: "https://jsonplaceholder.typicode.com/photos/1" },
  { url: "https://jsonplaceholder.typicode.com/photos/2" },
  { url: "https://jsonplaceholder.typicode.com/photos/3" },
];

function createListDom(data) {
  const ul = document.createElement("ul");

  data.forEach((element) => {
    // bouble construction du li
    const li = document.createElement("li");
    const img = document.createElement("img");

    img.setAttribute("src", element.thumbnailUrl);
    li.appendChild(img);
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

async function fetchPictures(urls) {
  try {
    // promise.all est une boucle de promise
    const data = await Promise.all(
      urls.map((element) => fetch(element.url).then((r) => r.json()))
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function main() {
  try {
    const data = await fetchPictures(urls);
    createListDom(data);
  } catch (error) {
    throw new Error(error);
  }
}

main();
