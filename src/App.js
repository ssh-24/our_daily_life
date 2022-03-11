import React, { Component } from 'react';
import Header from './layout/Header';
import Lists from './components/Lists';
import './assets/css/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header:{title:'Our Daily Life', sub: '우리의 일상'},
      list:[
        {id:1, title:'SSH', desc:'Some description'},
        {id:2, title:'DSH', desc:'Some description'},
        {id:3, title:'LSS', desc:'Some description'},
        {id:4, title:'HJH', desc:'Some description'},
        {id:5, title:'YSL', desc:'Some description'},
        {id:6, title:'LJM', desc:'Some description'},
        {id:7, title:'ACS', desc:'Some description'},
        {id:8, title:'SSJ', desc:'Some description'},
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Header
          title={this.state.header.title}
          sub={this.state.header.sub}>
        </Header>
        <Lists data={this.state.list}></Lists>
      </div>
    );
  }
}

export default App;