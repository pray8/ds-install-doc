import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreshInstallComponent } from './fresh-install/fresh-install.component';
import { CodeBlockDirective } from './utils/code-block.directive';
import { HeadingDirective } from './utils/heading.directive';
import { SubHeadingDirective } from './utils/sub-heading.directive';

@NgModule({
  declarations: [
    AppComponent,
    FreshInstallComponent,
    CodeBlockDirective,
    HeadingDirective,
    SubHeadingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
