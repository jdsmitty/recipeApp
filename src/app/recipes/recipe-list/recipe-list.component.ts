import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
		new Recipe('Taco', 'Taco test', 'https://www.deltaco.com/files/menu/item/flatbreadtaco.png'),
		new Recipe('Taco Two', 'this is simply a test of tacos', 'https://www.tacobueno.com/assets/food/tacos/Taco_BFT_Beef_990x725.jpg'),
    new Recipe('Taco Three', 'mmmmmmm yummy tacos', 'https://media-cdn.tripadvisor.com/media/photo-s/02/e1/9b/54/usa-cowboy-tacos.jpg')
	];


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
