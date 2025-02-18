const form = document.getElementById('form-numeros');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const numeroUm = document.getElementById('numero-um'); 
    const numeroDois = document.getElementById('numero-dois');
    const mensagemSucesso = `Sucesso! O número do primeiro campo é menor do que o do segundo. Essa foi por pouco! (ﾉ◕ヮ◕)ﾉ*:･ﾟ`;
    const mensagemErro = `Erro: o número do primeiro campo deve ser menor do que o do segundo campo. (Alguém está indo até você)`;
    const containerMensagemSucesso = document.querySelector('.success-message');
    const containerMensagemErro = document.querySelector('.error-message');

    
    containerMensagemSucesso.classList.remove('fade-out');
    containerMensagemErro.classList.remove('fade-out');

    if (Number(numeroDois.value) > Number(numeroUm.value)) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroUm.value = '';
        numeroDois.value = '';

        setTimeout(function() {
            containerMensagemSucesso.classList.add('fade-out');
        }, 4000); 

        setTimeout(function() {
            containerMensagemSucesso.style.display = 'none';
        }, 5000); 

    } else {
        numeroDois.style.border = '1px solid #c75656';
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        setTimeout(function() {
            containerMensagemErro.classList.add('fade-out');
        }, 4000); 

        setTimeout(function() {
            containerMensagemErro.style.display = 'none';
        }, 5000); 
    }
});
