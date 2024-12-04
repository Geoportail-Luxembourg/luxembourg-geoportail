describe('Feature Info', () => {
  beforeEach(() => {
    cy.intercept('GET', 'getfeatureinfo*').as('getFeatureInfo')
  })

  describe('Default template', () => {
    describe('Display basic feature info for multiple layers', () => {
      beforeEach(() => {
        cy.visit(
          '/?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=302-269&opacities=1&bgLayer=orthogr_2013_global'
        )
        cy.get('div.ol-viewport').click(300, 300, { force: true })
        cy.wait('@getFeatureInfo')
      })
      it('should display title, attributes, link in the infoPanel when clicking on a layer feature (first layer)', () => {
        cy.get('[data-cy="infoPanel"]').should('exist')
        cy.get('[data-cy="defaultTemplateTitle"]')
          .first()
          .should('contain.text', 'Communes (Noms)')
        cy.get('[data-cy="defaultTemplateAttributes"]')
          .first()
          .find('div')
          .should('have.length', '3')
        cy.get('[data-cy="defaultTemplateLink"]')
          .first()
          .should('contain.text', 'Lien direct vers cet objet')
          .should('have.attr', 'href')
          .and(
            'include',
            '/theme/main?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=302-269&opacities=1-1&bgLayer=orthogr_2013_global&rotation=0&features=&time=--&fid=269_0709'
          )
      })
      it('should display title, attributes, link in the infoPanel when clicking on a layer feature (second layer)', () => {
        cy.get('[data-cy="infoPanel"]').should('exist')
        cy.get('[data-cy="defaultTemplateTitle"]')
          .eq(1)
          .should('contain.text', 'Communes')
        cy.get('[data-cy="defaultTemplateAttributes"]')
          .eq(1)
          .find('div')
          .should('have.length', '3')
        cy.get('[data-cy="defaultTemplateLink"]')
          .eq(1)
          .should('contain.text', 'Lien direct vers cet objet')
          .should('have.attr', 'href')
          .and(
            'include',
            '/theme/main?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=302-269&opacities=1-1&bgLayer=orthogr_2013_global&rotation=0&features=&time=--&fid=269_0402'
          )
      })
    })
    describe('Display profile and exports in feature info', () => {
      beforeEach(() => {
        cy.visit(
          '/?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=808&opacities=1&bgLayer=orthogr_2013_global'
        )
        cy.get('div.ol-viewport').click(320, 330, { force: true })
        cy.wait('@getFeatureInfo')
      })
      it('should display title, attributes, link in the infoPanel when clicking on a layer feature', () => {
        cy.get('[data-cy="infoPanel"]').should('exist')
        cy.get('[data-cy="defaultTemplateTitle"]')
          .first()
          .should('contain.text', 'Pistes cyclables nationales')
        cy.get('[data-cy="defaultTemplateAttributes"]')
          .first()
          .find('div')
          .should('have.length', '3')
        cy.get('[data-cy="defaultTemplateLink"]')
          .first()
          .should('contain.text', 'Lien direct vers cet objet')
          .should('have.attr', 'href')
          .and(
            'include',
            '/theme/main?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=808&opacities=1&bgLayer=orthogr_2013_global&rotation=0&features=&time=&fid=808_5447'
          )
      })
      it('should display profile besides basic feature info', () => {
        cy.get('[data-cy="infoPanel"]').should('exist')
        cy.get('[data-cy="featItemProfile"]').should('exist')
        cy.get('[data-cy="featItemProfileCumul"]').should(
          'contain.text',
          'Δ+33 m Δ-77 m Δ-44 m'
        )
        cy.get('[data-cy="featItemProfile"] svg').should('exist')
        cy.get('[data-cy="featItemProfile"] svg g.grid-y > g.tick').should(
          'have.length',
          12
        )
        cy.get('[data-cy="featItemProfile"] svg g.x.axis > g.tick').should(
          'have.length',
          8
        )
        cy.get('[data-cy="featItemProfile"] svg g.y.axis > g.tick')
          .eq(5)
          .find('text')
          .should('have.text', '250')
      })
    })
    describe('Display iframe in feature info (for water level graph)', () => {
      beforeEach(() => {
        cy.visit(
          '/?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=655&opacities=1&bgLayer=orthogr_2013_global'
        )
        cy.get('div.ol-viewport').click(355, 320, { force: true })
        cy.wait('@getFeatureInfo')
      })
      it('should display title, attributes, link in the infoPanel when clicking on a layer feature', () => {
        cy.get('[data-cy="infoPanel"]').should('exist')
        cy.get('[data-cy="defaultTemplateTitle"]')
          .first()
          .should('contain.text', "Niveau d'eau")
        cy.get('[data-cy="defaultTemplateAttributes"]')
          .first()
          .find('div')
          .should('have.length', '4')
        cy.get('[data-cy="defaultTemplateLink"]')
          .first()
          .should('contain.text', 'Lien direct vers cet objet')
          .should('have.attr', 'href')
          .and(
            'include',
            '/theme/main?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=655&opacities=1&bgLayer=orthogr_2013_global&rotation=0&features=&time=&fid=655_256'
          )
      })
      it('should display iframe besides basic feature info', () => {
        cy.get('[data-cy="infoPanel"]').find('iframe').should('exist')
      })
    })
    describe('Display feature info solar potential', () => {
      beforeEach(() => {
        cy.visit(
          '/?lang=fr&X=678664&Y=6412182&version=3&zoom=16&layers=1813&opacities=1&bgLayer=orthogr_2013_global'
        )
        cy.get('div.ol-viewport').click(300, 300, { force: true })
        cy.wait('@getFeatureInfo')
      })
      it('should display title, attributes and a calculator link button in the infoPanel when clicking on a layer feature', () => {
        cy.get('[data-cy="infoPanel"]').should('exist')
        cy.get('[data-cy="defaultTemplateTitle"]')
          .first()
          .should('contain.text', 'Potentiel solaire')
        cy.get('[data-cy="defaultTemplateAttributes"]')
          .first()
          .find('div')
          .should('have.length', '6')
        cy.get('[data-cy="defaultTemplateSolarLink"]')
          .first()
          .find('button')
          .should(
            'contain.text',
            "Lien direct vers le calculateur d'efficacité économique"
          )
        cy.get('[data-cy="defaultTemplateSolarLink"]')
          .first()
          .should('have.attr', 'href')
          .and(
            'include',
            'https://maps.tetraeder.solar/st_luxemburg_22/2d/6726'
          )
      })
    })
    describe('Display audio in feature info', () => {
      beforeEach(() => {
        cy.visit(
          '/?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=2842&opacities=1&bgLayer=orthogr_2013_global'
        )
        cy.get('div.ol-viewport').click(355, 320, { force: true })
        cy.wait('@getFeatureInfo')
      })
      it('should display title, attributes and a calculator link button in the infoPanel when clicking on a layer feature', () => {
        cy.get('[data-cy="infoPanel"]').should('exist')
        cy.get('[data-cy="defaultTemplateTitle"]')
          .first()
          .should('contain.text', 'test_sproochatlas_audio')
        cy.get('[data-cy="defaultTemplateAttributes"]')
          .first()
          .find('div')
          .should('have.length', '2')
        cy.get('[data-cy="defaultTemplateAttributes"]')
          .first()
          .find('a')
          .should('have.attr', 'href')
          .and('include', 'https://lod.lu/uploads/LSA/WAV/ABC_001_ab_01.wav')
        cy.get('[data-cy="defaultTemplateAttributes"]')
          .first()
          .find('audio')
          .should('exist')
      })
    })
  })
})
