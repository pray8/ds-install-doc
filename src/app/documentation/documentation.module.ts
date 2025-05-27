import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { InstallationGuideComponent } from './pages/installation-guide/installation-guide.component';
import { InsFreshInstallationComponent } from './pages/ins-fresh-installation/ins-fresh-installation.component';
import { InsYamlsComponent } from './pages/ins-yamls/ins-yamls.component';
import { InsHowToComponent } from './pages/ins-how-to/ins-how-to.component';
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
    AppPanelComponent,
    InstallationGuideComponent,
    InsFreshInstallationComponent,
    InsYamlsComponent,  
    InsHowToComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DocumentationRoutingModule,
    MarkdownModule.forChild(),
    FormsModule
  ],
  exports: [
    PageFeedbackComponent
  ]
})
export class DocumentationModule { } 