import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fresh-install',
  templateUrl: './fresh-install.component.html',
  styleUrls: ['./fresh-install.component.scss']
})

export class FreshInstallComponent implements OnInit {

  images: Array<any>;
  envList: Array<any>;
  constructor(private httpClient: HttpClient) {
    this.images = [];
    this.envList = [];
  }

  ngOnInit(): void {
    this.httpClient.get('assets/data/images.data.json').subscribe((res: any) => {
      this.images = res;
    });
    this.httpClient.get('assets/data/env.data.json').subscribe((res: any) => {
      this.envList = res;
    });
  }
}
