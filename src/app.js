import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render(){
    return (
      <div className="body">
      <div className="site-wrapper">
         <div className="site-wrapper-inner">
           <div className="main-container">
             <div className="inner cover">
               <span className="glyphicon glyphicon-link"></span>
               <h1>ShortRL</h1>

               <div className="row">

                 <div className="col-lg-12">
                   <div className="input-group input-group-lg">
                     <input id="url-field" type="text" className="form-control" placeholder="Paste a link..."/>
                     <span className="input-group-btn">
                       <button className="btn btn-shorten" type="button">SHORTEN</button>
                     </span>
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
