// 基于准备好的dom，初始化echarts实例
let myChart1 = echarts.init(document.getElementById('main1'));
/*let myChart2 = echarts.init(document.getElementById('main2'));*/
var zlyjList = []
// 指定图表的配置项和数据
let option1 = {
    tooltip: {
        trigger: "axis",
        formatter: "{c}",
        // trigger: 'none',
        // axisPointer: {
        //     type: 'cross',
        //     animation: false,
        //     label: {
        //         backgroundColor: '#FF57A2',
        //         borderColor: '#FF57A2',
        //         borderWidth: 1,
        //         shadowBlur: 0,
        //         shadowOffsetX: 0,
        //         shadowOffsetY: 0,
        //         color: '#fff'
        //     }
        // },
    },
    xAxis: {
        type: 'category',
        data: [/*'1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'*/],
    },
    yAxis: {
        type: 'value',
        axisLine: {show:false},
    },
    series: [{
        data: [/*820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290*/],
        type: 'line',
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#FFEBF4'
            }, {
                offset: 1,
                color: '#ffe'
            }])
        },
        symbolSize: 10,
        itemStyle: {
            normal: {
                color: "#FF57A2",
                lineStyle: {
                    color: "#FF57A2"
                }
            }
        },
    }]
};

// 1.预警_信访量走势
///*ajax获取myChart1数据  begin*/
	$.ajax({
	type: "Get",
    dataType:"json",
    data: {
        gd_id1: '预警',
        gd_id2: '信访量走势',
    },
	//async:true,
	//cache:false,
	url: baseapi + "/",
		success: function(data) {
				var xArr = [],
					yArr = []
				var newData = data.data
				for(var i=0; i<newData.length; i++){
					xArr.push(newData[i].name)
					yArr.push(newData[i].value)
				}
				option1.xAxis.data = xArr
				option1.series.data = xArr
				option1.series[0].data = newData//折线图需要的数据
				myChart1.setOption(option1)
	}
})
//










//let option2 = {
//  tooltip: {
//      trigger: 'none',
//      axisPointer: {
//          type: 'cross',
//          animation: false,
//          label: {
//              backgroundColor: '#FF57A2',
//              borderColor: '#FF57A2',
//              borderWidth: 1,
//              shadowBlur: 0,
//              shadowOffsetX: 0,
//              shadowOffsetY: 0,
//              color: '#fff'
//          }
//      },
//  },
//  xAxis: {
//      type: 'category',
//      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
//  },
//  yAxis: {
//      type: 'value',
//      axisLine: {show:false},
//  },
//  series: [{
//      data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290],
//      type: 'line',
//      areaStyle: {
//          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//              offset: 0,
//              color: '#FFEBF4'
//          }, {
//              offset: 1,
//              color: '#ffe'
//          }])
//      },
//      symbolSize: 10,
//      itemStyle: {
//          normal: {
//              color: "#FF57A2",
//              lineStyle: {
//                  color: "#FF57A2"
//              }
//          }
//      },
//  }]
//};


// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1);
//myChart2.setOption(option2);

$.ajax({
	type: "Get",
    dataType:"json",
    data: {
        gd_id1: '信访总量预警',
        gd_id2: '总量预警',
        gd_id3: '预警状态',
    },
	//async:true,
	//cache:false,
	url: baseapi + "/",
	success: function(data) {
        zlyjList = data.data;
        $('#yjzt').text(data.data[0].name)
        $('.yj-value').text(data.data[0].value)
        $('#jyzxfl').text(data.data[1].name)
        $('.jyz-value').text(data.data[1].value)
        $('#acctb').text(data.data[2].name)
        $('.ac-value').text((data.data[2].value)*100 + '%')
        $('.hbtext').text(data.data[3].name)
        $('.hb-value').text((data.data[3].value)*100 + '%')
	}
})