import React, { Component } from 'react';
import RecipeList from './components/RecipeList';

class App extends Component {

  state = {
    recipe: [],
    url: "https://www.food2fork.com/api/search?key=7b6574b5733b39832321e43ed65920c0&q=chicken%20breast&page=2"
  }


  async getRecipe () {
    try {
      let data = await fetch(this.state.url);
      
      let jsonData = await data.json();
  
      this.setState ({
        recipe: jsonData.recipes
      })

    } catch (err) {
      console.log(err);
    }
    // return console.log(jsonData);
  }

componentDidMount () {
  this.getRecipe();
}
  render() {
    console.log(this.state.recipe);
    return (
      <React.Fragment>
        <RecipeList recipeList={this.state.recipe}/>
      </React.Fragment>
    );
  }
}

export default App;
