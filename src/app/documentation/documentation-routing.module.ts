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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { } 