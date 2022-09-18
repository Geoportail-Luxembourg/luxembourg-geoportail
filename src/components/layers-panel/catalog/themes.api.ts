import { themesApiFixture } from '../../../../test/fixtures/themes.api.fixture'

class ThemesApi {
  async fetchThemes(): Promise<any> {
    return new Promise(resolve => resolve(themesApiFixture()))
  }
}

export const themesApi = new ThemesApi()
