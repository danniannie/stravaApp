import React from "react";
import { Segment } from "../api";
import { useAuthenticate } from "src/hooks/useAuthenticate";
import { useSegments } from "src/hooks/useSegments";
import { Stats } from "./Stats";
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
  const segmentDataArray = segmentData?.map((segment: Segment) => ({
    title: segment.name,
    dataOne: segment.start_latlng[0],
    dataTwo: segment.start_latlng[1],
  }));
  return (
    <div>
      <Stats title={"Starred Segments"} statBox={segmentDataArray || []} />
    </div>
  );
};

export default Dashboard;
