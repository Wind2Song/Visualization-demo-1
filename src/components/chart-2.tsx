import * as echarts from "echarts";
import React from "react";
import { useEffect, useRef } from "react";
import '../pages/home';
import { baseEchartOptions } from "../shared/base-echart-options";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart2 = () =>{
  const divRef = useRef(null);
  useEffect(()=>{
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  },[])
  return (
    <div className="bordered 破获排名">
        <h2>案件破获排名</h2>
        <div ref={divRef} className="chart">
          {/* <div className="legend">
            <span className="first">破案排名1</span>
            <span className="second">破案排名2</span>
          </div> */}
        </div>
    </div>
  )
}