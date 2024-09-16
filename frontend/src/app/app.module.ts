import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FlexLayoutModule} from '@angular/flex-layout'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgxMdModule} from "ngx-md"

import {CoreModule} from "./core/core.module"
import {SharedModule} from './shared/shared.module'

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {StoreModule} from '@ngrx/store'
import {reducers, metaReducers} from './store/app.reducers'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {environment} from '../environments/environment'
import {EffectsModule} from '@ngrx/effects'
import {AppEffects} from './store/app.effects'

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FlexLayoutModule,
        CoreModule,
        SharedModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument({connectInZone: true}) : [],
        EffectsModule.forRoot([AppEffects]),
        NgxMdModule.forRoot()], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {
}
