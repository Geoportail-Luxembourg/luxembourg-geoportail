describe('Version 2 in url - Coordinates and Zoom', () => {
  beforeEach(() => {
    cy.visit(
      '/?zoom=11&X=74204.10937&Y=77809.20313&layers=communes_labels,cantons_labels,districts_labels&layers_indices=5,6,7&layers_opacity=1,0.5,0.25&layers_visibility=false,true,true&bgOpacity=22'
    )
  })

  it('updates the url with version 3', () => {
    cy.url().should('contains', 'version=3')
  })

  describe('When zoom is given', () => {
    it('converts the zoom in v3 and sets the new zoom in the new url', () => {
      cy.url().should('contains', 'zoom=19')
    })
  })

  describe('When X, Y are given', () => {
    it('converts the coordinates and sets the new X,Y in the new url', () => {
      cy.url().should('contains', 'X=683258')
      cy.url().should('contains', 'Y=6377713')
    })
  })
})
