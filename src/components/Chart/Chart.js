import ChartBar from './ChartBar';
import './Chart.css';
const Chart = props => {
  const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
  const maximumValue = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          value={dataPoint.value}
          key={dataPoint.label}
          maxValue={maximumValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
