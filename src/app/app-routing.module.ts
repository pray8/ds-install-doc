import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreshInstallComponent } from './fresh-install/fresh-install.component';
import { InsFreshInstallationComponent } from './documentation/pages/ins-fresh-installation/ins-fresh-installation.component';

const routes: Routes = [
    { path: 'architecture', component: FreshInstallComponent },
    {
        path: 'docs',
        loadChildren: () => import('./documentation/documentation.module').then(m => m.DocumentationModule)
    },
    { path: '', redirectTo: 'docs', pathMatch: 'full' },
    { path: '**', redirectTo: 'docs' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }