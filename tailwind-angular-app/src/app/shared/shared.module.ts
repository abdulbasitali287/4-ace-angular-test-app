import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../components/layouts/frontend/banner/banner.component';



@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent // Export the BannerComponent to make it available to other modules
  ]
})
export class SharedModule { }
