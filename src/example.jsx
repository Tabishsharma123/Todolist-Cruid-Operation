import React, { useState } from "react";

const Example = () => {
  const [date, setdate] = useState([]);
  // this function is used for asyn await to display data in console
  async function gett() {
    const url = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await url.json();
    console.log(data);
    setdate(data);
  }
  gett();
  // this method is used for promise to display data in console
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setdate(data);
    });
  return (
    <>
      {/* this is used to display object in webpage */}
      <pre>{JSON.stringify(date, null, 2)}</pre>
      {/* this method is used to display title id in webpage fot i have used map method */}
      <ul>
        {date.map((data) => {
          return <li key={data.id}>{data.title}</li>;
        })}
      </ul>
    </>
  );
};
export default Example;
