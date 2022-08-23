import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import data from "../data";

const BarChart = () => {
  const [Alcohol, setAlcohol] = useState([]);
  const [MallicAcid, setMallicAcid] = useState([]);
  const getData = async () => {
    var malArr: any = [];
    let set: any = new Set();
    data.forEach((element) => {
      set.add(element.Alcohol);
    });
    set = Array.from(set);
    setAlcohol(set);

    for (let j = 0; j < set.length; j++) {
      let ar: any = [];
      data.forEach((element: any) => {
        if (element.Alcohol === set[j]) {
          ar.push(element.Mallic_Acid);
        }
      });
      let average = (list: any) =>
        list.reduce((prev: any, curr: any) => prev + curr) / list.length;
      malArr.push(average(ar));
    }
    setMallicAcid(malArr);
  };
  useEffect(() => {
    getData();
  }, []);
  const option = {
    xAxis: {
      type: "category",
      data: Alcohol,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: MallicAcid,
        type: "bar",
      },
    ],
  };
  return (
    <div className="container grid-container">
      <h1 className="item1">Bar Chart</h1>
      <h1 className="item2">Alcohol</h1>
      <ReactEcharts className="item3" option={option} />
      <h1 className="item5" style={{ margin: 0, padding: 0 }}>
        Mallic Acid
      </h1>
    </div>
  );
};

export default BarChart;
