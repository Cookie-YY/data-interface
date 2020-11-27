// 基于准备好的dom，初始化echarts实例
let myChart1 = echarts.init(document.getElementById('main1'));
let myChart2 = echarts.init(document.getElementById('main2'));
/*let myChart3 = echarts.init(document.getElementById('main3'));*/


let data1 = [
]

// 指定图表的配置项和数据
// 指定图表的配置项和数据
let option1 = {
	title: {
		// text: '南丁格尔玫瑰图',
		// subtext: '纯属虚构',
		// left: 'center'
	},
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b} : {c} ({d}%)'
	},
	legend: {
		type:'scroll',
		orient: 'vertical',
		x: 'left',
		left: '7%',
		top: '115px',
		// icon:"circle",
		formatter: function(name) {
			let target = '';
			for(let i=0;i<option1.series[0].data.length;i++) {
				if(option1.series[0].data[i].name === name) {
					target = option1.series[0].data[i].value
				}
			}
			return name + target +'件' 
		},
		textStyle: {
			rich: {
				a: {
					fontSize: 16,
					color: "#999",
				},
				b: {
					fontSize: 16,
					color: "#333",
				}
			}
		}
	},
	// data: [],
	toolbox: {
		show: true,
	},
	
	series: [{
		name: '',
		type: 'pie',
		radius : ['20%','50%'],
		center: ['70%', '50%'],
		label: {
			show: false
		},
		data: [],
		color:["#01BAFF","#FAE754","#47EFA7"],
		itemStyle: {
			normal: {
				label: {
					show: true,
					position: 'inner',
					color:'#ffffff',
					fontSize: 14,
					formatter: function(p) { //指示线对应文字,百分比
						return p.percent + "%";
					}
				},
			}
		}
		
	}]
};

var seriesArr = []

let option2 = {
    legend: {
        // orient: 'vertical',
        // x: 'right',
        icon: "circle",
        right: '10%',
        top: '18px',
        data: ['来信', '来访', '网信',],
        textStyle: { //图例文字的样式
            color: '#333',
            fontSize: 18
        },
        itemGap: 30 // 设置间距
    },
    
    tooltip: {
        trigger: 'axis',
        // backgroundColor: 'none',
        // trigger: 'none',
        // axisPointer: {
        //     type: 'cross',
        //     animation: false,
        //     label: {
        //         backgroundColor: '#4c74fc',
        //         borderColor: '#4c74fc',
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
        data: [],
    },
    yAxis: {
        type: 'value',
        axisLine: {show:false},
    },
    series: seriesArr
};
///*ajax获取myChart2数据  begin*/
// 	$.ajax({
// 	type: "Get",
// 	dataType:"json",
// 	//async:true,
// 	//cache:false,
// 	url: baseapi + "/?table=xf_xfj_cd_xj_xfxs_xfjc&name=day&value=xfjc&stack=xfxs&transformer=@groupby&shej_02=广东省&day=[2019-01-01,2019-01-09]&full=true",
// 		success: function(data){
// 					var names = [];
// 					var series1 = [];
// 					var series2 = [];
// 					var series3 = [];
// 					var newData = data.data
// 				console.log(data)
// 				for(var i=0; i<newData.length; i++){
// 					names.push(newData[i].name)
// 					series1.push(newData[i].value_g0_1)
// 					series2.push(newData[i].value_g0_2)
// 					series3.push(newData[i].value_g0_3)
// 				}
// 				option2.xAxis.data=names
// 				option2.series[0].data=series1
// 				option2.series[1].data=series2
// 				option2.series[2].data=series3
// 				myChart2.setOption(option2)
// 		}
// })


function getAPI() {
    // 1.态势_信访量
    $.ajax({
        type: "Get",
        dataType:"json",
        data: {
            // Cqh: '广州市',
            gd_id1: '态势',
            gd_id2: '信访量',
            day: day,
        },
        url: baseapi + "/",
            success: function(data) {
                $('#num').html(data.data[0].value)
                // option1.series[0].data = data.data;
                // myChart1.setOption(option1)
        }
    })
    // 2.态势_信访形式分布
    /*ajax获取myChart1数据  begin*/
        $.ajax({
            type: "Get",
            dataType:"json",
            data: {
                // Cqh: '广州市',
                gd_id1: '态势',
                gd_id2: '信访形式分布',
                day: day,
            },
            url: baseapi + "/",
                success: function(data) {
                    option1.series[0].data = data.data;
                    myChart1.setOption(option1)
            }
        })
        
    /* ajax end*/

    // 3.态势_信访量走势
    $.ajax({
        type: "Get",
        dataType:"json",
        data: {
            // Cqh: '广州市',
            gd_id1: '态势',
            gd_id2: '信访量走势',
            day: day,
        },
        url: baseapi + "/",
            success: function(data) {
                let map = data.map
                let propData = data.data
                // 获取keys数组
                let dataKeys = Object.keys(map);
                
                // 获取key对应的中文数组
                let legendData = Object.values(map);
                // 所有line数据数组
                let lineDataArr = [];
                // echarts series数据
                // var seriesArr = [];
                // 根据legend设置每条line数据对应的key值
                let maxArr = [];
                dataKeys.forEach(value => {
                    lineDataArr[value] = [];
                });
                let colors = ['#29adff', '#f9e03c', '#46eea6']
                for (let [index, item] of propData.entries()) {
                    // x轴数据添加
                    // xAxis.push(item[this.params.xName]);
                    dataKeys.forEach(value => {
                      maxArr.push(item[value]);
                      // 为每条line对应的数组添加数据
                      lineDataArr[value].push(item[value]);
                    });
                  }
                  dataKeys.forEach((value, index) => {
                    let series = {
                        name: map[value],
                        type: 'line',
                        symbolSize: 10,
                        itemStyle: {
                            normal: {
                                color: colors[index],
                                lineStyle: {
                                    color: colors[index]
                                }
                            }
                        },
                        data: lineDataArr[value]
                    };
                    seriesArr.push(series);
                  });
                  option2.tooltip = {trigger: 'axis'}
                var xArr = [];
                var newData = data.data
                for (var i = 0; i < newData.length; i++) {
                    xArr.push(newData[i].name)
                }
                option2.xAxis.data = xArr
                // option2.series.data = xArr
                // option2.series[0].data = newData//折线图需要的数据
                myChart2.setOption(option2)

        }
    })
}

getAPI()








/*let option3 = {
    legend: {
        // orient: 'vertical',
        // x: 'right',
        icon: "circle",
        right: '10%',
        top: '18px',
        data: ['来信', '来访', '网信',],
        textStyle: { //图例文字的样式
            color: '#333',
            fontSize: 18
        },
        itemGap: 30 // 设置间距
    },
    tooltip: {
        // formatter: "{a} {b} {c}% ",
        trigger: 'none',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#4c74fc',
                borderColor: '#4c74fc',
                borderWidth: 1,
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                color: '#fff'
            }
        },
    },
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    },
    yAxis: {
        type: 'value',
        axisLine: {show:false},
    },
    series: [{
        name:'来信',
        data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290],
        type: 'line',
        symbolSize: 10,
        itemStyle: {
            normal: {
                color: "#29adff",
                lineStyle: {
                    color: "#29adff"
                }
            }
        },
    },{
        name: '来访',
        data: [788, 731, 1022, 598, 1355, 1100, 1433, 900, 800, 724, 377, 866],
        type: 'line',
        symbolSize: 10,
        itemStyle: {
            normal: {
                color: "#f9e03c",
                lineStyle: {
                    color: "#f9e03c"
                }
            }
        },
    },{
        name: '网信',
        data: [531, 621, 586, 345, 643, 854, 434, 453, 900, 410, 1034, 1134],
        type: 'line',
        symbolSize: 10,
        itemStyle: {
            normal: {
                color: "#46eea6",
                lineStyle: {
                    color: "#46eea6"
                }
            }
        },
    }]
};*/

// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1);
myChart2.setOption(option2);
//myChart3.setOption(option3);