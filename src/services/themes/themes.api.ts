import { themesApiFixture } from '../../__fixtures__/themes.api.fixture'
import type { ConfigModel } from './themes.model'

class ThemesApi {
  async fetchThemes(): Promise<ConfigModel> {
    return new Promise(resolve => resolve(themesApiFixture()))
  }
}

export const themesApi = new ThemesApi()
