// 基于准备好的dom，初始化echarts实例
let myChart1 = echarts.init(document.getElementById('main1'));
/*let myChart2 = echarts.init(document.getElementById('main2'));*/


let data1 = [
    { value: 28, name: '代评价' },
    { value: 40, name: '已评价' },
    { value: 32, name: '超期未评价' },
]
// 指定图表的配置项和数据
let option1 = {
    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#29adff',
                borderColor: '#29adff',
                borderWidth: 1,
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                color: '#fff',
                
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
        data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290],
        type: 'line',
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#d7f0ff'
            }, {
                offset: 1,
                color: '#ffe'
            }])
        },
        symbolSize: 10,
        itemStyle: {
            normal: {
                color: "#29adff",
                lineStyle: {
                    color: "#29adff"
                }
            }
        },
    }]
};

function getAPI() {
    // 1.运行_责任单位_工作过程监控
    $.ajax({
        type: "Get",
        dataType: "json",
        data: {
            Cqh: Cqh,
            gd_id1: '运行',
            gd_id2: '责任单位',
            gd_id3: '工作过程监控',
            day: day,
        },
        url: baseapi + "/",
        success: function (data) {
            let str = ''
            let imgarr = ['db', 'dl', 'cq', 'zj']
            for (let i = 0; i < data.data.length; i++) {
                str += `<div class="add" style="border-bottom: 1px dashed #ddd;">
                    <img src="./image/${imgarr[i]}.png"/>
                    <div>
                        <p>${data.data[i].name}</p>
                        <p><span>${data.data[i].value}</span></p>
                    </div>
                </div>`
            }
            $('.yjxxfx_index_body').html(str)
        }
    })

    // 2.运行_责任单位_信访量走势
    ///*ajax获取myChart1数据  begin*/
    $.ajax({
        type: "Get",
        dataType: "json",
        data: {
            Cqh: Cqh,
            gd_id1: '运行',
            gd_id2: '责任单位',
            gd_id3: '信访量走势',
            day: day,
        },
        url: baseapi + "/",
        success: function (data) {
            var xArr = [],
                yArr = []
            var newData = data.data
            for (var i = 0; i < newData.length; i++) {
                xArr.push(newData[i].name)
                yArr.push(newData[i].value)
            }
            option1.xAxis.data = xArr
            option1.series.data = xArr
            option1.series[0].data = newData//折线图需要的数据
            myChart1.setOption(option1)
        }
    })

}


getAPI()








/*let option2 = {
    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#29adff',
                borderColor: '#29adff',
                borderWidth: 1,
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                color: '#fff',
                
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
        data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290],
        type: 'line',
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#d7f0ff'
            }, {
                offset: 1,
                color: '#ffe'
            }])
        },
        symbolSize: 10,
        itemStyle: {
            normal: {
                color: "#29adff",
                lineStyle: {
                    color: "#29adff"
                }
            }
        },
    }]
};*/

// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1);
/*myChart2.setOption(option2);*/