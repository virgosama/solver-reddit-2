import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {reducers} from './_stores/reducers';
import {MapEffect} from './_stores/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MaterialModule} from './material.module';
import {LoadingComponent} from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ListPageComponent,
    DetailsPageComponent,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('listings', reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([
      MapEffect
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
