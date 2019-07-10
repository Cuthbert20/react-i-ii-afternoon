import React, {Component} from 'react';
import './App.css';
import data from './data'
import ButtonPrev from './components/ButtonPrev'
import ButtonNext from './components/ButtonNext'
import Edit from './components/Edit'

class App extends Component {
  constructor(){
    super()

    this.state = {
      // name: '',
      // from: '',
      // jobTitle: "",
      // employer: '',
      // favMovie: [],
      index: 0
    }
    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)
    this.edit = this.edit.bind(this)
  }
  previous(){
    this.setState({
      index: this.state.index - 1
    })
  }
  next(){
    this.setState({
      index: this.state.index + 1
    })
  }
  edit(){
    
  }
  render(){
    console.log(data)
    console.log(this.state.index)
    let dataFn = data.map(elm => {
      return(
        <div key= {elm.id} className="user-info" >
        <h1>{elm.name.first} {elm.name.last}</h1>
        <h3>{`From: ${elm.city}, ${elm.country}`}</h3>
        <h3>{`Job Title: ${elm.title}`}</h3>
        <h3>{`Employer: ${elm.employer}`}</h3>
        <h3>Favorite Movie:</h3>
        <ol className="movies" >
          <li>{elm.favoriteMovies[0]}</li>
          <li>{elm.favoriteMovies[1]}</li>
          <li>{elm.favoriteMovies[2]}</li>
        </ol>
        </div>
      )
    })
    
  return (
    <div className="App">
      <header className="head">
        Home
      </header>
      <div>{dataFn[this.state.index]}</div>
      {/* <button onClick={this.previous} >Previous</button> */}
      <ButtonPrev previous={this.previous} />
      <Edit edit={this.edit} />
      {/* <button onClick={this.next} >Next</button> */}
      <ButtonNext next={this.next} />
    </div>
  );
}
}

export default App;
