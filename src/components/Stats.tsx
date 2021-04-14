import React from "react";
interface StatBox {
  title: string;
  dataOne: string;
  dataTwo: string;
}
interface Props {
  title: string;
  statBox: StatBox[];
}

export const Stats = (props: Props) => {
  const statBoxes = props.statBox.map((stat: StatBox) => {
    return (
      <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
        <dt className="text-sm font-medium text-gray-500 truncate">
          {stat.title}
        </dt>
        <dd className="mt-1 text-3xl font-semibold text-gray-900">
          Start Lat: {stat.dataOne}
        </dd>
        <dd className="mt-1 text-3xl font-semibold text-gray-900">
          Start Lng: {stat.dataTwo}
        </dd>
      </div>
    );
  });

  return (
    <div className="ml-6 mr-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        {props.title}
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {statBoxes}
        {statBoxes}
        {statBoxes}
      </dl>
    </div>
  );
};
