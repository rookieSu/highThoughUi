import React, { Component } from 'react'
var echarts = require('echarts')

export default class EmRadar extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        var data = [];
        var trans = [];
        var indicator = [];
        var myChart = echarts.init(document.getElementById('radar'))
        var dimension = this.props[1]
        var molecule = this.props[0];
        var rardarData = [];
        for(let i in this.props){
            trans.push(this.props[i]);
        }
        data = trans.slice(2);
        for (let i in molecule) {
            rardarData.push({ name: molecule[i], value: data[eval(i)] })
        }
        for (let i of dimension){
            indicator.push({name: i, max: 1})
        }
        var option = {
            title: {
                text: '雷达图',
                x:'center'
            },
            legend: {
                orient:'',
                x:'left',
                data: molecule
            },
            tooltip:{},
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            radar: {
                indicator: indicator,
                name:{
                    color:'black'
                }
            },
            series: [
                {
                    type: 'radar',
                    data: rardarData
                }
            ]


        };
        myChart.setOption(option);
    }
    render() {
        return (
            <div id={'radar'} style={{ height: 800 }} />
        )
    }
}