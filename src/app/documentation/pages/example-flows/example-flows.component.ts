import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-ins-yamls',
    templateUrl: './example-flows.component.html',
    styleUrls: ['./example-flows.component.scss']
})
export class ExampleFlowsComponent implements OnInit {
    lastUpdated = new Date('2024-03-14');
    markdownContent = '';

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            const exampleFlowType = params['type'] || 'LMS-flow';
            this.loadMarkdownFile(exampleFlowType);
        });
    }

    loadMarkdownFile(type: string) {
        console.log('Type:', type);
        const markdownPath = `assets/docs/exampleFlows/${type}.md`;
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
