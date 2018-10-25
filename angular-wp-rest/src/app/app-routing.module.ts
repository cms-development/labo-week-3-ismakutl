import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  // { path: 'recepten', component: RecipesComponent },
  // { path: 'recept/:id', component: RecipeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
