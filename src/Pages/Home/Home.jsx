import React, { useEffect, useState } from "react";
import Item from "./Item";

const Home = () => {
  const [api, setApi] = useState([]);
  const [url , setUrl] = useState("https://reqres.in/api/users?page=2")
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((info) => {
        setApi(info.data);
      });
  }, [url]);

  return (
    <div className="px-20 text-[35px] mt-[30px] text-green-700">
      <h1 className="text-center">This is Home page</h1>
      <div className="btn w-[100%] flex justify-around my-4">
        <button onClick={()=> setUrl("https://reqres.in/api/users?page=1")} className="p-2 bg-indigo-600 rounded-[10px] text-white">
          Show API 1
        </button>
        <button onClick={()=> setUrl("https://reqres.in/api/users?page=2")} className="p-2 bg-indigo-600 rounded-[10px] text-white">
          Show API 2
        </button>
      </div>

      <div className="card w-[100%] flex justify-evenly flex-wrap">
        {api.map((r) => {
          return (
            <Item
              rasm={r.avatar}
              ism={r.first_name}
              familiya={r.last_name}
              email={r.email}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
