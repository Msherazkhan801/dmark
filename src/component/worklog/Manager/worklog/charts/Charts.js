import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const Charts = (props) => {
  return (
    <div>
      <Doughnut
        data={{
          labels: ["WordCount Done",  "Total wordCount   "],
          datasets: [
            {
              data: [
                "1500" , "300" 
              ],
              backgroundColor: ["#009933", " #ff1a1a"],
              borderColor: ["#76B2E7",  "#cf1322"],
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={500}
        options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default Charts;