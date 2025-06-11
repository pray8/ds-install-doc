import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-login-process',
    templateUrl: './login-process.component.html',
    styleUrls: ['./login-process.component.scss']
})
export class LoginProcessComponent implements OnInit {
    lastUpdated = new Date('2024-03-14');
    markdownContent = '';

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.loadMarkdownFile();
    }

    loadMarkdownFile() {
        const markdownPath = '/app/assets/docs/login-process.md';
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
