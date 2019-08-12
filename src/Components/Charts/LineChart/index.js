import React, { useState } from "react";
import styled from "styled-components";
import { useStateValue } from "../../../State/StateProvider";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer
} from "recharts";

const BasicLineChart = props => {

  const [{ currentRecord }, currentRecordDispatch] = useStateValue();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={300}
        height={600}
        data={props.accounts}
        margin={{
          top: 5,
          right: 3,
          left: 2,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis
          dataKey="account_number"
          label={{
            value: "Account Numbers",
            position: "insideBottomLeft",
            dy: 20
          }}
        />
        <YAxis
          dataKey="balance"
          label={{
            value: "Account Balance",
            position: "insideBottomLeft",
            angle: -90,
            dy: -10
          }}
        />
        <Tooltip
          isAnimationActive={false}
          content={
            <CustomTooltip
              currentRecordDispatch={currentRecordDispatch}
              currentRecord={currentRecord}
            />
          }
        />
        {/* <Legend /> */}
        <Line
          isAnimationActive={false}
          type="monotone"
          dataKey="balance"
          stroke="black"
          activeDot={{ r: 12 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default BasicLineChart;

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
