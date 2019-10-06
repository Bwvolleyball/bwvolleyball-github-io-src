import {AfterViewInit, Component, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-medium-feed',
  templateUrl: './medium-feed.component.html',
  styleUrls: ['./medium-feed.component.sass']
})
export class MediumFeedComponent implements AfterViewInit {

  postsPerLine = 1; // any number, stories per row.
  picture = 'small'; // choices are: big, small, none.
  ratio = 'landscape'; // choices are: original, landscape, square.

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
  }

  ngAfterViewInit() {
    const widget = this.renderer.createElement('script');
    widget.type = 'text/javascript';
    widget.src = 'https://medium-widget.pixelpoint.io/widget.js';
    const parameters = this.createMediumParameters();
    this.renderer.appendChild(this.document.body, widget);
    widget.addEventListener('load', () => this.renderer.appendChild(this.document.body, parameters));
  }

  private createMediumParameters(): any {
    const parameters = this.renderer.createElement('script');
    parameters.type = 'text/javascript';
    parameters.text = `
      MediumWidget.Init({renderTo: '#medium-widget', params:
       {"resource":"https://medium.com/@brandon.ward1993",
       "postsPerLine":${this.postsPerLine},
       "limit":10,
       "picture":"${this.picture}",
       "fields":["description","author","claps","likes","publishAt"],
       "ratio":"${this.ratio}"}})
      `;
    return parameters;
  }

}
