// 基于准备好的dom，初始化echarts实例
let myChart1 = echarts.init(document.getElementById('main1'));
let myChart2 = echarts.init(document.getElementById('main2'));
let myChart3 = echarts.init(document.getElementById('main3'));
let myChart4 = echarts.init(document.getElementById('main4'));
let data1 = [];
let data2 = [];
let data3 = [];
//let data1 = [{
//		value: 28,
//		name: '代评价'
//	},
//	{
//		value: 40,
//		name: '已评价'
//	},
//	{
//		value: 32,
//		name: '超期未评价'
//	},
//]
//let data2 = [{
//		value: 25,
//		name: '满意'
//	},
//	{
//		value: 50,
//		name: '基本满意'
//	},
//	{
//		value: 15,
//		name: '不满意'
//	},
//	{
//		value: 10,
//		name: '超期未评价'
//	},
//]
//let data3 = [{
//		value: 28,
//		name: '及时受理'
//	},
//	{
//		value: 40,
//		name: '超期受理'
//	},
//	{
//		value: 32,
//		name: '超期未评价'
//	},
//]
let data4 = [{
		value: 18,
		name: '来信'
	},
	{
		value: 70,
		name: '网信'
	},
	{
		value: 12,
		name: '来访'
	},
]
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
		orient: 'vertical',
		x: 'left',
		left: '5%',
		top: '110px',
		// icon:"circle",
		formatter: function(name) {
			let target = '';
			for(let i=0;i<option1.series[0].data.length;i++) {
				if(option1.series[0].data[i].name === name) {
					target = option1.series[0].data[i].value == null ? 0 : option1.series[0].data[i].value
				}
			}
			return name + target +'件' 
		},
		textStyle: {
			rich: {
				a: {
					fontSize: 16,
					color: "#333",
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
					fontSize: 14,
					color:'#ffffff',
					formatter: function(p) { //指示线对应文字,百分比
						return p.percent + "%";
					}
				},
			}
		}
	}]
};


/* ajax end*/





let option2 = {
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
		orient: 'vertical',
		x: 'left',
		left: '5%',
		top: '100px',
		// icon:"circle",
		formatter: function(name) {
			let target = '';
			for(let i=0;i<option2.series[0].data.length;i++) {
				if(option2.series[0].data[i].name === name) {
					target = option2.series[0].data[i].value == null ? 0 : option2.series[0].data[i].value
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
		color:["#01BAFF","#FAE754","#47EFA7","#EB837C"],
		itemStyle: {
			normal: {
				label: {
					show: true,
					position: 'inner',
					fontSize: 14,
					color:'#ffffff',
					formatter: function(p) { //指示线对应文字,百分比
						return p.percent + "%";
					}
				},
			}
		}
	}]
};





/*jieshu*/





let option3 = {
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
		orient: 'vertical',
		x: 'left',
		left: '5%',
		top: '100px',
		// icon:"circle",
		formatter: function(name) {
			let target = '';
			for(let i=0;i<option3.series[0].data.length;i++) {
				if(option3.series[0].data[i].name === name) {
					target = option3.series[0].data[i].value == null ? 0 : option3.series[0].data[i].value
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
		radius: ['20%', '50%'],
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
					fontSize: 14,
					color:'#ffffff',
					formatter: function(p) { //指示线对应文字,百分比
						return p.percent + "%";
					}
				},
			}
		}
	}]
};




let option4 = {
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
		orient: 'vertical',
		x: 'left',
		left: '5%',
		top: '80px',
		data: ['来信', '网信', '来访', ],
		// icon:"circle",
		formatter: function(name) {
			let target;
			for(let i = 0; i < data4.length; i++) {
				if(data4[i].name === name) {
					target = data4[i].value
				}
			}
			let arr = ["{b|" + name + "}", "{a|" + target + '件' + "}"]
			return arr

		},
		textStyle: {
			rich: {
				a: {
					fontSize: 12,
					color: "#333",
					padding: 10
				},
				b: {
					fontSize: 12,
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
		radius: ['20%', '50%'],
		center: ['70%', '50%'],
		label: {
			show: false
		},
		data: [{
			value: 28,
			name: '来信'

		}, {
			value: 40,
			name: '网信'
		}, {
			value: 32,
			name: '来访'
		}],
		color:["#01BAFF","#FAE754","#47EFA7"],
		itemStyle: {
			normal: {
				label: {
					show: true,
					position: 'inner',
					fontSize: 14,
					color:'#ffffff',
					formatter: function(p) { //指示线对应文字,百分比
						return p.percent + "%";
					}
				},
			}
		}
	}]
};

function getAPI() {
		// 1.考核_信访部门_参评率
		$.ajax({
			type: "Get",
			dataType:"json",
			data: {
				Cqh: Cqh,
				gd_id1: '考核',
				gd_id2:'信访部门',
				gd_id3:'参评率',
				day: day,
				// full:true
			},
			url: baseapi + "/",
				success: function(data) {
					$('#cpl').html((data.data[0].value * 100).toFixed(2) + '%')
			}
		})

		// 2.考核_信访部门_参评率饼图
		/*ajax获取myChart1数据  begin*/
			$.ajax({
			type: "Get",
			dataType:"json",
			data: {
				Cqh: Cqh,
				gd_id1: '考核',
				gd_id2:'信访部门',
				gd_id3:'参评率饼图',
				day: day,
			},
			url: baseapi + "/",
				success: function(data) {
					// data.data.pop()
					option1.series[0].data = data.data;
					myChart1.setOption(option1)
			}
		})

		// 3.考核_信访部门_满意率
		$.ajax({
			type: "Get",
			dataType:"json",
			data: {
				Cqh: Cqh,
				gd_id1: '考核',
				gd_id2:'信访部门',
				gd_id3:'满意率',
				day: day,
			},
			url:baseapi + "/",
				success: function(data) {
					$('#myl').html((data.data[0].value * 100).toFixed(2) + '%')
			}
		})
		// 4.考核_信访部门_满意率饼图
		/*ajax获取myChart2数据  begin*/
			$.ajax({
			type: "Get",
			dataType:"json",
			data: {
				Cqh: Cqh,
				gd_id1: '考核',
				gd_id2:'信访部门',
				gd_id3:'满意率饼图',
				day: day,
			},
			url:baseapi + "/",
				success: function(data) {
					option2.series[0].data = data.data;
					myChart2.setOption(option2)
			}
		})

		// 5.考核_信访部门_及时受理率
		$.ajax({
			type: "Get",
			dataType:"json",
			data: {
				Cqh: Cqh,
				gd_id1: '考核',
				gd_id2:'信访部门',
				gd_id3:'及时受理率',
				day: day,
			},
			url:baseapi + "/",
				success: function(data) {
					$('#jssll').html((data.data[0].value * 100).toFixed(2) + '%')
			}
		})

		// 6.考核_信访部门_及时受理率饼图
		/*ajax获取myChart3数据  begin*/
			$.ajax({
			type: "Get",
			dataType:"json",
			data: {
				Cqh: Cqh,
				gd_id1: '考核',
				gd_id2:'信访部门',
				gd_id3:'及时受理率饼图',
				day: day,
			},
			url: baseapi + "/",
				success: function(data) {
					option3.series[0].data = data.data;
					myChart3.setOption(option3)
			}
		})

		/*jieshu*/

}


getAPI()

// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1);
myChart2.setOption(option2);
myChart3.setOption(option3);
myChart4.setOption(option4);