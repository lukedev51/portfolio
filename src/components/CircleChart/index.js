import React from "react";
import PropTypes from "prop-types";

const CircleChart = ({ percent }) => {
  return (
    <svg
      viewBox="0 0 36 36"
      className={`circular-chart ${
        percent < 70 ? "orange" : percent < 90 ? "green" : "blue"
      }`}
    >
      <path
        className="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className="circle"
        strokeDasharray={`${percent}, 100`}
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className="percentage">
        {percent}%
      </text>
    </svg>
  );
};

CircleChart.propTypes = {
  percent: PropTypes.number
};

export default CircleChart;
