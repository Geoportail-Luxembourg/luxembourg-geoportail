describe('Style selector', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy="myLayersButton"]').click()
    cy.get('.fa-pencil').click()
  })

  it('renders the style selector properly', () => {
    cy.get('[data-cy="styleSelector"]').should('not.be.hidden')
    cy.get('[data-cy="styleSelector"] > div > button').should('have.length', 3)
  })

  it('has no style value in localStorage', () => {
    expect(localStorage.getItem('basemap_2015_global')).to.be.null
  })

  describe('Style panel', () => {
    describe('When closing the style panel', () => {
      beforeEach(() => {
        cy.get('[data-cy="panelClose"]').click()
      })

      it('closes the style panel', () => {
        cy.get('[data-cy="styleSelector"]').should('not.exist')
      })

      it('shows the layer panel', () => {
        cy.get('[data-cy="layerPanel"]').should('exist')
      })
    })
  })

  describe('Simple style selector', () => {
    beforeEach(() => {
      cy.get('[data-cy="styleSelector"]')
        .find('button')
        .filter(':visible')
        .first()
        .as('simple')
    })
    it('renders the simple style selector properly', () => {
      cy.get('@simple')
        .siblings()
        .find('button')
        .filter(':visible')
        .should('have.length', 6)
    })
    it('sets style to 4th style of list', () => {
      const newStyle = `{"medium":[{"label":"Roads primary","color":"#f9c50d","lines":["lu_road_trunk_primary","lu_bridge_major","lu_tunnel_major","lu_road_major_motorway"],"visible":true},{"label":"Roads secondary","color":"#ffffff","lines":["lu_road_minor","lu_road_secondary_tertiary","lu_bridge_minor","lu_road_path","lu_bridge_path","lu_bridge_railway case","lu_bridge_path case"],"visible":true},{"label":"Vegetation","color":"#839836","opacity":"1","fills":["lu_landcover_wood","lu_landcover_grass","lu_landuse_stadium","lu_landuse_cemetery"],"visible":true},{"label":"Buildings","color":"#d6d3ce","opacity":"1","fillExtrusions":["lu_building-3d_public","lu_building-3d"],"fills":["lu_building","lu_building_public"],"lines":["lu_bridge_railway","lu_railway","lu_tunnel_railway"],"visible":true},{"label":"Water","color":"#2a5ba8","lines":["lu_waterway","lu_waterway_tunnel","lu_waterway_intermittent"],"fills":["lu_water"],"visible":true},{"label":"Background","color":"#eeeeee","backgrounds":["background"],"visible":true},{"label":"Hillshade","hillshades":["hillshade"],"visible":false}]}`
      cy.get('@simple')
        .siblings()
        .find('button')
        .filter(':visible')
        .eq(3)
        .click()
      cy.window().then(win => {
        expect(win.localStorage.getItem('basemap_2015_global')).to.eq(newStyle)
      })
    })
  })

  describe('Medium style selector', () => {
    beforeEach(() => {
      cy.get('[data-cy="styleSelector"] > div > button')
        .eq(1)
        .as('medium')
        .click()
    })
    it('renders the medium style selector properly', () => {
      cy.get('@medium')
        .siblings()
        .find('input[type="checkbox"]')
        .filter(':visible')
        .should('have.length', 7)
      cy.get('@medium')
        .siblings()
        .find('input[type="color"]')
        .filter(':visible')
        .should('have.length', 6)
    })
    it('sets "Roads primary" to "visible":false', () => {
      const newStyle = `{"medium":[{"label":"Roads primary","color":"#f7f7f7","lines":["lu_road_trunk_primary","lu_bridge_major","lu_tunnel_major","lu_road_major_motorway"],"visible":false},{"label":"Roads secondary","color":"#f7f7f7","lines":["lu_road_minor","lu_road_secondary_tertiary","lu_bridge_minor","lu_road_path","lu_bridge_path","lu_bridge_railway case","lu_bridge_path case"],"visible":true},{"label":"Vegetation","color":"#B8D293","opacity":"1","fills":["lu_landcover_wood","lu_landcover_grass","lu_landuse_stadium","lu_landuse_cemetery"],"visible":true},{"label":"Buildings","color":"#D6AA85","opacity":"1","fillExtrusions":["lu_building-3d_public","lu_building-3d"],"fills":["lu_building","lu_building_public"],"lines":["lu_bridge_railway","lu_railway","lu_tunnel_railway"],"visible":true},{"label":"Water","color":"#94c1e1","lines":["lu_waterway","lu_waterway_tunnel","lu_waterway_intermittent"],"fills":["lu_water"],"visible":true},{"label":"Background","color":"#e7e7e7","backgrounds":["background"],"visible":true},{"label":"Hillshade","hillshades":["hillshade"],"visible":true}]}`
      cy.get('@medium')
        .siblings()
        .find('input[type="checkbox"]')
        .filter(':visible')
        .first()
        .click()
      cy.window().then(win => {
        expect(win.localStorage.getItem('basemap_2015_global')).to.eq(newStyle)
      })
    })
  })
})
