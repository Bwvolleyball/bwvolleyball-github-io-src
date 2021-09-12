import {Component, isDevMode} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material/tooltip';


/** Custom global options the configure the tooltip's default show/hide delays. */
export const globalTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 300,
  hideDelay: 300,
  touchendHideDelay: 300,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: globalTooltipDefaults}
  ]
})
export class AppComponent {

  public isDevMode: boolean = isDevMode();

  private icons: CustomSvgIcon[] = [
    { namespace: 'logos', name: 'github_logo', path: '/assets/svgs/github-logo.svg' },
    { namespace: 'logos', name: 'twitter_logo', path: '/assets/svgs/twitter-logo.svg' },
    { namespace: 'general', name: 'blogging', path: '/assets/svgs/blogging.svg' },
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.icons.forEach(icon => {
      const url = domSanitizer.bypassSecurityTrustResourceUrl(icon.path);
      !!icon.namespace ? matIconRegistry.addSvgIconInNamespace(icon.namespace, icon.name, url) : matIconRegistry.addSvgIcon(icon.name, url);
    });
  }

}

/**
 * A custom SVG that will be registered to to <mat-icon>.
 *
 * Usage: <mat-icon svgIcon="[namespace:]name"></mat-icon>
 */
interface CustomSvgIcon {
  namespace?: string;
  name: string;
  path: string;
}
