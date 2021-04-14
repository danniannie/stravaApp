import React from "react";
import { Segment } from "../api";
import { useAuthenticate } from "src/hooks/useAuthenticate";
import { useSegments } from "src/hooks/useSegments";
const queryString = require("query-string");

const Dashboard = (props: any) => {
  const code = queryString.parse(props.location.search).code;
  console.log(code);
  const { error, data } = useAuthenticate(code);
  const storedCode = localStorage.getItem("code");
  if (storedCode === null || storedCode === "") {
    localStorage.setItem("code", data?.access_token || "");
  }
  console.log(storedCode);
  const { segmentError, segmentData } = useSegments(storedCode);

  return (
    <div>
      <p>Hello friend</p>
      <ul>
        {segmentData &&
          segmentData.map((segment: Segment) => (
            <div key={segment.id}>
              <p>Name: {segment.name}</p>
              <p>Start Lat: {segment.start_latlng[0]}</p>
              <p>Start Long: {segment.start_latlng[1]}</p>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Dashboard;
