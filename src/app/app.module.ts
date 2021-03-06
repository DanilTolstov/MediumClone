import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AuthModule} from "./auth/auth.module";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AuthModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
