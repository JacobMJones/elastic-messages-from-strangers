import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStateValue } from "../../../State/StateProvider";
import {ResponsivePie}  from '@nivo/pie'


const data =
[
    {
      "id": "rust",
      "label": "rust",
      "value": 539,
      "color": "hsl(133, 70%, 50%)"
    },
    {
      "id": "lisp",
      "label": "lisp",
      "value": 182,
      "color": "hsl(51, 70%, 50%)"
    },
    {
      "id": "python",
      "label": "python",
      "value": 599,
      "color": "hsl(38, 70%, 50%)"
    },
    {
      "id": "make",
      "label": "make",
      "value": 228,
      "color": "hsl(327, 70%, 50%)"
    },
    {
      "id": "css",
      "label": "css",
      "value": 213,
      "color": "hsl(93, 70%, 50%)"
    }
  ]

const NivoPieChart = props => {
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


  const [{ accounts }, accountsDispatch] = useStateValue();
  const [{ currentRecord }, currentRecordDispatch] = useStateValue();
console.log(data)
  return (
    <div style={{height:600}}>ff <ResponsivePie
    data={accounts}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    colors={{ scheme: 'nivo' }}
    borderWidth={3}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
    radialLabelsSkipAngle={10}
    radialLabelsTextXOffset={6}
    radialLabelsTextColor="#333333"
    radialLabelsLinkOffset={0}
    radialLabelsLinkDiagonalLength={16}
    radialLabelsLinkHorizontalLength={24}
    radialLabelsLinkStrokeWidth={1}
    radialLabelsLinkColor={{ from: 'color' }}
    slicesLabelsSkipAngle={10}
    slicesLabelsTextColor="#333333"
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    // defs={[
    //     {
    //         id: 'dots',
    //         type: 'patternDots',
    //         background: 'inherit',
    //         color: 'rgba(255, 255, 255, 0.3)',
    //         size: 4,
    //         padding: 1,
    //         stagger: true
    //     },
    //     {
    //         id: 'lines',
    //         type: 'patternLines',
    //         background: 'inherit',
    //         color: 'rgba(255, 255, 255, 0.3)',
    //         rotation: -45,
    //         lineWidth: 6,
    //         spacing: 10
    //     }
    // ]}
    // fill={[
    //     {
    //         match: {
    //             id: 'ruby'
    //         },
    //         id: 'dots'
    //     },
    //     {
    //         match: {
    //             id: 'c'
    //         },
    //         id: 'dots'
    //     },
    //     {
    //         match: {
    //             id: 'go'
    //         },
    //         id: 'dots'
    //     },
    //     {
    //         match: {
    //             id: 'python'
    //         },
    //         id: 'dots'
    //     },
    //     {
    //         match: {
    //             id: 'scala'
    //         },
    //         id: 'lines'
    //     },
    //     {
    //         match: {
    //             id: 'lisp'
    //         },
    //         id: 'lines'
    //     },
    //     {
    //         match: {
    //             id: 'elixir'
    //         },
    //         id: 'lines'
    //     },
    //     {
    //         match: {
    //             id: 'javascript'
    //         },
    //         id: 'lines'
    //     }
    // ]}
    legends={[
        {
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#000'
                    }
                }
            ]
        }
    ]}
/>aa</div>
  );
};
export default NivoPieChart;

