import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStateValue } from "../../../State/StateProvider";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts";
const RADIAN = Math.PI / 180;
const COLORS = [
  "#0022FE",
  "#02C29F",
  "#F2B228",
  "#F28222",
  "#0a88FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "black",
  "green",
  "red",
  "purple",
  "pink",
  "blue",
  "sienna",
  "lightyellow",
  "lightgreen",
  "#aaaaFE",
  "teal",
  "brown"
];

const renderCustomizedLabel = accounts => ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN) * 2.5;
  const y = cy + radius * Math.sin(-midAngle * RADIAN) * 2.5;

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {accounts[index].firstname}
    </text>
  );
};
const BasicPieChart = props => {
  const [state, setValues] = useState({
    focusedSlice: null,
    animateChart: true
  });

  const updateState = (name, value) => {
    setValues({
      ...state,
      [name]: value
    });
  };

  // useEffect(() => {
  //   console.log("mount");
  // }, []);

  const [{ accounts }, accountsDispatch] = useStateValue();
  const [{ currentRecord }, currentRecordDispatch] = useStateValue();
  //const [focusedSlice, setFocusedSlice] = useState(null);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={800} height={800} isAnimationActive={false}>
        <Pie
          onAnimationEnd={() => {state.animateChart && updateState("animateChart", false)}}
          isAnimationActive={state.animateChart}
          animationDuration={600}
          data={props.accounts}
          labelLine={true}
          label={renderCustomizedLabel(accounts)}
          outerRadius={160}
          fill="#8884d8"
          dataKey="balance"
          onClick={e => {
            console.log("pie clicked", e);
            updateState("focusedSlice", e.name);
          }}
        >
          {props.accounts.map((entry, index) => {
            if (state.focusedSlice === null) {
              return <Cell key={`cell-${index}`} fill={COLORS[index]} />;
            } else {
              if (state.focusedSlice === index) {
                return <Cell key={`cell-${index}`} fill={"pink"} x={200} />;
              } else {
                return <Cell key={`cell-${index}`} fill={"lightyellow"} />;
              }
            }
          })}
        </Pie>

        <Tooltip
          isAnimationActive={false}
          content={
            <CustomTooltip
              currentRecordDispatch={currentRecordDispatch}
              currentRecord={currentRecord}
            />
          }
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
export default BasicPieChart;

const CustomTooltip = ({
  active,
  payload,
  label,
  currentRecordDispatch,
  currentRecord
}) => {
  if (active) {
    if (currentRecord !== payload[0].payload.index) {
      currentRecordDispatch({
        type: "changeCurrentRecord",
        newCurrentRecord: payload[0].payload.index
      });
    }

    return (
      <div className="custom-tooltip" style={{ background: "whitesmoke" }}>
        <p className="label">{`Balance : $${payload[0].payload.balance}`}</p>
      </div>
    );
  }

  return null;
};
