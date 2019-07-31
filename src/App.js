import React, { Component } from 'react'
import './App.css'
import RecipeList from './components/RecipeList';

export default class App extends Component {

  state = {
    recipes: [],
    url: "https://www.food2fork.com/api/search?key=703c460406af691c61a277dd7dd0cb4b&q=chicken%20breast&page=2",
  }
  

async getRecipe(){

  try{
    let data = await fetch(this.state.url);
   
    let jsonData = await data.json();

    console.log(jsonData);
    
    this.setState({
      recipes: jsonData.recipes
    })


  }catch(err){
    console.log(err);
  }

}

  componentDidMount(){
    this.getRecipe();
  }


  
  render() {

    return (
      <React.Fragment>

        <RecipeList recipes={this.state.recipes}/>

      </React.Fragment>

    )
  }
}
