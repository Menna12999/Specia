import { Meal } from "./Api.js";
 let meal = new Meal();
export class Ui{
    constructor(){

    }
    /*******************************displayByName************************** */
async displayByName(mealName){
    let arr= await  meal.getmealByName(mealName);
    let cartoona = ``;
  for (let i = 0; i < arr.length; i++) {
      cartoona += `
        <div class="col-xl-3 col-md-6 mb-3">
                <div class="content-meal position-relative overflow-hidden rounded-2" id="${arr[i].idMeal}">
                <div class="meal-img">
                   <img src="${arr[i].strMealThumb}" class="w-100 rounded-2" id="${arr[i].idMeal}" alt="${arr[i].strMeal}">
                </div>
                <div class="img-layer position-absolute rounded-2 px-3" id="${arr[i].idMeal}" >
                    <h2 class="me-2 z-1 h5" id="${arr[i].idMeal}" >${arr[i].strMeal}</h2>
                    <i class="fa-solid fa-magnifying-glass-plus" id="${arr[i].idMeal}" ></i>
                 </div>
                </div>
            </div>`;
  }
  $('#dataSearch').html(cartoona);
}
    /*******************************displayByfletter************************** */

async displayByFletter(fletter){
  let arr= await  meal.getmealByFletter(fletter);
  let cartoona = ``;
for (let i = 0; i < arr.length; i++) {
    cartoona += `
      <div class="col-xl-3 col-md-6 mb-3">
              <div class="content-meal position-relative overflow-hidden rounded-2" id="${arr[i].idMeal}">
              <div class="meal-img">
                 <img src="${arr[i].strMealThumb}" class="w-100 rounded-2" alt="${arr[i].strMeal}" id="${arr[i].idMeal}">
              </div>
              <div class="img-layer position-absolute rounded-2 px-3" id="${arr[i].idMeal}">
                  <h2 class="z-1 h5" id="${arr[i].idMeal}">${arr[i].strMeal}</h2>
                  <i class="fa-solid fa-magnifying-glass-plus" id="${arr[i].idMeal}"></i>
               </div>
              </div>
          </div>`;
}
$('#dataSearch').html(cartoona);
}
    /*******************************displaydetails************************** */

async displayMealDetails(id){
  let arr= await  meal.getDetailsMeal(id);
  let recipes = ``;
  for (let i = 1; i <= 20; i++) {
    if (await arr[`strIngredient${i}`]) {
          recipes += `<li class='badge-custom p-3 ms-2 mb-3 rounded-3'>${await arr[`strMeasure${i}`]} ${ await arr[`strIngredient${i}`]}</li>`
      }
    }
    /********************************************************************** */
    let tagsStr=``;
    let tags =await arr?.strTags?.split(",");
    if (!tags) 
      { tags = []; }
    else{
    for (let i=0; i<tags.length; i++) {
        tagsStr += `<li class='badge-custom p-2 ms-2 mb-3 rounded-3'>${tags[i]}</li>`
      }
    }
  let cartoona=``;
  /******************************************************************************/
         cartoona=`<div class="col-lg-5">
              <img src ="${arr.strMealThumb}" class="mb-3 w-100 rounded-3 img-detail">
              <p class="fs-3 fw-bold meal-name">${arr.strMeal}</p>
             </div>
             <div class="col-lg-7">
                <h2>Instructions</h2>
                <p class='meal-instructions'>${arr.strInstructions}</p>
                <p class='fs-4 meal-area'><i class="fa-solid fa-map me-2 custom-color"></i>Area : ${arr.strArea}</p>
                <p class='fs-4 meal-category'><i class="fa-solid fa-layer-group me-2 custom-color"></i>Category : ${arr.strCategory}</p>
                <p class='fs-4 mb-5'><i class="fa-solid fa-pizza-slice me-2 custom-color"></i>Recipes : </p>
                <ul class="mt-3 mb-2 p-0 d-flex flex-wrap list-unstyled align-items-start">
                ${recipes}
                </ul>
                <p class='fs-4 mb-4'><i class="fa-solid fa-link me-2 custom-color"></i>Tags :</p>
                <ul class="my-3 p-0 d-flex flex-wrap list-unstyled align-items-start">
              ${tagsStr}
                </ul>
                <a target="_blank" href="${arr.strSource}" class="btn-src px-4 py-3">Source</a>
                <a target="_blank" href="${arr.strYoutube}" class="btn-youtube px-4 py-3">Youtube</a>
             </div>`

 $('#fixed-box').html(cartoona);
}

/*******************************************display all category*************************************************** */

async displayAllCategory(){
  let arr= await  meal.getAllCategory();
  let cartoona = ``;
  console.log(arr);
for (let i = 0; i < arr.length; i++) {
    cartoona += `
      <div class="col-xl-3 col-md-6 mb-3">
              <div class="content-meal position-relative overflow-hidden rounded-2" id="${arr[i].strCategory}">
              <div class="meal-img">
                 <img src="${arr[i].strCategoryThumb}" class="w-100 rounded-2" alt="${arr[i].strCategory}" id="${arr[i].strCategory}">
              </div>
              <div class="img-layer position-absolute rounded-2 px-3" id="${arr[i].strCategory}">
                  <h2 class="z-1 h5" id="${arr[i].strCategory}">${arr[i].strCategory}</h2>
                  <p id="${arr[i].strCategory}">${arr[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}..</p>
               </div>
              </div>
          </div>`;
}
$('#dataCategory').html(cartoona);
}
/*******************************************display meal by category*************************************************** */

async displayMealsByCategories(category){
  let arr= await meal.getMealsByCategory(category);
  console.log(arr)
  let cartoona = ``;
for (let i = 0; i < arr.length; i++) {
    cartoona += `
      <div class="col-xl-3 col-md-6 mb-3">
              <div class="content-meal position-relative overflow-hidden rounded-2" id="${arr[i].idMeal}">
              <div class="meal-img" id="${arr[i].idMeal}">
                 <img src="${arr[i].strMealThumb}" class="w-100 rounded-2" alt="${arr[i].strMeal}" id="${arr[i].idMeal}">
              </div>
              <div class="img-layer position-absolute rounded-2 px-3" id="${arr[i].idMeal}">
                  <h2 class="z-1 h5 id="${arr[i].idMeal}"">${arr[i].strMeal}</h2>
                  <i class="fa-solid fa-magnifying-glass-plus" id="${arr[i].idMeal}"></i>
               </div>
              </div>
          </div>`;
}
$('#categoryList').html(cartoona);
}
/***************************************list area*************************************** */
async displayArea(){
  let arr= await meal.getAreas();
  console.log(arr)
  let cartoona = ``;
for (let i = 0; i < arr.length; i++) {
    cartoona += `<div class="col-xl-3 col-md-6 mb-3">
            <div class="area d-flex flex-column justify-content-center align-items-center" id="${arr[i].strArea}">
            <i class="fa-solid fa-house-laptop" id="${arr[i].strArea}"></i>
            <h4 class="fs-4 fw-bold" id="${arr[i].strArea}">${arr[i].strArea}</h4>
          </div>
        </div>`;
}
$('#area-data').html(cartoona);
}
/******************************************display meal by area***************************************************** */
async displayMealsByAreas(area){
  let arr= await meal.getMealsByArea(area);
  console.log(arr)
  let cartoona = ``;
for (let i = 0; i < arr.length; i++) {
    cartoona += `
      <div class="col-xl-3 col-md-6 mb-4">
              <div class="content-meal position-relative overflow-hidden rounded-2" id="${arr[i].idMeal}">
              <div class="meal-img" id="${arr[i].idMeal}">
                 <img src="${arr[i].strMealThumb}" class="w-100 rounded-2" alt="${arr[i].strMeal}" id="${arr[i].idMeal}">
              </div>
              <div class="img-layer position-absolute rounded-2 px-3" id="${arr[i].idMeal}">
                  <h2 class="z-1 h5 id="${arr[i].idMeal}"">${arr[i].strMeal}</h2>
                  <i class="fa-solid fa-magnifying-glass-plus" id="${arr[i].idMeal}"></i>
               </div>
              </div>
          </div>`;
}
$('#areaMeals').html(cartoona);
}
/**********************************display list ingredients********************************************************** */
async displayingredients(){
  let arr= await meal.getIngredients();
  console.log(arr)
  let cartoona = ``;
for (let i = 0; i < arr.length; i++) {
    cartoona += `<div class="col-xl-3 col-md-6 mb-3">
            <div class="ingredient d-flex flex-column justify-content-center align-items-center text-center" id="${arr[i].strIngredient}">
            <i class="fa-solid fa-drumstick-bite" id="${arr[i].strIngredient}"></i>
            <h4 id='${arr[i].strIngredient}'>${arr[i].strIngredient}</h4>
            <p id="${arr[i].strIngredient}">${arr[i].strDescription.split(" ").slice(0, 20).join(" ")}..</p>
          </div>
        </div>`;
}
$('#ingredients-data').html(cartoona);
}
/********************************display meal ingredients********************************************************** */
async displayMealsIngredients(ingredient){
  let arr= await meal.getMealsIngredients(ingredient);
  console.log(arr)
  let cartoona = ``;
for (let i = 0; i < arr.length; i++) {
    cartoona += `
      <div class="col-xl-3 col-md-6 mb-4">
              <div class="content-meal position-relative overflow-hidden rounded-2" id="${arr[i].idMeal}">
              <div class="meal-img" id="${arr[i].idMeal}">
                 <img src="${arr[i].strMealThumb}" class="w-100 rounded-2" alt="${arr[i].strMeal}" id="${arr[i].idMeal}">
              </div>
              <div class="img-layer position-absolute rounded-2 px-3" id="${arr[i].idMeal}">
                  <h2 class="z-1 h5 id="${arr[i].idMeal}"">${arr[i].strMeal}</h2>
                  <i class="fa-solid fa-magnifying-glass-plus" id="${arr[i].idMeal}"></i>
               </div>
              </div>
          </div>`;
}
$('#ingredientsMeals').html(cartoona);
}
/******************************************onload********************************************* */
async displayMealsOnLoad(mealName){
  let arr= await  meal.getmealByName(' ');
  let cartoona = ``;
for (let i = 0; i < arr.length; i++) {
    cartoona += `
      <div class="col-xl-3 col-md-6 mb-3">
              <div class="content-meal position-relative overflow-hidden rounded-2" id="${arr[i].idMeal}">
              <div class="meal-img">
                 <img src="${arr[i].strMealThumb}" class="w-100 rounded-2" id="${arr[i].idMeal}" alt="${arr[i].strMeal}">
              </div>
              <div class="img-layer position-absolute rounded-2 px-3" id="${arr[i].idMeal}" >
                  <h2 class="me-2 z-1 h5" id="${arr[i].idMeal}" >${arr[i].strMeal}</h2>
                  <i class="fa-solid fa-magnifying-glass-plus" id="${arr[i].idMeal}" ></i>
               </div>
              </div>
          </div>`;
}
$('#onloadMeals').html(cartoona);
}
}
  