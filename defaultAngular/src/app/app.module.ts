import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { RightMenuComponent } from './components/right-menu/right-menu.component';
import { EditPanelComponent } from './components/edit-panel/edit-panel.component';
import { ItemsPanelComponent } from './components/items-panel/items-panel.component';
import { TodoItems, TodoItem } from './dataLayer/data-manager.service';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RightMenuComponent,
    EditPanelComponent,
    ItemsPanelComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoItems],
  bootstrap: [AppComponent]
})
export class AppModule { }
