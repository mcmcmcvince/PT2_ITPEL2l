import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

 private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/1024px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
    {
      id: 'r3',
      title: 'Chicken Arroz Caldo',
      imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F1fc7c9bc9eb692647451d33c6bb68059%2F1644073740IMG_1112.JPG&q=60&c=sc&orient=true&poi=auto&h=512',
      ingredients: ['Chicken', 'Broth', 'Ginger', 'Onion']
    },
    {
      id: 'r4',
      title: 'Pancit',
      imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9077665.jpg&q=60&c=sc&orient=true&poi=auto&h=512',
      ingredients: ['Dried Noodles', 'Chicken Breast', 'Cabbage', 'Soy Sauce']
    },
    {
      id: 'r5',
      title: 'Chicken Tinola',
      imageUrl: 'https://www.allrecipes.com/thmb/TQJhMknP2OUSgESqYyZBZtcIW5Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/212929-chicken-tinola-4x3-1-167b1eadea9a448d8e00dac30c501d66.jpg',
      ingredients: ['Chicken Legs & Thigh', 'Chicken Broth', 'Fresh Spinach']
    },
    {
      id: 'r6',
      title: 'Chicken Adobo',
      imageUrl: 'https://www.allrecipes.com/thmb/IpZD4TwJoKeW9Ev_mn8gwWkUiWQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/128699-famous-hicken-adobo-ddmfs-117-1x1-1-3bef902d58434edfa04a4f1cb7d1a208.jpg',
      ingredients: ['Chicken Cut', 'Soy Sauce', 'White Vinegar']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return[...this.recipes];
  }

  getRecipe(recipeId:string){
    return {...this.recipes.find(recipe => recipe.id === recipeId)};
  }
  
}
