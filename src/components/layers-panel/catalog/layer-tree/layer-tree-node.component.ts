import { html, LitElement, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators'
import { property } from 'lit/decorators.js'

@customElement('lux-layer-tree-node')
export class LayerTreeNode extends LitElement {
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
      detail: this.node.id,
    })
    this.dispatchEvent(event)
  }
  toggleParent() {
    const event = new CustomEvent(`parent-toggle`, {
      bubbles: true,
      detail: this.node.id,
    })
    this.dispatchEvent(event)
  }

  renderParent(): TemplateResult {
    return html`
      ${this.node.depth === 1
        ? html`
            <div
              class="cursor-pointer px-2 py-1.5 uppercase bg-main-tertiary text-main-secondary"
              @click="${this.toggleParent}"
            >
              ${this.node.name}
            </div>
          `
        : this.node.depth > 1 && !this.isMaxDepth()
        ? html`
            <div
              class="cursor-pointer px-2 py-1.5 mt-px bg-white text-main-primary"
              @click="${this.toggleParent}"
            >
              ${this.node.name}
            </div>
          `
        : ''}
      ${this.isMaxDepth() ? '' : this.renderChildren()}
    `
  }

  renderLeaf(): TemplateResult {
    return html`
      <div
        class="cursor-pointer bg-main-secondary text-main-tertiary px-2 ${this
          .node.checked
          ? 'font-bold'
          : ''}"
        @click="${this.toggleLayer}"
      >
        <i class="fa fa-info"></i>
        <a>
          <i class="fa fa-square"></i>
          ${this.node.name}
        </a>
      </div>
    `
  }

  renderChildren(): TemplateResult {
    return this.node.expanded || this.isRoot()
      ? this.node.children?.map((node: LayerTreeNode) => {
          return html`
            <div class="">
              <lux-layer-tree-node .node="${node}"></lux-layer-tree-node>
            </div>
          `
        })
      : ''
  }

  render(): TemplateResult {
    const node = this.node
    if (node) {
      return this.isParent() ? this.renderParent() : this.renderLeaf()
    }
    return html``
  }

  override createRenderRoot() {
    return this
  }
}
