import { themesApiFixture } from '../../../test/fixtures/themes.api.fixture'
import { ConfigModel } from '../../services/themes/themes.model'

class ThemesApi {
  async fetchThemes(): Promise<ConfigModel> {
    return new Promise(resolve => resolve(themesApiFixture()))
  }
}

export const themesApi = new ThemesApi()
