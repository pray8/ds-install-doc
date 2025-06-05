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
import { ApiKeysComponent } from './pages/api-keys/api-keys.component';
import { DeploymentsComponent } from './pages/deployments/deployments.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { SystemRequirementsComponent } from './pages/system-requirements/system-requirements.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { UsersComponent } from './pages/users/users.component';
import { BotsComponent } from './pages/bots/bots.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { InsHowToComponent } from './pages/ins-how-to/ins-how-to.component';
import { OpscenterAgentsComponent } from './pages/opscenter-agents/opscenter-agents.component';
import { OpscenterServicesComponent } from './pages/opscenter-services/opscenter-services.component';
import { OpscenterInteractionsComponent } from './pages/opscenter-interactions/opscenter-interactions.component';
import { OpscenterWorkflowsComponent } from './pages/opscenter-workflows/opscenter-workflows.component';

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
    ApiKeysComponent,
    DeploymentsComponent,
    AlertsComponent,
    SystemRequirementsComponent,
    PipesComponent,
    UsersComponent,
    BotsComponent,
    GroupsComponent,
    InsightsComponent,
    InsYamlsComponent,  
    InsHowToComponent,
    OpscenterAgentsComponent,
    OpscenterServicesComponent,
    OpscenterInteractionsComponent,
    OpscenterWorkflowsComponent
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