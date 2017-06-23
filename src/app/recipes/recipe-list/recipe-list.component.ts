import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('Taco', 'this is simply a test', 'https://www.deltaco.com/files/menu/item/flatbreadtaco.png'),
		new Recipe('Taco Two', 'this is simply a test', 'https://www.deltaco.com/files/menu/item/flatbreadtaco.png')
	];

  constructor() { }

  ngOnInit() {
  }

}
