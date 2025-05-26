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
import { InstallationGuideComponent } from './pages/installation-guide/installation-guide.component';
import { InsFreshInstallationComponent } from './pages/ins-fresh-installation/ins-fresh-installation.component';
import { InsYamlsComponent } from './pages/ins-yamls/ins-yamls.component';

const routes: Routes = [
  {
    path: '',  // This matches the 'docs' path from app-routing
    component: DocumentationComponent,
    children: [
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