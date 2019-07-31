import React, { Component } from 'react'
import Recipe from './Recipe';

export default class RecipeList extends Component {
    render() {
        // console.log("----------------------- ", this.props);
        return (
            <React.Fragment>
                <div className="container">
                    <h1 className="text-slanted text-center my-5">Recipe List</h1>

                    <div className="row">
                        {this.props.recipes.map((recipe) =>{
                            return <Recipe key={recipe.recipe_id} recipe={recipe}/>
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
