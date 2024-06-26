/*大屏*/
//自调用函数
(function () {
  // 1、页面一加载就要知道页面宽度计算
  var setFont = function () {
    // 因为要定义变量可能和别的变量相互冲突，污染，所有用自调用函数
    var html = document.documentElement; // 获取html
    // 获取宽度
    var width = html.clientWidth;

    // 判断
    if (width < 1024) width = 1024;
    if (width > 1920) width = 1920;
    // 设置html的基准值
    var fontSize = width / 80 + "px";
    // 设置给html
    html.style.fontSize = fontSize;
  };
  setFont();
  // 2、页面改变的时候也需要设置
  // 尺寸改变事件
  window.onresize = function () {
    setFont();
  };
})();

(function () {
  //事件委托
  $(".monitor").on("click", " a", function () {
    //点击当前的a 加类名 active  他的兄弟删除类名
    $(this).addClass("active").siblings().removeClass("active");
    //获取一一对应的下标
    var index = $(this).index();
    //选取content 然后狗日对应下标的 显示   当前的兄弟.content隐藏
    $(".content").eq(index).show().siblings(".content").hide();
  });
  //滚动
  //原理：把marquee下面的子盒子都复制一遍 加入到marquee中
  //      然后动画向上滚动，滚动到一半重新开始滚动
  //因为选取的是两个marquee  所以要遍历
  $(".monitor .marquee").each(function (index, dom) {
    //将每个 的所有子级都复制一遍
    var rows = $(dom).children().clone();
    //再将新的到的加入原来的
    $(dom).append(rows);
  });
})();

var pieEchart;
(function () {
  if ($(".pie")[0]) {
    pieEchart = echarts.init($(".pie")[0]);
    option = {
      // 控制提示
      tooltip: {
        // 非轴图形，使用item的意思是放到数据对应图形上触发提示
        trigger: "item",
        // 格式化提示内容：
        // a 代表图表名称 b 代表数据名称 c 代表数据  d代表  当前数据/总数据的比例
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      // 控制图表
      series: [
        {
          // 图表名称
          name: "情绪",
          // 图表类型
          type: "pie",
          // 南丁格尔玫瑰图 有两个圆  内圆半径10%  外圆半径70%
          // 百分比基于  图表DOM容器的半径
          radius: ["10%", "70%"],
          // 图表中心位置 left 50%  top 50% 距离图表DOM容器
          center: ["50%", "50%"],
          // 半径模式，另外一种是 area 面积模式
          roseType: "radius",
          // 数据集 value 数据的值 name 数据的名称
          data: [
            { value: 5, name: "乐观" },
            { value: 15, name: "赞赏" },
            { value: 25, name: "感激" },
            { value: 35, name: "中立" },
            { value: 30, name: "疑惑" },
            { value: 20, name: "焦虑" },
            { value: 20, name: "愤怒" },
            { value: 40, name: "恐惧" },
          ],
          //文字调整
          label: {
            fontSize: 10,
          },
          //引导线
          labelLine: {
            length: 8,
            length2: 10,
          },
        },
      ],
      color: [
        "#006cff",
        "#60cda0",
        "#ed8884",
        "#ff9f7f",
        "#0096ff",
        "#9fe6b8",
        "#32c5e9",
        "#1d9dff",
      ],
    };

    pieEchart.setOption(option);
    pieEchart.on("click", function (param) {
      alert("即将跳转到详细界面");
      setTimeout(function () {
        location.href = "";
      }, 100);
    });
  }
})();

var barEchart;
// 柱状图
(function () {
  if ($(".users .bar")[0]) {
    // 中间省略的数据  准备三项
    var item = {
      name: "",
      value: 1200,
      // 柱子颜色
      itemStyle: {
        color: "#254065",
      },
      // 鼠标经过柱子颜色
      emphasis: {
        itemStyle: {
          color: "#254065",
        },
      },
      // 工具提示隐藏
      tooltip: {
        extraCssText: "opacity:0",
      },
    };
    option = {
      // 工具提示
      tooltip: {
        // 触发类型  经过轴触发axis  经过轴触发item
        trigger: "item",
        // 轴触发提示才有效
        axisPointer: {
          // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果
          type: "shadow",
        },
      },
      // 图表边界控制
      grid: {
        // 距离 上右下左 的距离
        left: "0",
        right: "3%",
        bottom: "3%",
        top: "5%",
        // 大小是否包含文本【类似于boxsizing】
        containLabel: true,
        //显示边框
        show: true,
        //边框颜色
        borderColor: "rgba(0, 240, 255, 0.3)",
      },
      // 控制x轴
      xAxis: [
        {
          // 使用类目，必须有data属性
          type: "category",
          // 使用 data 中的数据设为刻度文字
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          // 刻度设置
          axisTick: {
            // true意思：图形在刻度中间
            // false意思：图形在刻度之间
            alignWithLabel: false,
            show: false,
          },
          //文字
          axisLabel: {
            color: "#ffffff",
          },
        },
      ],
      // 控制y轴
      yAxis: [
        {
          // 使用数据的值设为刻度文字
          type: "value",
          axisTick: {
            // true意思：图形在刻度中间
            // false意思：图形在刻度之间
            alignWithLabel: false,
            show: false,
          },
          //文字
          axisLabel: {
            color: "#4c9bfd",
          },
          splitLine: {
            lineStyle: {
              color: "rgba(0, 240, 255, 0.3)",
            },
          },
        },
      ],
      // 控制x轴
      series: [
        {
          // series配置
          // 颜色
          itemStyle: {
            // 提供的工具函数生成渐变颜色
            color: new echarts.graphic.LinearGradient(
              // (x1,y2) 点到点 (x2,y2) 之间进行渐变
              0,
              0,
              0,
              1,
              [
                { offset: 0, color: "#00fffb" }, // 0 起始颜色
                { offset: 1, color: "#0061ce" }, // 1 结束颜色
              ]
            ),
          },
          // 图表数据名称
          name: "浏览次数",
          // 图表类型
          type: "bar",
          // 柱子宽度
          barWidth: "35%",
          // 数据
          data: [402, 180, 1700, 1400, 900, 1100, 600],
        },
      ],
    };
    barEchart = echarts.init($(".users .bar")[0]);
    barEchart.setOption(option);
    barEchart.on("click", function (param) {
      alert("即将跳转到详细界面");
      setTimeout(function () {
        location.href = "https://gitee.com/iGaoWei/big-data-view";
      }, 100);
    });
  }
})();

var datalinks = {
  day30: { orders: "11,098,420", amount: "99834" },
  day7: { orders: "301,987", amount: "9834" },
  day3: { orders: "1,987", amount: "3834" },
  day1: { orders: "987", amount: "834" },
};
//轮番图数字
(function () {
  var links = {
    day30: 0,
    day7: 1,
    day3: 2,
    day1: 3,
  };
  //点击事件
  $(".order").on("click", ".filter a", function () {
    //点击之后加类名
    $(this).addClass("active").siblings().removeClass("active");
    // 先获取点击a的 data-key自定义属性
    var key = $(this).attr("data-key");
    //获取自定义属性
    // data{}==>data.shuxing data['shuxing]
    index = links[key];
    key = datalinks[key];
    $(".order .item h4:eq(0)").text(key.orders);
    $(".order .item h4:eq(1)").text(key.amount);
  });
  //定时器
  var index = 0;
  var aclick = $(".order a");
  setInterval(function () {
    index++;
    if (index > 3) {
      index = 0;
    }
    //每3秒调用点击事件
    aclick.eq(index).click();
  }, 3000);
})();

//折线图
var linedata = {
  month: [
    [24, 40, 11, 34, 90, 23, 20, 30, 10, 23, 20, 12],
    [40, 64, 19, 34, 20, 33, 30, 23, 10, 20, 10, 79],
  ],
  week: [
    [23, 75, 12, 97, 21, 67, 21],
    [43, 31, 65, 23, 21, 67, 21],
  ],
  day: [
    [34, 42, 32, 87, 39, 36, 34],
    [56, 43, 98, 21, 43, 54, 23],
  ],
  hour: [
    [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
    [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24],
  ],
};
var lineEchart;
(function () {
  if ($(".line")[0]) {
    var option = {
      //鼠标提示工具
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        // 类目类型
        type: "category",
        // x轴刻度文字
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        axisTick: {
          show: false, //去除刻度线
        },
        axisLabel: {
          color: "#4c9bfd", //文本颜色
        },
        axisLine: {
          show: false, //去除轴线
        },
        boundaryGap: false, //去除轴内间距
      },
      yAxis: {
        // 数据作为刻度文字
        type: "value",
        axisTick: {
          show: false, //去除刻度线
        },
        axisLabel: {
          color: "#4c9bfd", //文本颜色
        },
        axisLine: {
          show: false, //去除轴线
        },
        boundaryGap: false, //去除轴内间距
      },
      //图例组件
      legend: {
        textStyle: {
          color: "#4c9bfd", // 图例文字颜色
        },
        right: "10%", //距离右边10%
      },
      // 设置网格样式
      grid: {
        show: true, // 显示边框
        top: "20%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        borderColor: "#012f4a", // 边框颜色
        containLabel: true, // 包含刻度文字在内
      },
      series: [
        {
          name: "预期热度",
          // 数据
          data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          // 图表类型
          type: "line",
          // 圆滑连接
          smooth: true,
          itemStyle: {
            color: "#00f2ff", // 线颜色
          },
        },
        {
          name: "实际热度",
          // 数据
          data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
          // 图表类型
          type: "line",
          // 圆滑连接
          smooth: true,
          itemStyle: {
            color: "#ef0f90", // 线颜色
          },
        },
      ],
    };
    lineEchart = echarts.init($(".line")[0]);
    lineEchart.setOption(option);

    //点击效果
    var links = {
      month: 0,
      week: 1,
      day: 2,
      hour: 3,
    };
    var kinds = {
      month: ["1日", "5日", "10日", "15日", "20日", "25日", "30日"],
      week: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      day: ["0点", "4点", "8点", "12点", "16点", "20点", "24点"],
      hour: ["10分", "20分", "30分", "40分", "50分", "60分"],
    };
    $(".sales ").on("click", ".caption a", function () {
      $(this).addClass("active").siblings("a").removeClass("active");
      //获取自定义属性值
      var key = $(this).attr("data-type");
      //取出对应的值
      index = links[key];
      option.xAxis.data = kinds[key];
      //将值设置到 图表中
      key = linedata[key];
      option.series[0].data = key[0];
      option.series[1].data = key[1];
      //再次调用才能在页面显示
      lineEchart.setOption(option);
    });
    //定时器
    var index = 0;
    setInterval(function () {
      index++;
      if (index > 3) {
        index = 0;
      }
      $(".sales .caption a").eq(index).click();
    }, 2500);
  }
})();
(function () {
  if ($(".gauge")[0]) {
    var option = {
      series: [
        {
          type: "pie",
          radius: ["130%", "150%"], // 放大图形
          center: ["50%", "80%"], // 往下移动  套住75%文字
          label: {
            show: false,
          },
          startAngle: 180,
          hoverOffset: 1, // 鼠标经过不变大
          data: [
            {
              value: 150,
              itemStyle: {
                // 颜色渐变#00c9e0->#005fc1
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#00c9e0" },
                    { offset: 1, color: "#005fc1" },
                  ],
                },
              },
            },
            { value: 0, itemStyle: { color: "#12274d" } }, // 颜色#12274d

            { value: 200, itemStyle: { color: "transparent" } }, // 透明隐藏第三块区域
          ],
        },
      ],
    };
    var myechart = echarts.init($(".gauge")[0]);
    myechart.setOption(option);
  }
})();
(function () {
  var fivedata = {
    today: [
      { name: "爬山失联女子丈夫请网友停止恶意揣测", num: "634,482" },
      { name: "谭爷爷你孙女当花局长了 ", num: "556,880" },
      { name: "电视陪你看中国", num: "532,880" },
      { name: "舒奕橙", num: "527,100" },
      { name: "中国6名航天员在太空拍合影", num: "520,408" },
      { name: "神十八成功对接空间站", num: "504,311" },
    ],
    yesterday: [
      { name: "玄彬孙艺珍出演眼泪女王", num: "510,316" },
      { name: "追风者阿文跳楼", num: "449,141" },
      { name: "王腾回应红米汽车", num: "417,437" },
      { name: "雷军恳请各位口下留情", num: "415,312" },
      { name: "新疆成为包邮区", num: "404,313" },
      { name: "女子睡觉被大风吹下11楼身亡", num: "493.123" },
    ],
    daybefore: [
      { name: "为什么无性婚姻越来越多", num: "511,086" },
      { name: "邓为站姐发了EXO", num: "510,331" },
      { name: "汪苏泷郁可唯互发自拍", num: "509,313" },
      { name: "朋友整个孕期抽了48管血", num: "502,111" },
      { name: "上海一轿车失控撞飞多名路人", num: "495,431" },
      { name: "物业回应南昌一小区窗框吹落3人坠亡", num: "484,321" },
    ],
    daybefore2: [
      { name: "宋昰昀被曝校园暴力", num: "459,633" },
      { name: "白鹿簪花妆", num: "428,412" },
      { name: "杨幂好用心", num: "397,407" },
      { name: "酒店拖鞋上这个洞有什么用", num: "396,312" },
      { name: "这居然是罗云熙", num: "373,321" },
      { name: "罗伯特头像", num: "371,323" },
    ],
    daybefore3: [
      { name: "WBG对战iG", num: "519,021" },
      { name: "七宝街 我哭死", num: "517,341" },
      { name: "存了12万被妈妈一年花完了", num: "516,437" },
      { name: "爸爸用排烟管给女儿做了一条粉色龙", num: "506,310" },
      { name: "张大大在天水麻辣烫店当服务员", num: "495,710" },
      { name: "南昌天气", num: "3,170" },
    ],
  };

  $(".data").on("click", ".sup li", function () {
    $(this).addClass("active").siblings().removeClass("active");
    // $(".inner").on("mouseenter", ".sup li", function () {
    // $(this).addClass("active").siblings().removeClass("active");

    var key = $(this).attr("data-type");
    var data = fivedata[key];

    var html = "";
    data.forEach(function (item) {
      html += `<li><span class="line1">${item.name}</span><span>${item.num} </span></li>`;
    });

    //渲染
    $(".sub").html(html);
  });
  $(".province .sup li").eq(0).click();
  var index = 0;
  setInterval(() => {
    index++;
    if (index > 5) {
      index = 0;
    }
    $(".sup li").eq(index).click();
  }, 2000);
})();
