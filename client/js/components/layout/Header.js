import React, { Component, PropTypes } from 'react'

class Header extends Component {

  tagSearch= ()=>{
    console.log('tage search for ${this.refs.tag.value}')
    this.refs.tag.value=''
  }

  addImage = ()=>{
    console.log('goto: /image/add')
  } 

  inputEnter = (event)=>{
    if(event.key == 'Enter'){
      this.tagSearch()
    }
  }
  render() {
    return (
      <div className="header">
        <h1><a href="#"> Hello from Header Component</a></h1>
        
        <div className="main-search">
           <div className="input-group">
             <input type="text" className="input" ref="tag" placeholder="Search..." onKeyPress={this.inputEnter} />
             <button type="button" className="button" onClick={this.tagSearch}>
               <i className = "fa fa-search"></i>Search
             </button>
           </div>

           <button type ="button" onClick={this.addImage} className="button add-button">
            <i className="fa fa-plus"></i>Add Image
           </button>
           
        </div>
        
        <a href ="#"> Login | Register </a>
      </div>
    )
  }
}

export default Header
