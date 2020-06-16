import React,{ Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    bacon : 1.2,
    meat : 1.8,
    salad : 0.5,
    cheese :0.4
}
class BurgerBuilder  extends Component{
    state ={
        ingredient : {
            meat : 0,
            cheese : 0,
            salad  : 0,
            bacon : 0
        },
        totalPrice : 5,
        purchasable : false,
        purchasing : false
    }

    updatePurchasable (ingredient) {

        const sum = Object.keys(ingredient).map(igKey => {
            return ingredient[igKey];
        })
        .reduce((sum, el)=>{
            return sum + el;
        },0)
        this.setState({purchasable : sum >= 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredient
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState ({totalPrice :newPrice, ingredient : updatedIngredient});
        this.updatePurchasable(updatedIngredient);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredient
        };
        updatedIngredient[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState ({totalPrice :newPrice, ingredient : updatedIngredient});
        this.updatePurchasable(updatedIngredient);

    }

    purchaseHandler = () => {
        this.setState({purchasing : true});
    }

    purchaseCloseModalHandler = () => {
        this.setState({purchasing : false});
    }

    purchaseContinueHandler = () => {
        alert ('Continue Please');
    }
    render(){
        const disabledInfo ={
            ...this.state.ingredient
        };

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <Aux>
                <Modal show ={this.state.purchasing} ClosePurchaseModal ={this.purchaseCloseModalHandler}>
                    <OrderSummary price = {this.state.totalPrice} ingredient = {this.state.ingredient} purchContinue = {this.purchaseContinueHandler} purchCancel ={this.purchaseCloseModalHandler}/>
                </Modal>
               <Burger ingredient ={this.state.ingredient}/>
               <BuildControls ingredientAdded ={this.addIngredientHandler} ingredientRemoved ={this.removeIngredientHandler}
               disabled ={disabledInfo} price = {this.state.totalPrice} purchase = {this.state.purchasable} ordered ={this.purchaseHandler}
               />
            </Aux>
        );
    }

}

export default BurgerBuilder;