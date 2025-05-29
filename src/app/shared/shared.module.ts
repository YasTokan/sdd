import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './public/header/header.component';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { VisionComponent } from './components/vision/vision.component';
import { TextSectionComponent } from './components/text-section/text-section.component';



@NgModule({
    declarations: [
        HeaderComponent,
        HeroBannerComponent,
        VisionComponent,
        TextSectionComponent,


    ],
    imports: [
        CommonModule

    ],
    exports: [
        HeaderComponent,
        HeroBannerComponent,
        VisionComponent,
        TextSectionComponent
    ],
    providers: [],

})
export class SharedModule { }
