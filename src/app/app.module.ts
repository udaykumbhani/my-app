import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './My-components/header/header.component';
import { FooterComponent } from './My-components/footer/footer.component';
import { SliderComponent } from './My-components/slider/slider.component';
import { CategoriesComponent } from './My-components/categories/categories.component';
import { RecipesComponent } from './My-components/recipes/recipes.component';
import { KitchenComponent } from './My-components/kitchen/kitchen.component';
import { InstagramComponent } from './My-components/instagram/instagram.component';
import { DiffrecipesComponent } from './My-components/diffrecipes/diffrecipes.component';
import { GalleryComponent } from './My-components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CategoriesComponent,
    RecipesComponent,
    KitchenComponent,
    InstagramComponent,
    DiffrecipesComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
