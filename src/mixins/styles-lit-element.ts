import { css, CSSResult, LitElement, unsafeCSS } from 'lit'

import cssFa from 'bundle-text:@fortawesome/fontawesome-free/css/all.min.css'
import cssGlobal from 'bundle-text:../styles/tailwind.global.css'

const globalStyle = css`
  ${unsafeCSS(cssGlobal)}
`
const faStyle = css`
  ${unsafeCSS(cssFa)}
`

type Constructor<T = {}> = new (...args: any[]) => T

export const StylesMixin = <T extends Constructor<LitElement>>(
  superClass: T
) => {
  class StylesMixinClass extends superClass {
    static styles: CSSResult[] = [globalStyle, faStyle]
  }

  return StylesMixinClass as T
}
