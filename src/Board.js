import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {

  static defaultProps = {
    nbrRows:5,
    nbrColumns:5,
    chanceToBeLit:0.25
  }

  state={
    hasWon:false,
    cellsLit:this.createBoard()
  }
  
  createBoard(){
    let board = [];
    
      for(let i=0; i<this.props.nbrRows; i++){
        let row=[];
        
        for(let j=0; j<this.props.nbrColumns; j++)
            row.push(Math.random() < this.props.chanceToBeLit);
        
        board.push(row);
      }
    
    return board
  }


  flippCellsAround=(indexRowClicked,indexColClicked)=>{
    
    let maxRows=this.props.nbrRows;
    let maxColumns=this.props.nbrColumns;  
    let cellsAreLit=[...this.state.cellsLit];
    
    function flippCell(indexRow,indexCol){
      if(indexRow>=0 && indexRow<maxRows && indexCol>=0 && indexCol<maxColumns){
        cellsAreLit[indexRow][indexCol]=!cellsAreLit[indexRow][indexCol];
      } 
    }
      
    flippCell(indexRowClicked,indexColClicked);
    flippCell(indexRowClicked+1,indexColClicked);
    flippCell(indexRowClicked-1,indexColClicked);
    flippCell(indexRowClicked,indexColClicked+1);
    flippCell(indexRowClicked,indexColClicked-1);
    let isWon=cellsAreLit.every(row=>row.every(cell=>!cell));
    this.setState({
      hasWon:isWon,
      cellsLit:cellsAreLit
    })
  
  }

  
 

  render() {

    if(this.state.hasWon){
      return(
            <div className="winner">
                <div className="neon-orange">YOU</div>
                <div className="neon-blue">WON !</div>
            </div>
      )
    }
    let finalBoard=[];

      for(let i=0;i<this.props.nbrRows;i++){
        let row=[];
        for(let j=0;j<this.props.nbrColumns;j++){
          row.push(
            <Cell
              key={i+"-"+j} 
              isLit={this.state.cellsLit[i][j]}
              flippCellsAround={this}
              indexRow={i}
              indexCol={j}
              clicked={this.flippCellsAround}
              nbrRows={this.props.nbrRows}
            />
          )
        }
        finalBoard.push(<tr key={i}>{row}</tr>);
      }
    return(
      <div>
        <div className="Board-Title">
            <div className="neon-orange">Lights</div>
            <div className="neon-blue">Out</div>
        </div>
 
        <table className="Board">
            <tbody>
              {finalBoard}
            </tbody>
        </table>
      </div>
 
    )
    
  }
}


export default Board;
