import React, { memo } from "react";
import ReactECharts from "echarts-for-react";

export type Props = {
  max?: number;
  value?: number;
};

const CommonChart: React.FC<Props> = (props) => {
  const { max, value } = props;
  const option = {
    angleAxis: {
      show: false,

      max: (max * 360) / 270, //-45度到225度，二者偏移值是270度除360度

      type: "value",

      startAngle: 225, //极坐标初始角度

      splitLine: {
        show: false,
      },
    },

    barMaxWidth: 10, //圆环宽度

    radiusAxis: {
      show: false,

      type: "category",
    },

    //圆环位置和大小

    polar: {
      center: ["50%", "50%"],

      radius: "180%",
    },

    series: [
      {
        type: "bar",

        barWidth: 10,

        data: [
          {
            //上层圆环，显示数据

            value: value < max ? value : max,

            itemStyle: {
              // borderWidth: 12,
              color: value < max ? "#00D1D1" : "#FF2200",
            },
          },
        ],

        barGap: "-100%", //柱间距离,上下两层圆环重合

        coordinateSystem: "polar",

        roundCap: true, //顶端圆角

        z: 3, //圆环层级，同zindex
      },

      {
        //下层圆环，显示最大值

        type: "bar",

        barWidth: 4,

        data: [
          {
            value: max,
            itemStyle: {
              borderColor: "#ddd",
              color: "#ddd",
            },
          },
        ],

        barGap: "-70%",

        coordinateSystem: "polar",

        roundCap: true,

        z: 1,
      },
      {
        type: "gauge",

        startAngle: 225, //起始角度，同极坐标

        endAngle: -45, //终止角度，同极坐标

        axisLine: {
          show: false,
        },

        splitLine: {
          show: false,
        },

        axisTick: {
          show: false,
        },

        axisLabel: {
          show: false,
        },

        splitLabel: {
          show: false,
        },

        pointer: {
          // 分隔线
          show: false, //是否显示指针
          shadowColor: "auto", //默认透明

          shadowBlur: 5,

          length: "50%",

          width: "2",
        },

        itemStyle: {
          color: "#1598FF",

          borderColor: "#1598FF",

          borderWidth: 3,
        },

        detail: {
          formatter: function (params) {
            return value?.toFixed(0);
          },

          color: "#fff",

          fontSize: 60,

          offsetCenter: [0, -5],
        },

        title: {
          show: false,
        },

        data: [
          {
            value: value < max ? value : max,
          },
        ],
      },
    ],
  };

  return <ReactECharts style={{ height: "200px" }} option={option} />;
};

CommonChart.defaultProps = {
  value: 0,
  max: 1,
} as Props;

export default memo(CommonChart);
