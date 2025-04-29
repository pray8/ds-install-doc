import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-dataservice',
    templateUrl: './dataservice.component.html',
    styleUrls: ['./dataservice.component.scss']
})
export class DataserviceComponent implements OnInit {
    lastUpdated = new Date('2024-03-14'); // Set your last updated date
    markdownContent = '';

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.loadMarkdownFile();
    }

    loadMarkdownFile() {
        const markdownPath = '/app/assets/docs/dataservice.md';
        console.log('Attempting to load markdown from:', markdownPath);

        this.http.get(markdownPath, { responseType: 'text' })
            .subscribe({
                next: (content) => {
                    console.log('Markdown content loaded successfully');
                    this.markdownContent = content;
                },
                error: (error) => {
                    console.error('Error loading markdown file:', error);
                    this.markdownContent = '# Error Loading Content\nUnable to load the documentation content.';
                }
            });
    }

    onError(error: any) {
        console.error('Markdown rendering error:', error);
    }

    onLoad() {
        console.log('Markdown rendered successfully');
    }
}
