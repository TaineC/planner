import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class planner extends Component {

  constructor (props){
    super(props);

    this.state = {
      noteInputs: '',
      lists: [{notes:[]}]
    };
  };

  noteInputValue = (e) => {
    this.setState({noteInputs: e.target.value})
  }

  addNote = (e) => {
    e.preventDefault();

    var note = {
      id: Date.now(),
      text: this.state.noteInputs
    }

    var noteList = [...this.state.notes,note];

    this.setState({
      notes: noteList,
      noteInputs:''
    })
  }

  createNewList = (e) => {
    e.preventDefault();

    var newList = {
      id: Date.now(),
    }

    var addNewList = [...this.state.lists,newList];

    this.setState({
      lists: addNewList
    })
  }

  render(){
    return(

      <div className="wrap">
      
        {this.state.lists.map((list)=>{
          return(
            <div className="container container1" key={list.id}>

              {this.state.notes.map((note)=>{
                return (
                  <div className="notes" key={note.id}>
                    <div className="note-text">
                      {note.text}
                    </div>
                  </div>
                  )
                })
              }
                    
              <div className="notes new-note" id="create-note">
                <label htmlFor="note">New Note</label>
                <input type="text" className="write-note" id="write-note" value={this.state.noteInputs} onChange={this.noteInputValue}/>
                <button type="submit" className="btn btn-primary" id="add-note" onClick={this.addNote}>Add Note</button>
              </div>
            </div>
            )
          })
        }
        
        <div className="container container2">
            <div className="new-list" id="new-list">
                <button className="btn2 btn-primary" id="create-new-list" onClick={this.createNewList}>New List</button>
            </div>
        </div>
    </div>
    

    );
  }
}
  

export default planner;
