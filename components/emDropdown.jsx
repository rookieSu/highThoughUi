import React, {Component} from 'react';
import {Dropdown} from 'semantic-ui-react'

export default class EmDropdown extends Component{
    constructor(){
        super();
    }

    onNew(){console.log('new')};
    onClose(){console.log('close')};
    onOpen(){console.log('open')};
    onDelete(){console.log('delete')};

    render(){
        var ids = [];
        var displays = [];
        for(let key in this.props){
            for(let id in this.props[key]){
                if(id == 'id'){
                    ids.push(this.props[key][id]);
                }else{
                    displays.push(this.props[key][id])
                }
            }
      
        }
        return(
            <Dropdown text='文件' icon='' >
                <Dropdown.Menu>
                    <Dropdown.Item onClick={this.onNew}>新建</Dropdown.Item>
                    <Dropdown.Item onClick={this.onClose}>关闭</Dropdown.Item>
                    <Dropdown.Item>
                        <Dropdown text='打开'>
                            <Dropdown.Menu>
                                {displays.map((item,index) => <Dropdown.Item onClick={this.onOpen} text={item} key={ids[index]}/>)}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Dropdown text='删除'>
                            <Dropdown.Menu>
                                {displays.map((item,index) => <Dropdown.Item onClick={this.onDelete} text={item} key={ids[index]}/>)}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Dropdown.Item>               
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}