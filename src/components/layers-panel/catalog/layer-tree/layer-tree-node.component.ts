import i18next from 'i18next'
import { html, LitElement, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators'
import { property } from 'lit/decorators.js'
import { i18nMixin } from '../../../../mixins/i18n-lit-element'

@customElement('lux-layer-tree-node')
export class LayerTreeNode extends i18nMixin(LitElement) {
  @property() private node: any

  constructor() {
    super()
  }

  isParent(): boolean {
    return !!this.node.children
  }
  isRoot(): boolean {
    return this.node.depth === 0
  }
  isMaxDepth(): boolean {
    return this.node.depth >= 10
  }

  toggleLayer() {
    const event = new CustomEvent(`layer-toggle`, {
      bubbles: true,
      detail: this.node,
    })
    this.dispatchEvent(event)
  }
  toggleParent() {
    const event = new CustomEvent(`parent-toggle`, {
      bubbles: true,
      detail: this.node,
    })
    this.dispatchEvent(event)
  }

  private getLabel() {
    return i18next.t(this.node.name, { ns: 'client' })
  }

  renderParent(): TemplateResult {
    return html`<div class="mb-px">
      ${this.node.depth === 1
        ? html`
            <button
              class="node-1 w-full text-left flex px-2 py-1.5 uppercase bg-tertiary ${this
                .node.expanded
                ? 'text-white'
                : 'text-secondary'}"
              aria-expanded="${this.node.expanded}"
              @click="${this.toggleParent}"
            >
              <div class="grow">${this.getLabel()}</div>
              <div class="leading-6">
                <div
                  class="fa-sharp fa-solid fa-caret-${this.node.expanded
                    ? 'up'
                    : 'down'}"
                ></div>
              </div>
            </button>
          `
        : this.node.depth > 1 && !this.isMaxDepth()
        ? html`
            <button
              class="w-full text-left flex px-2 py-1.5 ${this.node.expanded
                ? 'bg-secondary text-tertiary'
                : 'bg-white text-primary'}"
              aria-expanded="${this.node.expanded}"
              @click="${this.toggleParent}"
            >
              <div class="grow">${this.getLabel()}</div>
              <div class="leading-6">
                <div
                  class="fa-sharp fa-solid fa-${this.node.expanded
                    ? 'minus'
                    : 'plus'}"
                ></div>
              </div>
            </button>
          `
        : ''}
      ${this.isMaxDepth() ? '' : this.renderChildren()}
    </div>`
  }

  renderLeaf(): TemplateResult {
    return html`
      <button
        class="w-full text-left bg-secondary text-tertiary px-2 ${this.node
          .checked
          ? 'font-bold'
          : ''}"
        @click="${this.toggleLayer}"
      >
        <i class="fa fa-info"></i>
        <i
          class="fa ${this.node.checked ? 'fa-check-square' : 'fa-square'}"
        ></i>
        <span class="hover:underline">${this.getLabel()}</span>
      </button>
    `
  }

  renderChildren(): TemplateResult {
    return this.node.expanded || this.isRoot()
      ? this.node.children?.map((node: LayerTreeNode) => {
          return html`
            <lux-layer-tree-node .node="${node}"></lux-layer-tree-node>
          `
        })
      : ''
  }

  render(): TemplateResult {
    const node = this.node
    if (node) {
      return html`
        <style>
          .node-1:hover .fa-solid {
            color: white;
          }
        </style>
        ${this.isParent() ? this.renderParent() : this.renderLeaf()}
      `
    }
    return html``
  }

  override createRenderRoot() {
    return this
  }
}
