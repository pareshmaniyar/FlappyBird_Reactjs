import React, { Component } from 'react';
import './App.css'

function Gridcell(props){
    var style = {
        width: 20,
        height: 20,
        border: '1px solid black',
        backgroundColor: props.cell
    }
    return (
        <div style = {style}>
        </div>
    )
}
function GridRow(props){
    var style = {
        display: "flex"
    }
    return(
        <div style = {style}>
        {
            props.row.map( (cell) =>{
                return <Gridcell cell = {cell}/>
            })
        }
        </div>
    )
}
function Grid(props){
    return (
        <div>
        {
            props.grid.map( (row) => {
                return <GridRow row = {row}/>
            })
        }
        </div>
    )
}
class Game extends React.Component{
    constructor(props){
        super(props)
        var grid = []
        for(let i = 0; i < 20; i++){
            grid.push(new Array(40).fill('red'))
        }
        var bird = {
            height:10,
            position:2
        }
        grid[bird.height][bird.position] = 'yellow'
        this.state = {grid:grid}
    }
    render(){
        return (
            <Grid grid = {this.state.grid}/>
            )
    }
}
export default Game;