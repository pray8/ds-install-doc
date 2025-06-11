import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreshInstallComponent } from './fresh-install/fresh-install.component';
import { CodeBlockDirective } from './utils/code-block.directive';
import { HeadingDirective } from './utils/heading.directive';
import { SubHeadingDirective } from './utils/sub-heading.directive';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        FreshInstallComponent,
        CodeBlockDirective,
        HeadingDirective,
        SubHeadingDirective,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        ReactiveFormsModule,
        MarkdownModule.forRoot({
            loader: HttpClientModule,
            sanitize: SecurityContext.NONE
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
