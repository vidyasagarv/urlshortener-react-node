import React, { Component } from 'react'
import $ from 'jquery'

class Shrink extends Component {

  constructor() {
   super();
   this._handleClick = this._handleClick.bind(this);
  }


  _handleClick() {
    $.ajax({
     url: '/api/shrink',
     type: 'POST',
     dataType: 'JSON',
     data: {url: $('#url-field').val()},
     success: function(data){
         let resultHTML = '<a class="result" href="' + data.shortUrl + '">'
             + data.shortUrl + '</a>';
         $('#link').html(resultHTML);
         $('#link').hide().fadeIn('slow');
     }
   });
  }

  render() {
    return (
      <span className="input-group-btn">
        <button className="btn btn-shorten" onClick={this._handleClick} type="button">SHRINK</button>
      </span>
    )
  }
}

export default Shrink
