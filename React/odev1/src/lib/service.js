import axios from "axios";

export default async function getData(number) {
  await axios("https://jsonplaceholder.typicode.com/users/" + number).then(
    (res) => console.log(res.data)
  );
}
