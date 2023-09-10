import PageObjects from "../support/PageObjects"

describe('Casos de Prueba', () => {
  beforeEach(() => { cy.visit('/') })
  describe('CP001 - Validar cuotas en compra de equipo -Cuotas.12 -Equipo.A52', () => {
    it('-Cuotas.12 -Equipo.A52', () => {
      PageObjects.search;
      cy.get('[data-value="49"] > a').click({force: true});
      cy.get('.name').contains('A52').click({force: true});
      //ERROR: no está disponible el Producto A.52, lo que impide comprobación de pago en 12 cuotas
    })
  })
  describe('CP002 - Aplicar filtro de equipos -Gama.Alta -Memoria Interna.256GB', () => {
    it('-Gama.Alta -Memoria Interna.256GB', () => {
      PageObjects.search;
      cy.get('[data-value="916"] > a').contains('256').click();
      PageObjects.search;
      cy.get('[data-value="300000_400000"] > a').contains('200000').click();
      //ERROR: no contiene valor de filtrado de 200.000  o superior, siendo el valor mínimo de busqueda de 300.000
    })
  })
    describe('CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa', () => {
      it('-Cuotas.60 -Banco.Credicoop -Tarjeta.Visa', () => {
        cy.get('ol > [data-id="14908"] > a > .product-item-name > .name').click();
        cy.get('#open-installments-modal').click();
        cy.get('#ui-id-21').click({ force: true });
        cy.get('[data-card="Visa"] > span').click({ force: true });
        cy.get('#calculate_btn > .btn-primary').click();
        cy.get('[class="blue"]').contains('60 cuotas');
        //ERROR: no se puede abonar el producto en 60 cuotas con el Banco Credicoop, tarjeta Visa
      })
    })
    describe('CP004 -Intentar agregar 2 productos al carrito y verificar que No se se pueda comprar más de un producto', () => {
      it('Verificar que no se puedan comprar más de un producto por operación', () => {
        PageObjects.search;
        cy.get('[data-value="391"] > a').click({force: true});
        cy.get('ol > [data-id="14386"] > a > .product-item-name > .name').click({force: true});
        cy.get('#swatch_attribute_card').click({force: true});
        cy.get('.Home > a').click({force: true});
        cy.get('ol > [data-id="12814"] > a > .product-item-name > .name').click({force: true});
        cy.get('#swatch_attribute_card').click({force: true});
        cy.get('.message > div').should('contains', 'Solo podés agregar un producto por compra');
        //No se pueden comprar más de un producto por operación
      })
    })
  })
