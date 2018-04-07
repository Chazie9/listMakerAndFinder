import React, { Component } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


import './Board.css';

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boardId: this.props.boardId,
            boardTitle: this.props.boardTitle,
            boardColor: this.props.boardColor,

        }
    }

    


    render() {
        return (
            <div className="board-outline">
                
            </div>

        )
    }
}

export const ItemTypes = {
    KNIGHT: 'knight'
  };

// export default Board;
export default DragDropContext(HTML5Backend)(Board);