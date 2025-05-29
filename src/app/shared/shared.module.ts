import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './public/header/header.component';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { VisionComponent } from './components/vision/vision.component';
import { TextSectionComponent } from './components/text-section/text-section.component';
import { ScopeComponent } from './components/scope/scope.component';
import { ScopeCardComponent } from './components/scope-card/scope-card.component';
import { FooterComponent } from './public/footer/footer.component';



@NgModule({
    declarations: [
        HeaderComponent,
        HeroBannerComponent,
        VisionComponent,
        TextSectionComponent,
        ScopeComponent,
        ScopeCardComponent,
        FooterComponent


    ],
    imports: [
        CommonModule

    ],
    exports: [
        HeaderComponent,
        HeroBannerComponent,
        VisionComponent,
        TextSectionComponent,
        ScopeCardComponent,
        ScopeComponent,
        FooterComponent

    ],
    providers: [],

})
export class SharedModule { }
