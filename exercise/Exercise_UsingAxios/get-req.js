import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    const results = response.data;
    for (const result of results) {
      console.log(`${result.id} ${result.title}`);
    }
  })
  .catch((error) => {
    console.error(error);
  });
