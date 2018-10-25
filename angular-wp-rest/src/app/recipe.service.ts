import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Recipe } from './models/recipe';
// import { RECIPES } from './recipes/recipes-mock';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private wpRestRecipe = 'http://33b81135.ngrok.io/wp-json/wp/v2/recipe';
  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient
  ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`RecipeService: ${message}`);
  }

  getRecipes(): Observable<Recipe[]> {
    return this.httpClient
      .get<Recipe[]>(this.wpRestRecipe)
      .pipe(
        tap(() => this.log('fetched recipes')),
        catchError(this.handleError('getRecipes', []))
      );
    // this.messageService.add('RecipeService: fetched recipes');
    // return of(RECIPES);
  }
  getRecipe(id: number): Observable<Recipe> {
    return this.httpClient
      .get<Recipe>(`${this.wpRestRecipe}/${id}`)
      .pipe(
        tap((recipes) => {
          console.log(recipes);
          return this.log(`fetched recipe (id:${id})`);
        }),
        catchError(this.handleError<Recipe>(`getRecipe id:${id}`))
      );
    // this.messageService.add(`RecipeService: fetched recipe id=${id}`);
    // return of(RECIPES.find(recipe => recipe.id === id));
  }
}
