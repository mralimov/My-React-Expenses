import ChartBar from './ChartBar';
import './Chart.css';
const Chart = props => {
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          value={dataPoint.value}
          key={dataPoint.label}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
