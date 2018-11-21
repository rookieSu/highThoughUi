import React, {Component} from 'react'
var echarts = require('echarts');

export  default class EmBarOrLine extends Component{

    constructor(){
        super();
        this.state = {data: this.props}
    }

    componentDidMount() {
        console.log(typeof this.props[0])
        var myChart = echarts.init(document.getElementById('bar'));
        var data = [];
        var serie = [];
        for(let index in this.props){
            data.push(this.props[index])
        }
        for(let i = 0; i<data[0].length-1;i++){
            serie.push({type:'bar'})
        }
        myChart.setOption({
            title: {
                text: '柱状图',
                left:'center'
            },
            legend: {
                orient:'',
                x:'left',
                top:50,
                
            },
            xAxis: {
                type:"category"
            },
            yAxis: {},
            dataset:{
                source: data
            },
            dataZoom: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    lable: {
                        backgroundColor: '#283b56'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            series:serie
        });

    }

    render(){
        return(
            <div id='bar' style={{height:800}}></div>
        )
    }

}






