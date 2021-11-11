(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{343:function(n,e,t){"use strict";t.r(e),e.default="# Waterfall\n\nThere is no waterfall series in Apache ECharts, but we can simulate the effect using a stacked bar chart.\n\nAssuming that the values in the data array represent an increase or decrease from the previous value.\n\n```js\nvar data = [900, 345, 393, -108, -154, 135, 178, 286, -119, -361, -203];\n```\n\nThat is, the first data is `900` and the second data `345` represents the addition of `345` to `900`, etc. When presenting this data as a stepped waterfall chart, we can use three series: the first is a non-interactive transparent series to implement the suspension bar effect; the second series is used to represent positive numbers; and the second series is used to represent negative numbers.\n\n```js live\nvar data = [900, 345, 393, -108, -154, 135, 178, 286, -119, -361, -203];\nvar help = [];\nvar positive = [];\nvar negative = [];\nfor (var i = 0, sum = 0; i < data.length; ++i) {\n  if (data[i] >= 0) {\n    positive.push(data[i]);\n    negative.push('-');\n  } else {\n    positive.push('-');\n    negative.push(-data[i]);\n  }\n\n  if (i === 0) {\n    help.push(0);\n  } else {\n    sum += data[i - 1];\n    if (data[i] < 0) {\n      help.push(sum + data[i]);\n    } else {\n      help.push(sum);\n    }\n  }\n}\n\noption = {\n  title: {\n    text: 'Waterfall'\n  },\n  grid: {\n    left: '3%',\n    right: '4%',\n    bottom: '3%',\n    containLabel: true\n  },\n  xAxis: {\n    type: 'category',\n    splitLine: { show: false },\n    data: (function() {\n      var list = [];\n      for (var i = 1; i <= 11; i++) {\n        list.push('Oct/' + i);\n      }\n      return list;\n    })()\n  },\n  yAxis: {\n    type: 'value'\n  },\n  series: [\n    {\n      type: 'bar',\n      stack: 'all',\n      itemStyle: {\n        normal: {\n          barBorderColor: 'rgba(0,0,0,0)',\n          color: 'rgba(0,0,0,0)'\n        },\n        emphasis: {\n          barBorderColor: 'rgba(0,0,0,0)',\n          color: 'rgba(0,0,0,0)'\n        }\n      },\n      data: help\n    },\n    {\n      name: 'positive',\n      type: 'bar',\n      stack: 'all',\n      data: positive\n    },\n    {\n      name: 'negative',\n      type: 'bar',\n      stack: 'all',\n      data: negative,\n      itemStyle: {\n        color: '#f33'\n      }\n    }\n  ]\n};\n```\n"}}]);