import { Component, OnInit } from '@angular/core';
import { RECIPES } from './recipes-mock';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = RECIPES;
  selectedRecipe: Recipe;
  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
  constructor() { }

  ngOnInit() {
  }

}
