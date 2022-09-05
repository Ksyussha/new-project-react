
import { Component } from 'react';
import './App.css';
import Header from './Components/header/header';
import Nav from './Components/nav/nav';
import Content from './Components/content/content';

class  App extends Component {
  constructor(props){
    super(props)
  this.state={
   
    data:[
      {title: 'Новости', link: '/news',id:1},
      {title:'Главная страница',link:'/main', id:2},
      {title:'Кабинет',link:'/user',id:3},
      {title:'Кабинет',link:'/user',id:4},  
      {title:'Кабинет',link:'/user',id:5}
    ]
  }
  this.maxId=4
}

render(){
  return (
    <div className="App"> 
      <Header/>
      <Nav  data={this.state.data}/>
      <Content/>
     
    </div>
  );
}
}
export default App;
