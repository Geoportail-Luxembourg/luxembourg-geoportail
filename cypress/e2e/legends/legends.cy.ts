describe('Legends', () => {
  beforeEach(() => {    
    cy.intercept(
      'GET',
      '/getMetadata?lang=fr&uid=de5373d6-340f-4203-a065-da7550a03cc4_2050',
      { fixture: 'legends_parcelles.html' }
    ).as('mockedMetadataParcelles')

    cy.intercept(
      'GET',
      '/legends/get_html?lang=fr&name=pcn_parcelles%3Ashow&id=359',
      { fixture: 'legends_parcelles.html' }
    ).as('mockedParcelles')

    cy.intercept(
      'GET',
      '/legends/get_html?lang=fr&name=energie%3Apotentiel_solaire&id=1813',
      { fixture: 'legends_potentiel_solaire.html' }
    ).as('mockedSolaire')

    cy.clearLocalStorage()
    cy.visit('/')
  })

  describe('When user opens the legend panel', () => {
    beforeEach(() => {
      cy.get('[data-cy="legendsOpenClose"] > button').click()
    })

    it('displays the bg legend and a txt saying there are no legends for layers', () => {
      cy.get('[data-cy="legendsPanel"]').should('exist')
      cy.get('[data-cy="legendsPanel"]').should(
        'contain.text',
        "Aucune légende n'est disponible pour les couches sélectionnées."
      )
      cy.get('[data-cy="legendBgLayer"]').should('exist')
    })

    it('hides all other side panels', () => {
      cy.get('[data-cy="layerPanel"]').should('not.exist')
      cy.get('[data-cy="myMapsPanel"]').should('not.exist')
    })
  })

  describe('When user adds layers without legends', () => {
    beforeEach(() => {
      cy.get('[data-cy="catalogButton"]').click()
      cy.get('[data-cy="parentLayerLabel-242"]').find('button').first().click()
      cy.get('[data-cy="parentLayerLabel-309"]').click()
      cy.get('[data-cy="layerLabel-269"]').click()
      cy.get('[data-cy="layerLabel-349"]').click()
      cy.get('[data-cy="layerLabel-329"]').click()
      cy.get('[data-cy="legendsOpenClose"] > button').click()
    })

    it('displays a txt saying there are no legend for selected layers', () => {
      cy.get('[data-cy="legendsPanel"]').should(
        'contain.text',
        "Aucune légende n'est disponible pour les couches sélectionnées."
      )
    })
  })

  describe('When user adds layers with legends', () => {
    beforeEach(() => {
      cy.get('[data-cy="catalogButton"]').click()
      cy.get('[data-cy="layerLabel-1813"]').click()
      cy.get('[data-cy="parentLayerLabel-242"]').click()
      cy.get('[data-cy="parentLayerLabel-248"]').click()
      cy.get('[data-cy="layerLabel-359"]').click()
      cy.get('[data-cy="legendsOpenClose"] > button').click()
    })

    it('displays the legends for both layers', () => {
      cy.get('[data-cy="legendLayer"]').should('have.length', 2)
    })
  })

  describe('When user adds layers with legends and one without a legend', () => {
    beforeEach(() => {
      cy.get('[data-cy="catalogButton"]').click()
      cy.get('[data-cy="layerLabel-1813"]').click()
      cy.get('[data-cy="parentLayerLabel-242"]').click()
      cy.get('[data-cy="parentLayerLabel-248"]').click()
      cy.get('[data-cy="layerLabel-359"]').click()

      cy.get('[data-cy="parentLayerLabel-309"]').click()
      cy.get('[data-cy="layerLabel-269"]').click()
      cy.get('[data-cy="layerLabel-349"]').click()
      cy.get('[data-cy="layerLabel-329"]').click()
      cy.get('[data-cy="legendsOpenClose"] > button').click()
    })

    it('displays the legends for both layers having legend', () => {
      cy.wait('@mockedMetadataParcelles').then(interception => {
        cy.log(interception.response.body)
      })
      cy.wait('@mockedParcelles').then(interception => {
        cy.log(interception.response.body)
      })
      cy.wait('@mockedSolaire').then(interception => {
        cy.log(interception.response.body)
      })

      cy.log(Cypress.env('API_URL'))
      cy.get('[data-cy="legendLayer"]').should('have.length', 2)
    })
  })

  describe('When a layer with a legend is removed', () => {
    beforeEach(() => {
      cy.get('[data-cy="catalogButton"]').click()
      cy.get('[data-cy="layerLabel-262"]').click()
      cy.get('[data-cy="legendsOpenClose"] > button').click()
    })

    it('displays a txt saying there are no legend to show', () => {
      cy.get('[data-cy="legendLayer"]').should('have.length', 1)

      cy.get('[data-cy="selectedBg"]').find('button').click()
      cy.get('[data-cy="available-bgs"]')
        .find('button')
        .filter('[title*="Carte topographique"]')
        .click()

      cy.get('[data-cy="legendsPanel"]').should(
        'contain.text',
        "Aucune légende n'est disponible pour les couches sélectionnées."
      )

      cy.get('[data-cy="legendLayer"]').should('have.length', 0)
    })
  })
})
