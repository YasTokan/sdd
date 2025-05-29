import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { VisionComponent } from './vision/vision.component';
import { FooterComponent } from './public/footer/footer.component';



@NgModule({
    declarations: [
        HeaderComponent,
        HeroBannerComponent,
        VisionComponent,
        FooterComponent,
        
    ],
    imports: [
        CommonModule

    ],
    exports: [
        HeaderComponent,
        HeroBannerComponent,
        VisionComponent
    ],
    providers: [],

})
export class SharedModule { }
