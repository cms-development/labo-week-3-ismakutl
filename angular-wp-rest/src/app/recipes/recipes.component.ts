import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../recipe.service';

// import { RECIPES } from './recipes-mock';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  // selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  // onSelect(recipe: Recipe): void {
  //   this.selectedRecipe = recipe;
  // }

  getRecipes(): void {
    // this.recipes = this.recipeService.getRecipes();
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

}
