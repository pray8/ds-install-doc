import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-opscenter-interactions',
    templateUrl: './opscenter-interactions.component.html',
    styleUrls: ['./opscenter-interactions.component.scss']
})
export class OpscenterInteractionsComponent implements OnInit {
    lastUpdated = new Date('2024-03-14');
    markdownContent = '';

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.loadMarkdownFile();
    }

    loadMarkdownFile() {
        const markdownPath = '/app/assets/docs/opscenter-interactions.md';
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
