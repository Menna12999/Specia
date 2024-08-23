export class Meal{
constructor(){
}
/***********************Search meal by name****************************** */
async getmealByName(mealName){
try{
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    let data = await response.json();
    return data.meals.slice(0, 20);
    }
    catch (error) {
        console.error(error);
    }
};
/***************************************List all meals by first letter****************************************/
async getmealByFletter(fletter){
    try{
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${fletter}`);
        let data = await response.json();
        return data.meals.slice(0, 20);
        }
        catch (error) {
            console.error(error);
        }
    };
    async getDetailsMeal(id){
        try{
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            let data = await response.json();
            return data.meals[0];
            }
            catch (error) {
                console.error(error);
            }
        };
/**********************************************List all meal categories*********************************************/    
async getAllCategory(){
    try{
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        let data = await response.json();
        return data.categories;
        }
        catch (error) {
            console.error(error);
        }
    };
/**********************************************list clicked category********************************************* */
async getMealsByCategory(category){
    try{
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        let data = await response.json();
        return data.meals.slice(0, 20);
        }
        catch (error) {
            console.error(error);
        }
    };
    /**********************************************list areas********************************************************* */
    async getAreas(){
        try{
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
            let data = await response.json();
            return data.meals;
            }
            catch (error) {
                console.error(error);
            }
        };

/*******************************************area meals************************************** */
async getMealsByArea(area){
    try{
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
        let data = await response.json();
        return data.meals;
        }
        catch (error) {
            console.error(error);
        }
    };


/************************************************list ingredients********************************************* */

async getIngredients(){
    try{
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        let data = await response.json();
        return data.meals.slice(0, 20);
        }
        catch (error) {
            console.error(error);
        }
    };
/*****************************************ingredients meals********************************************************** */
    async getMealsIngredients(Ingredient){
        try{
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredient}`);
            let data = await response.json();
            return data.meals.slice(0, 20);
            }
            catch (error) {
                console.error(error);
            }
        };

}