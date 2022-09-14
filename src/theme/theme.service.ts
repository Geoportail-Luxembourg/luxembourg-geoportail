import { LuxTheme } from './theme.model';
import { BehaviorSubject, map } from 'rxjs';

export class ThemeService {
  themes$ = new BehaviorSubject<LuxThemes>({
    main: {
      color: '41 128 185',
    },
    tourisme: {
      color: '232 76 61',
    },
  });
  currentTheme$ = new BehaviorSubject<LuxTheme>({
    color: '41 128 185',
  });
  //FIXME: derive currentTheme$ from themes$
  // this.themes$.pipe(map(themes => themes['main']))
  constructor() {
    this.currentTheme$.subscribe(theme => this.setColor(theme.color));
  }
  setColor(color: string) {
    const root = document.querySelector(':root');
    root.style.setProperty('--color-primary', color);
  }
  setCurrentTheme(theme: LuxTheme) {
    this.currentTheme$.next(theme);
  }
}

export const LuxThemeService = new ThemeService();
