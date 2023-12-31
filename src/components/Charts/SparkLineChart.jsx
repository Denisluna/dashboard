import { SparklineComponent, Inject, SparklineTooltip, TrackLineSettings } from "@syncfusion/ej2-react-charts"
import React from "react"

const SparkLineChart = ({ id, height, width, currentColor, color, type, data }) => {
  return (
    <div>
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
        tooltipSettings={{
          visible: true,
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true
          }
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </div>
  )
}

export default SparkLineChart