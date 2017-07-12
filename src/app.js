import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Shrink from './shrink'
import $ from 'jquery'

class App extends Component {

  constructor() {
    super();
  }
  componentDidMount() {
    $('#link').html("");
  }

  render(){
    return (
      <div className="body">
      <div className="site-wrapper">
         <div className="site-wrapper-inner">
           <div className="main-container">
             <div className="inner cover">
               <h1>
                <span className="glyphicon glyphicon-link"></span>
                <h3><span className="glyphicon glyphicon-arrow-down"></span></h3>
                <h6><span className="glyphicon glyphicon-link"></span></h6>
                Crisp URL
               </h1>
               <div className="row">
                 <div className="col-lg-12">
                   <div className="input-group input-group-lg">
                     <input id="url-field" type="text" className="form-control" placeholder="Type or paste a link"/>

                     <Shrink />

                   </div>
                 </div>
                 <div className="col-lg-12">
                   <div id="link"></div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
