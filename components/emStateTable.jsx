import React, {Component} from 'react'
import {Table, Label} from 'semantic-ui-react'

export default class EmStateTable extends Component{
    constructor(){
        super();
        this.state = {num:1}
    }
    componentDidMount(){
        this.timer = setInterval(
            ()=>this.count(),1000
        );
    }
    count(){
        this.setState(
            (state, props) => ({
                num: state.num+1
            })
        )
    }
    render(){
        console.log(this.state)
        return(
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>正在计算</Table.HeaderCell>
                        <Table.HeaderCell>已完成</Table.HeaderCell>
                        <Table.HeaderCell>排队中</Table.HeaderCell>
                        <Table.HeaderCell>报错</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                 <Table.Body>
                    <Table.Row>
                        <Table.Cell>{this.state.num}</Table.Cell>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>3</Table.Cell>
                        <Table.Cell>4</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    }

}