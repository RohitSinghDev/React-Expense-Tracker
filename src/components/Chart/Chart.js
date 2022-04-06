import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues); //... is a spread operator to pull out all the values of datapointvalues and make them as stand alone values
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />;
      })}
    </div>
  );
};

export default Chart;
