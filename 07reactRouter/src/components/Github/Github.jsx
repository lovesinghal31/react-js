import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/lovesinghal31")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);

  const data = useLoaderData()

  return (
    <>
      <div className="flex text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        <img className="w-3xs" src={data.avatar_url} alt="profile_pic" />
        <div>
          <div className="text-center">{data.name}</div>
          <p className="text-sm">{data.bio}</p>
          <div>Followers: {data.followers}</div>
          <div>Following: {data.following}</div>
        </div>
      </div>
    </>
  );
}

export default Github;


export const githubLoaderInfo = async () => {
    const response = await fetch('https://api.github.com/users/lovesinghal31')
    return response.json()
}