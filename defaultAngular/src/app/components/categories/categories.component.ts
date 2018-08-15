import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../../dataLayer/data-manager.service';
import { ComponentManagerService } from '../../services/component-manager.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoriesList;

  getCategories() {

  }

  updateCategoriesList(list) {
    this.categoriesList = list;
  }

  constructor(private dataManager: DataManagerService,
  private componentManager: ComponentManagerService) {
    this.dataManager.getAllCategories().subscribe(x => this.componentManager.transferCategories(x));
  }

  ngOnInit() {
    this.componentManager.categoriesSourceMethodCalled$
      .subscribe(x => this.updateCategoriesList(x));
  }

}
