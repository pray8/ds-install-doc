import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

interface MenuItem {
  title: string;
  children: (MenuItem | MenuLink)[];
}


interface MenuLink {
  path: string;
  title: string;
}

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  selectedDocType = 'User Documentation';

  constructor(private router: Router) {
    // Listen to route changes to update selectedDocType
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('installation-guide') || event.url.includes('fresh-install') || event.url.includes('yamls') || event.url.includes('mongo')) {
          this.selectedDocType = 'Installation Guide';
        } else {
          this.selectedDocType = 'User Documentation';
        }
      }
    });
  }

  ngOnInit() {
    // Set initial value based on route
    if (this.router.url.includes('installation-guide') || this.router.url.includes('fresh-install') || this.router.url.includes('yamls') || this.router.url.includes('mongo')) {
      this.selectedDocType = 'Installation Guide';
    } else {
      this.selectedDocType = 'User Documentation';
    }
  }

  menuItems: MenuItem[] = [
    {
      title: 'Introduction',
      children: [
        { path: 'overview', title: 'Overview' },
        { path: 'key-features', title: 'Key Features' },
        { path: 'system-requirements', title: 'System Requirements' },
        // { path: 'techstacks', title: 'Techstacks and Components' }
      ]
    },
    {
      title: 'Getting Started',
      children: [
        { path: 'login-process', title: 'Login Process' }
      ]
    },
    {
      title: 'Studio',
      children: [
        // { path: 'author-overview', title: 'Overview' },
        {
          title: 'DATA',
          children: [
            { path: 'services', title: 'Services' },
            { path: 'connections', title: 'Connections' }
          ]
        },
        {
          title: 'INTEGRATION',
          children: [
            { path: 'pipes', title: 'Pipes' },
            { path: 'data-formats', title: 'Data Formats' },
            { path: 'agents', title: 'Agents' },
            { path: 'plugins', title: 'Plugins' },
            { path: 'formulas', title: 'Formulas' }
          ]
        },
        {
          title: 'MANAGEMENT',
          children: [
            { path: 'app-panel', title: 'App Panel' },
            { path: 'deployments', title: 'Deployments' },
            { path: 'users', title: 'Users' },
            { path: 'bots', title: 'Bots' },
            { path: 'groups', title: 'Groups' },
            { path: 'api-keys', title: 'API Keys' },
            { path: 'alerts', title: 'Alerts' },
            { path: 'insights', title: 'Insights' }
          ]
        }
      ]
    },
    {
      title: "OpsCenter",
      children: [
        // { path: 'appcenter-overview', title: 'Overview' },
        { path: 'data-services', title: 'Data Services' },
        { path: 'workflow', title: 'Workflow' },
        { path: 'interactions', title: 'Interactions' }
      ]
    }
  ];

  installationGuideMenu = [
    {
      title: 'Getting Started',
      children: [
        { path: 'installation-guide', title: 'Overview' },
        { path: 'fresh-install', title: 'Fresh Installation' },
        {
          title: 'YAMLS',
          children: [
            { path: 'yamls/config', title: 'ConfigMap' },
            { path: 'yamls/cache', title: 'Cache' },
            { path: 'yamls/messaging', title: 'Messaging' },
            { path: 'yamls/user', title: 'User' },
            { path: 'yamls/sm', title: 'Service Manager (sm)' },
            { path: 'yamls/mon', title: 'Monitoring (mon)' },
            { path: 'yamls/bm', title: 'Base Manager (bm)' },
            { path: 'yamls/common', title: 'Common' },
            { path: 'yamls/gw', title: 'Gateway (gw)' },
            { path: 'yamls/fm', title: 'File Manager (fm)' }
          ]
        },
        {
          title: 'How To',
          children: [{path : 'mongo', title: 'change MongoDB connection'}]
        }
      ]
    }
  ];

  onDocumentSelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedDocType = value;
    if (value === 'Installation Guide') {
      this.router.navigate(['docs/installation-guide']);
    } else {
      this.router.navigate(['docs/overview']);
    }
  }

  isMenuItem(item: MenuItem | MenuLink): item is MenuItem {
    return 'children' in item;
  }

  isMenuLink(item: MenuItem | MenuLink): item is MenuLink {
    return 'path' in item;
  }
} 