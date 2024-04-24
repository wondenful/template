function getVirtualData(year) {
  const startDate = new Date(year + "-01-01");
  const endDate = new Date(parseInt(year) + 1 + "-01-01");
  const dayTime = 3600 * 24 * 1000;
  const data = [];
  for (
    let time = startDate.getTime();
    time < endDate.getTime();
    time += dayTime
  ) {
    const date = new Date(time);
    data.push([
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
      Math.floor(Math.random() * 2000),
    ]);
  }
  return data;
}

var riEchart;
(function () {
  if ($(".ri")[0]) {
    option = {
      tooltip: {},
      visualMap: {
        min: 0,
        max: 2000,
        orient: "horizontal",
        left: 60,
        top: 30,
        inRange: {
          color: ["#fff", "#68d8ff", "blue"],
        },
      },
      calendar: {
        top: 120,
        left: 70,
        right: 50,
        cellSize: 40,
        range: "2024-03",
        orient: "vertical",
        itemStyle: {
          borderWidth: 1,
          borderColor: "#68d8ff",
          opacity: 0.4,
        },
        splitLine: {
          lineStyle: {
            color: "#68d8ff",
          },
        },
        orient: "vertical",
        dayLabel: {
          color: "#68d8ff",
          nameMap: ["日", "一", "二", "三", "四", "五", "六"],
        },
        yearLabel: {
          margin: 60,
          color: "#68d8ff",
        },
        monthLabel: {
          nameMap: "cn",
          margin: 30,
          color: "#68d8ff",
        },
      },
      series: {
        type: "effectScatter",
        symbolSize: function (val) {
          return val[1] / 100;
        },
        coordinateSystem: "calendar",
        data: getVirtualData("2024"),
      },
    };

    // var chartDom = document.getElementById("main");
    // var myChart = echarts.init(chartDom);
    riEchart = echarts.init($(".ri")[0]);
    riEchart.setOption(option);
  }
})();
