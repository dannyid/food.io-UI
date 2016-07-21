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
      foodItems: [],
      totalNutrition: new Map()
    };
  },

  getDefaultProps() {
    return {
      style: {
        alignItems: 'stretch',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        width: '500px'
      }
    }
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
    const newTotalNutrition = foodItem.foodItem.nutrients.reduce((totalNutrition, { nutr_no, nutr_val }) => {
      const actualAmountOfNutrientInThisMuchFood = +nutr_val * (foodItem.amount / 100);

      totalNutrition.set(nutr_no, (totalNutrition.get(nutr_no) || 0) + actualAmountOfNutrientInThisMuchFood);

      return totalNutrition;
    }, this.state.totalNutrition);

    this.setState({
      foodItems: [...this.state.foodItems, foodItem],
      totalNutrition: newTotalNutrition
    });
  },

  removeFoodItem(itemIdToRemove) {
    this.setState({
      foodItems: this.state.foodItems.filter(foodItem => {
        console.log(foodItem, itemIdToRemove);
      })
    });
  },

  postMeal(meal) {
    // POST request
  },

  render() {
    const {
      addFoodToMeal,
      getFoodNutrients,
      postMeal,
      removeFoodItem,
      searchForFood,
      updateSearchTerms,
      props: {
        style
      },
      state: {
        searchTerms,
        results,
        foodItems,
        totalNutrition
      }
    } = this;

    return (
      <div style={{display: 'flex', justifyContent: 'center', overflow: 'hidden'}} >
        <div style={style}>
          <DailyRequirements totalNutrition={totalNutrition} />
          <AddMeal
            addFoodToMeal={addFoodToMeal}
            foodItems={foodItems}
            removeFoodItem={removeFoodItem}
            postMeal={postMeal}
          />
          <h3 style={{marginBottom: 15}}>
            Seach For Food
          </h3>
          <Input
            searchForFood={searchForFood}
            searchTerms={searchTerms}
            updateSearchTerms={updateSearchTerms}
          />
          <Results
            addFoodToMeal={addFoodToMeal}
            getFoodNutrients={getFoodNutrients}
            results={results}
          />
        </div>
      </div>
    );
  }
});

export default App;
