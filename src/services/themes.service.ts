import { ThemeNodeModel } from '../components/layers-panel/catalog/layer-tree/layer-tree.model'

export class ThemesService {
  themes: ThemeNodeModel
  constructor() {}

  findById(id: number, node?: ThemeNodeModel): ThemeNodeModel | undefined {
    node = node || this.themes
    if (node.id === id) {
      return node
    } else if (node.children) {
      for (const child of node.children) {
        const match = this.findById(id, child)
        if (match) {
          return match
        }
      }
    }
  }
}

export const themesService = new ThemesService()
