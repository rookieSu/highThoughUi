import { __await } from 'tslib';

var results = [];
var keys = [];
const papa = require('papaparse')

//csv解析
 function csvParse(filepath){
     return new Promise(function(resolve, reject){
        papa.parse(filepath, {
            delimiter:",",
            download:true,
            header: true,
            dynamicTyping: true,
            complete:  function (results) {
                resolve(results.data)
            }
        });
     })


}

//数据处理
 function processData(result){
    results = result;
    for(let key in results[0]){
        keys.push(key);
    }
    // console.log(results)
    // parallel(['C3H3N7','C3H1N905','C3H2N8O2'],[ "DeltaH", "Velocity", "Pressure","Temperature"]);    
    // bar(['C3H3N7','C3H1N905','C3H2N8O2'],[ "DeltaH", "Velocity", "Pressure","Temperature"]);
    // radar(['C3H3N7','C3H1N905','C3H2N8O2'],[ "DeltaH", "Velocity", "Pressure","Temperature"])
}

//矩阵转置
function tran(nor){
    var temp=[];
    for(let i in nor[0]){
        temp.push([]);
    }

    for(let j in nor){
        for(let z in nor[j]){
            temp[z].push(nor[j][z])
        }
    }

    return temp;
}

//数据归一化
function normalize(data){

    for(let d of data){
        let max = Math.max(...d);
        for(let index in d){
            d[index] = eval((d[index] / max).toFixed(4));
        }
    }
    return data;
}

//柱状图或者折线图
export async function bar(filepath, molecules, dimensions){
    var temp;
    var barData = [['fileName']];
    
    if(results.length == 0){
        const data = await csvParse(filepath);
        processData(data)
    }
    for(let m of molecules){
        barData[0].push(m);
    }
    for(let k of dimensions){
        temp = [];
        for(let m of molecules){
            for(let data of results){
                if(m == data[keys[1]]){
                    temp.push(data[k])
                }
            }
        }
        if(temp.length　!= 0){
            barData.push(temp);
        }
    }
    temp = normalize(barData.slice(1));
    for(let index in temp){
        barData[eval(index)+1] = temp[index];
        barData[eval(index)+1].unshift(dimensions[eval(index)])
    }
    
    return barData;
    
   
    
}

//平行坐标图
export async function parallel(filepath, molecules, dimensions){
    var temp;
    var parallelData = [];
    if(results.length == 0){
        const data = await csvParse(filepath);
        processData(data);
    }
    for(let k of dimensions){
        temp = [];
        for(let m of molecules){
            for(let data of results){
                if(m == data[keys[1]]){
                    temp.push(data[k])
                }
            }
        }
        if(temp.length　!= 0){
            parallelData.push(temp);
        }
    }
    
    parallelData = normalize(parallelData);
    parallelData = tran(parallelData);
    for(var i in parallelData){
        parallelData[i] = [parallelData[i]]
    }
    parallelData.unshift(molecules,dimensions);
    return parallelData;
}

//雷达图
export async function radar(filepath, molecules, dimensions){
    var temp;
    var radarData　= [];
    if(results.length == 0){
        const data = await csvParse(filepath);
        processData(data);
    }
    for(let k of dimensions){
        temp = [];
        for(let m of molecules){
            for(let data of results){
                if(m == data[keys[1]]){
                    temp.push(data[k])
                }
            }
        }
        if(temp.length　!= 0){
            radarData.push(temp);
        }
    }
    radarData = normalize(radarData);
    radarData = tran(radarData);
    radarData.unshift(molecules,dimensions);
    return radarData;
    
}