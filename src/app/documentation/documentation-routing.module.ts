import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { KeyFeaturesComponent } from './pages/key-features/key-features.component';
import { DataserviceComponent } from './pages/dataservice/dataservice.component';
import { ConnectionsComponent } from './pages/connections/connections.component';
import { DataFormatsComponent } from './pages/data-formats/data-formats.component';
import { AgentsComponent } from './pages/agents/agents.component';
import { PluginsComponent } from './pages/plugins/plugins.component';
import { FormulasComponent } from './pages/formulas/formulas.component';
import { AppPanelComponent } from './pages/app-panel/app-panel.component';
import { ApiKeysComponent } from './pages/api-keys/api-keys.component';
import { DeploymentsComponent } from './pages/deployments/deployments.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { SystemRequirementsComponent } from './pages/system-requirements/system-requirements.component';
import { InstallationGuideComponent } from './pages/installation-guide/installation-guide.component';
import { InsFreshInstallationComponent } from './pages/ins-fresh-installation/ins-fresh-installation.component';
import { InsYamlsComponent } from './pages/ins-yamls/ins-yamls.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { UsersComponent } from './pages/users/users.component';
import { BotsComponent } from './pages/bots/bots.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { OpscenterAgentsComponent } from './pages/opscenter-agents/opscenter-agents.component';
import { OpscenterServicesComponent } from './pages/opscenter-services/opscenter-services.component';
import { OpscenterInteractionsComponent } from './pages/opscenter-interactions/opscenter-interactions.component';
import { OpscenterWorkflowsComponent } from './pages/opscenter-workflows/opscenter-workflows.component';
import { InsHowToComponent } from './pages/ins-how-to/ins-how-to.component';
import { LoginProcessComponent } from './pages/login-process/login-process.component';
// import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',  // This matches the 'docs' path from app-routing
    component: DocumentationComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'login',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'login',
      //   component: LoginComponent,
      //   pathMatch: 'full'
      // },
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: OverviewComponent,
        pathMatch: 'full'
      },
      {
        path: 'key-features',
        component: KeyFeaturesComponent,
        pathMatch: 'full'
      },
      {
        path: 'services',
        component: DataserviceComponent,
        pathMatch: 'full'
      },
      {
        path: 'connections',
        component: ConnectionsComponent,
        pathMatch: 'full'
      },
      {
        path: 'data-formats',
        component: DataFormatsComponent,
        pathMatch: 'full'
      },
      {
        path: 'agents',
        component: AgentsComponent,
        pathMatch: 'full'
      },
      {
        path: 'plugins',
        component: PluginsComponent,
        pathMatch: 'full'
      },
      {
        path: 'formulas',
        component: FormulasComponent,
        pathMatch: 'full'
      },
      {
        path: 'app-panel',
        component: AppPanelComponent,
        pathMatch: 'full'
      },
      {
        path: 'api-keys',
        component: ApiKeysComponent,
        pathMatch: 'full'
      },
      {
        path: 'deployments',
        component: DeploymentsComponent,
        pathMatch: 'full'
      },
      {
        path: 'alerts',
        component: AlertsComponent,
        pathMatch: 'full'
      },
      {
        path: 'pipes',
        component: PipesComponent,
        pathMatch: 'full'
      },
      {
        path: 'users',
        component: UsersComponent,
        pathMatch: 'full'
      },
      {
        path: 'bots',
        component: BotsComponent,
        pathMatch: 'full'
      },
      {
        path: 'groups',
        component: GroupsComponent,
        pathMatch: 'full'
      },
      {
        path: 'insights',
        component: InsightsComponent,
        pathMatch: 'full'
      },
      {
        path: 'system-requirements',
        component: SystemRequirementsComponent,
        pathMatch: 'full'
      },{
        path: 'login-process',
        component: LoginProcessComponent,
        pathMatch: 'full'
      },
      {
        path: 'opscenter-services',
        component: OpscenterServicesComponent,
        pathMatch: 'full'
      },
      {
        path: 'opscenter-interactions',
        component: OpscenterInteractionsComponent,
        pathMatch: 'full'
      },
      {
        path: 'opscenter-agents',
        component: OpscenterAgentsComponent,
        pathMatch: 'full'
      },
      {
        path: 'opscenter-workflows',
        component: OpscenterWorkflowsComponent,
        pathMatch: 'full'
      },
      {
        path: 'installation-guide',
        component: InstallationGuideComponent,
        pathMatch: 'full'
      },
      {
        path: 'fresh-install',
        component: InsFreshInstallationComponent,
        pathMatch: 'full'
      },
      {
        path: 'yamls/:type',
        component: InsYamlsComponent
      },
      {
        path: 'mongo',
        component: InsHowToComponent,
      },
      {
        path: 'yamls',
        redirectTo: 'yamls/config',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { } 