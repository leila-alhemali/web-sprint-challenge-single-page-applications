
// - [ ] test that you can add text to the box
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form

describe('Pizza Orders', () => {
    beforeEach(() => {
     cy.visit('http://localhost:3000/pizza')   
    })

    const nameInput = () => cy.get('input[name=name]');
    const specialInput = () => cy.get('input[name=special]');
    const topping1 = () => cy.get('[id="topping1"');
    const topping2 = () => cy.get('[id="topping2"');
    const submitBtn = () => cy.get('[id="order-button"]')

    describe('Fill out box', () => {
        it('can type in the input', () => {
            nameInput()
                .should('have.value', '')
                .type('NAME')
                .should('have.value', 'NAME')
        })
        it('can type in the input', () => {
            specialInput()
                .should('have.value', '')
                .type('extra sauce')
                .should('have.value', 'extra sauce')
        })
    })

    describe('Can check multiple boxes', () => {

    
    it ('can check the checkbox', () => {
        topping1()
        .check()
        .should('be.checked')
        topping2()
        .check()
        .should('be.checked')
    })   

    describe('Can submit the form', () => {
        it('Submits', () => {
            submitBtn().click();
        })
    })

    })    
})