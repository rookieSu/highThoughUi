import React, {Component} from 'react'
var echarts = require('echarts');

export default class EmParallel extends Component{
    constructor(){
        super();
    }

   componentDidMount(){
        var trans = [];
        var data = [];
        var schema = [];
        var serie = [];
        var parallelAxis = [];
        var formuler;
        var lineStyle = {
            normal: {
                width: 2,
                opacity: 0.5
            }
        };
        var myChart = echarts.init(document.getElementById('parallel'))
        for(var i in this.props){
            trans.push(this.props[i])
        }
        data=trans.slice(2);
        formuler = trans[0]
        for(let i in formuler){
            serie.push({type:'parallel', name:formuler[i], data: data[i], lineStyle: lineStyle});
        }
        for(let i in trans[1]){
            schema.push({name: trans[1][i],index: eval(i),text: trans[1][i]});
        }
        for(let i in schema){
            if(i == '0'){
                parallelAxis.push({dim: eval(i), name: schema[i].text, inverse: true, nameLocation: 'start'});
            }else{
                parallelAxis.push({dim: eval(i), name: schema[i].text});
            }
        }

        var option = {
            title:{
                text:'平行坐标',
                left:'center',
                top:60
            },
            legend: {
                top: 10,
                data: formuler,
                itemGap: 20,
                // orient:'',
                x:'left',
            },
            toolbox:{
                feature:{
                    saveAsImage:{}
                }
            },
            tooltip:{

            },

            parallelAxis: parallelAxis,
            parallel: {
                left: '5%',
                right: '13%',
                bottom: '10%',
                top: '20%',
                parallelAxisDefault: {
                    type: 'value',
                    nameLocation: 'end',
                    nameGap: 20,
                    nameTextStyle: {
                        fontSize: 12
                    }
                }
            },
            series: serie
        };
        myChart.setOption(option)
    }
    render(){
        return(
            <div id='parallel' style={{height:800}} />
        )
    }
}