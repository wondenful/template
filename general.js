window.onload = function () {
  // mouse scroll
  var a = document.getElementById("step-container");
  var scroll_width = 100; //滚动一下的距离
  if (document.addEventListener) {
    document.addEventListener("DOMMouseScroll", mousewheel_event, false); // FF
  }
  a.onmousewheel = mousewheel_event; // IE/Opera/Chrome
  function mousewheel_event(e) {
    var e = e || window.event,
      v;
    e.wheelDelta ? (v = e.wheelDelta) : (v = e.detail);
    if (v > 3 || -v > 3) v = -v;
    v > 0 ? (a.scrollLeft += scroll_width) : (a.scrollLeft -= scroll_width);

    e.preventDefault(); //阻止浏览器的默认滚动
  }
  initCharts();
};

const data = {
  name: "应用方向",
  children: [
    {
      name: "政府决策支持",
    },
    {
      name: "舆情风险管理",
    },
    {
      name: "市场营销和产品定位",
    },
    {
      name: "媒体监测和评估",
    },
    {
      name: "危机管理和应急响应",
    },
    {
      name: "舆情研究和学术分析",
    },
    {
      name: "选举和政治竞选分析",
    },
    {
      name: "品牌声誉管理",
    },
    {
      name: "其他公共平台数据分析",
    },
  ],
};
const data1 = {
  name: "目标和愿景",
  children: [
    {
      name: "目标",
      children: [
        {
          name: "引入更多数据源",
        },
        {
          name: "深度学习技术应用",
        },
        {
          name: "用户交互体验优化",
        },
      ],
    },
    {
      name: "愿景",
      children: [
        {
          name: "逝世监测与预警系统",
        },
        {
          name: "舆情事件演化分析",
        },
        {
          name: "社交媒体影响力评估",
        },
        {
          name: "舆情预警智能推送",
        },
      ],
    },
  ],
};
const data2 = {
  name: "创新和研发计划",
  children: [
    {
      name: "可视化技术与算法",
    },
    {
      name: "用户体验与界面设计",
    },
    {
      name: "实时监测与预警系统",
    },
    {
      name: "安全与隐私保护",
    },
    {
      name: "合作与应用拓展",
    },
    {
      name: "持续改进与迭代",
    },
  ],
};
function initCharts() {
  var dom = document.getElementsByClassName("step-circle");
  console.log("length of dom ", dom.length);
  // 0
  {
    var myChart = echarts.init(dom[0]);

    options = {
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
      },
      series: [
        {
          type: "tree",
          id: 0,
          name: "tree1",
          data: [data],
          top: "12%",
          left: "25%",
          bottom: "12%",
          right: "45%",
          symbolSize: 7,
          edgeShape: "polyline",
          edgeForkPosition: "63%",
          initialTreeDepth: 3,
          lineStyle: {
            width: 2,
          },
          label: {
            position: "left",
            verticalAlign: "middle",
            align: "right",
            fontWeight: "bold",
            fontSize: 17,
          },
          leaves: {
            label: {
              position: "right",
              verticalAlign: "middle",
              align: "left",
            },
          },
          emphasis: {
            focus: "descendant",
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      ],
    };
    console.log("options=", options);
    myChart.setOption(options);
  }
  // 1
  {
    var myChart = echarts.init(dom[1]);

    options = {
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
      },
      series: [
        {
          type: "tree",
          id: 0,
          name: "tree1",
          data: [data1],
          top: "12%",
          left: "25%",
          bottom: "12%",
          right: "45%",
          symbolSize: 7,
          edgeShape: "polyline",
          edgeForkPosition: "63%",
          initialTreeDepth: 3,
          lineStyle: {
            width: 2,
          },
          label: {
            position: "left",
            verticalAlign: "middle",
            align: "right",
            fontWeight: "bold",
            fontSize: 17,
          },
          leaves: {
            label: {
              position: "right",
              verticalAlign: "middle",
              align: "left",
            },
          },
          emphasis: {
            focus: "descendant",
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      ],
    };
    console.log("options=", options);
    myChart.setOption(options);
  }
  // 2
  {
    var myChart = echarts.init(dom[2]);

    options = {
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
      },
      series: [
        {
          type: "tree",
          id: 0,
          name: "tree1",
          data: [data2],
          top: "12%",
          left: "30%",
          bottom: "12%",
          right: "45%",
          symbolSize: 7,
          edgeShape: "polyline",
          edgeForkPosition: "63%",
          initialTreeDepth: 3,
          lineStyle: {
            width: 2,
          },
          label: {
            position: "left",
            verticalAlign: "middle",
            align: "right",
            fontWeight: "bold",
            fontSize: 17,
          },
          leaves: {
            label: {
              position: "right",
              verticalAlign: "middle",
              align: "left",
            },
          },
          emphasis: {
            focus: "descendant",
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750,
        },
      ],
    };
    console.log("options=", options);
    myChart.setOption(options);
  }
  //3
  {
    var myChart = echarts.init(dom[3]);
    options = {
      series: {
        type: "sankey",
        layout: "none",
        emphasis: {
          focus: "adjacency",
        },
        label: {
          show: true,
          position: "insideTopLeft",
          fontStyle: "normal",
          fontWeight: "12",
        },
        data: [
          {
            name: "可视化分析技术",
            itemStyle: {
              color: "#f06a42",
            },
            label: {
              fontSize: 19,
              fontWeight: "normal",
              color: "#fff",
            },
          },

          {
            name: "自然语言处理（NLP）",
          },
          {
            name: "机器学习（ML）",
          },
          {
            name: "深度学习（Deep Learning）",
          },
          {
            name: "网络爬虫和数据抓取",
          },
          {
            name: "数据挖掘和信息抽取",
          },
          {
            name: "实时数据处理和流处理",
          },
          {
            name: "可视化和数据展示",
          },
          {
            name: "数据存储和管理",
          },
        ],
        links: [
          {
            source: "可视化分析技术",
            target: "自然语言处理（NLP）",
            value: 5,
          },
          {
            source: "可视化分析技术",
            target: "机器学习（ML）",
            value: 5,
          },
          {
            source: "可视化分析技术",
            target: "深度学习（Deep Learning）",
            value: 5,
          },
          {
            source: "可视化分析技术",
            target: "网络爬虫和数据抓取",
            value: 5,
          },
          {
            source: "可视化分析技术",
            target: "数据挖掘和信息抽取",
            value: 5,
          },
          {
            source: "可视化分析技术",
            target: "实时数据处理和流处理",
            value: 5,
          },
          {
            source: "可视化分析技术",
            target: "可视化和数据展示",
            value: 5,
          },
          {
            source: "可视化分析技术",
            target: "数据存储和管理",
            value: 5,
          },
        ],
      },
    };
    console.log("options=", options);
    myChart.setOption(options);
  }
  //4
  {
    var myChart = echarts.init(dom[4]);
    options = {
      series: {
        type: "sankey",
        layout: "none",
        emphasis: {
          focus: "adjacency",
        },
        label: {
          show: true,
          position: "insideTopLeft",
          fontStyle: "normal",
          fontWeight: "12",
        },
        data: [
          {
            name: "市场营销和销售计划",
            itemStyle: {
              color: "#f1911f",
            },
            label: {
              fontSize: 19,
              color: "#fff",
            },
          },
          {
            name: "市场调研与定位",
          },
          {
            name: "品牌建设与宣传推广",
          },
          {
            name: "销售渠道拓展与合作伙伴关系",
          },
          {
            name: "客户关系管理与售后服务",
          },
          {
            name: "市场推广活动与促销策略",
          },
          {
            name: "市场监测与反馈调整",
          },
          {
            name: "持续创新与发展",
          },
        ],
        links: [
          {
            source: "市场营销和销售计划",
            target: "市场调研与定位",
            value: 5,
          },
          {
            source: "市场营销和销售计划",
            target: "品牌建设与宣传推广",
            value: 5,
          },
          {
            source: "市场营销和销售计划",
            target: "销售渠道拓展与合作伙伴关系",
            value: 5,
          },
          {
            source: "市场营销和销售计划",
            target: "客户关系管理与售后服务",
            value: 5,
          },
          {
            source: "市场营销和销售计划",
            target: "市场推广活动与促销策略",
            value: 5,
          },
          {
            source: "市场营销和销售计划",
            target: "",
            value: 5,
          },
          {
            source: "市场营销和销售计划",
            target: "市场监测与反馈调整",
            value: 5,
          },
          {
            source: "市场营销和销售计划",
            target: "持续创新与发展",
            value: 5,
          },
        ],
      },
    };
    console.log("options=", options);
    myChart.setOption(options);
  }
  //5
  {
    var myChart = echarts.init(dom[5]);
    options = {
      series: {
        type: "sankey",
        layout: "none",
        emphasis: {
          focus: "adjacency",
        },
        label: {
          show: true,
          position: "insideTopLeft",
          fontStyle: "normal",
          fontWeight: "12",
        },
        data: [
          {
            name: "风险管理和危机应对",
            itemStyle: {
              color: "#f191af",
            },
            label: {
              fontSize: 19,
              fontWeight: "normal",
              color: "#fff",
            },
          },
          {
            name: "数据安全和隐私风险",
          },
          {
            name: "技术故障和系统崩溃",
          },
          {
            name: "错误或虚假信息的传播",
          },
          {
            name: "不良用户行为和恶意攻击",
          },
          {
            name: "法律合规和风险管控",
          },
          {
            name: "危机公关和舆情应对",
          },
        ],
        links: [
          {
            source: "风险管理和危机应对",
            target: "数据安全和隐私风险",
            value: 5,
          },
          {
            source: "风险管理和危机应对",
            target: "技术故障和系统崩溃",
            value: 5,
          },
          {
            source: "风险管理和危机应对",
            target: "错误或虚假信息的传播",
            value: 5,
          },
          {
            source: "风险管理和危机应对",
            target: "不良用户行为和恶意攻击",
            value: 5,
          },
          {
            source: "风险管理和危机应对",
            target: "法律合规和风险管控",
            value: 5,
          },
          {
            source: "风险管理和危机应对",
            target: "危机公关和舆情应对",
            value: 5,
          },
        ],
      },
    };
    console.log("options=", options);
    myChart.setOption(options);
  }
}
const bgUrl = [
  "assets/img/bg.jpg",
  "images/bg1.png",
  "images/bg2.jpg",
  "images/bg3.jpg",
  "images/bg4.jpg",
  "images/bg5.jpg",
];

function exBg(e) {
  var bgNode = document.querySelector("#hero");
  // console.log('e',e);
  bgNode.style.backgroundImage = "url(" + bgUrl[e] + ")";
  // console.log('bgNode.style.backgroundImage',bgNode.style.backgroundImage)
}
function exCo(e) {
  var bgNode = document.querySelector("#hero");
  var colors = ["red", "blue"]; // 定义颜色数组，根据需要添加更多颜色
  bgNode.style.backgroundImage = "none";
  bgNode.style.backgroundColor = colors[e]; // 设置背景颜色
}

function originBg() {
  // var bgNode = document.querySelector("#hero");
  // bgNode.style.backgroundImage = "";
  // bgNode.style.background = "linear-gradient(0deg, #c23135 0%, #c9484c 100%);";
  leave();
}
