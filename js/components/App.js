import React, { Component } from 'react';
import Input from './Input'
import Results from './Results';
import DailyRequirements from './DailyRequirements';
import AddMeal from './AddMeal';
import { searchFood, fetchNutrients } from '../modules/ajax/api-requests';

const App  = React.createClass({
  getInitialState() {
    return {
      searchTerms: ['pizza'],
      results: [],
      foodItems: []
    };
  },

  componentWillMount() {
    this.searchForFood(this.state.searchTerms);
  },

  updateSearchTerms(searchTerms) {
    this.setState({
      searchTerms
    });
  },

  searchForFood(searchTerms) {
    const posiWords = [];
    const negiWords = [];

    searchTerms.forEach(word => {
      if (word[0] === '-') {
        negiWords.push(word.substr(1));
      } else {
        posiWords.push(word)
      }
    });

    searchFood(posiWords, negiWords).then(foods => {
      this.setState({
        results: foods.data
      })
    });
  },

  getFoodNutrients(id) {
    fetchNutrients(id).then(nutrients => {
      // Add nutrients array to the data for the result that was clicked
      this.state.results.some((result, i, arr) => {
        const selectedResult = result.ndb_no === id;

        if (selectedResult && !result.nutrients) {
          arr[i].nutrients = nutrients.data;
          this.setState({
            results: arr
          })
        }

        return selectedResult;
      })
    });
  },

  addFoodToMeal(foodItem) {
    this.setState({
      foodItems: [...this.state.foodItems, foodItem]
    });
  },

  removeFoodItem(itemIdToRemove) {
    this.setState({
      foodItems: this.state.foodItems.filter(foodItem => {
        return foodItem.id !== itemIdToRemove;
      })
    });
  },

  postMeal(meal) {
    // POST request
  },

  render() {
    const {
      searchTerms,
      results,
      foodItems
    } = this.state;

    return (
      <div className="flex-column" style={{maxWidth: 600}}>
        <DailyRequirements foodItems={foodItems} />
        <AddMeal
          foodItems={foodItems}
          removeFoodItem={this.removeFoodItem}
          postMeal={this.postMeal}
        />
        <h3 className="margin-3-bottom margin-5-top">
          Search For Food
        </h3>
        <Input
          searchForFood={this.searchForFood}
          searchTerms={searchTerms}
          updateSearchTerms={this.updateSearchTerms}
        />
        <Results
          addFoodToMeal={this.addFoodToMeal}
          getFoodNutrients={this.getFoodNutrients}
          results={results}
        />
      </div>
    );
  },

});

export default App;
