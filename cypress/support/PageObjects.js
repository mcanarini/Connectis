class PageObjects {
    constructor(){
        this.filter = '.block-subtitle';
    }

    search = ()=>{
        cy.get('.block-subtitle').click();
    }
}

export default PageObjects