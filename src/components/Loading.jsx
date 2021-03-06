import React, { Component } from 'react';
import '../css/loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="load-container">
          <div className="loading-text">Carregando...</div>
          <div className="loading-logo" />
        </div>
      </div>
    );
  }
}

export default Loading;
