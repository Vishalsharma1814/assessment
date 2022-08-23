import ReactEcharts from "echarts-for-react";
import { useEffect, useState } from "react";
import data from "../data";

const ScatterPlot = () => {
  const [arr, setArr] = useState([[]]);

  const getData = async () => {
    var dataa: any[] = [];
    data.forEach((element: any) => {
      dataa.push([element.hue, element.color_intensity]);
    });
    setArr(dataa);
  };

  useEffect(() => {
    getData();
  }, []);
  var option;

  option = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 15,
        data: arr,
        type: "scatter",
      },
    ],
  };

  return (
    <div className="container grid-container">
      <h1 className="item1">Scatter Plot</h1>
      <h1 className="item2">Hue</h1>
      <ReactEcharts className="item3" option={option} />
      <h1 className="item5" style={{ margin: 0, padding: 0 }}>
        Color Intensity
      </h1>
    </div>
  );
};

export default ScatterPlot;
