import Chart from "react-apexcharts";

const AbcChart = ({ darkMode }) => {
  const options = {
    chart: {
      type: "donut",
      height: 350,
    },
    labels: ["Desktop", "Tablet", "Mobile"],
    colors: ["#FF5733", "#33FF57", "#3357FF"],
    legend: {
      position: "bottom",
      labels: {
        colors: darkMode ? "#dddddd" : "#000000",
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [20, 50, 40];

  return (
    <div className="py-6 bg-white rounded-lg p-5 flex dark:bg-gray-600 items-center justify-center">
      <Chart
        className="cursor-pointer"
        options={options}
        series={series}
        type="donut"
        height={380}
      />
    </div>
  );
};

export default AbcChart;
