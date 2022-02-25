import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const Charts = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: ["WordCount Done",  "Total wordCount   "],
          datasets: [
            {
              data: [
                "1300" , "1500" 
              ],
              backgroundColor: ["#76B2E7", "#cf1322"],
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