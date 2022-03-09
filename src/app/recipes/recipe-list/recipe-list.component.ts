import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://hips.hearstapps.com/delish/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://hips.hearstapps.com/delish/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
