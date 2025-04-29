import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { KeyFeaturesComponent } from './pages/key-features/key-features.component';
import { PageFeedbackComponent } from './shared/page-feedback/page-feedback.component';
import { MarkdownModule } from 'ngx-markdown';
import { DataserviceComponent } from './pages/dataservice/dataservice.component';
import { ConnectionsComponent } from './pages/connections/connections.component';
import { DataFormatsComponent } from './pages/data-formats/data-formats.component';
import { AgentsComponent } from './pages/agents/agents.component';
import { PluginsComponent } from './pages/plugins/plugins.component';
import { FormulasComponent } from './pages/formulas/formulas.component';
import { AppPanelComponent } from './pages/app-panel/app-panel.component';


@NgModule({
  declarations: [
    DocumentationComponent,
    OverviewComponent,
    KeyFeaturesComponent,
    PageFeedbackComponent,
    DataserviceComponent,
    ConnectionsComponent,
    DataFormatsComponent,
    AgentsComponent,
    PluginsComponent,
    FormulasComponent,
    AppPanelComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DocumentationRoutingModule,
    MarkdownModule
  ],
  exports: [
    PageFeedbackComponent
  ]
})
export class DocumentationModule { } 