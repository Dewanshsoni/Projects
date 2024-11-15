const API_KEY = "275d58779ccf4e22af03e792e8819fff";

const RecipeListElement = document.getElementById("recipie-list");

function displayRecipes(recipes) {
  RecipeListElement.innerHTML = " ";
  recipes.forEach((recipe) => {
    const recipeItemElement = document.createElement("li");
    recipeItemElement.classList.add("recipie-item");

     reciepeImageElement = document.createElement("img");
    reciepeImageElement.src= recipe.image;
    reciepeImageElement.alt= "recipe";

     recipeTitleElement= document.createElement("h2");
    recipeTitleElement.innerText= recipe.title;

     recipeingredientsElements=document.createElement("p");
    recipeingredientsElements.innerHTML= `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient)=> ingredient.original) .join(", ")}`;

    recipeLinkElement=document.createElement("a");
    recipeLinkElement.href= recipe.sourceUrl;
    recipeLinkElement.innerText= "View recipe"

    recipeItemElement.appendChild(reciepeImageElement);
    recipeItemElement.appendChild(recipeTitleElement);
    recipeItemElement.appendChild(recipeingredientsElements);
    recipeItemElement.appendChild(recipeLinkElement);
    RecipeListElement.appendChild(recipeItemElement);
  });
}

async function getRecipies() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=12&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data.recipes;
}

async function init() {
  const recipes = await getRecipies();
  displayRecipes(recipes);
}

init();
