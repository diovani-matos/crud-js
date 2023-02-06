class Validator {
    constructor(){
        this.validations = [
            'data-min-length',
        ]
    }

    // iniciar a validação emt odos os campos

    validate(form) {

        //pegar todos os inputs

        let inputs = form.getElementsByTagName('input');

        // transformo HTMLColletction -> array

        let inputsArray = [...inputs];

        //loop nos inputs e validação mediante o que for encontrado

        inputsArray.forEach(function(input) {
            // loop em todas as validações existentes
            
            for(let i = 0; this.validations.length > i; i++){
                // verifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null) {

                }
            }
        }, this);
    }
    
}

let form = document.getElementById('register-form');
let btn = document.getElementById('btn-cadastro');
let validator = new Validator();
btn.addEventListener('click', function(e) {
    e.preventDefault();
    validator.validate(form);
});