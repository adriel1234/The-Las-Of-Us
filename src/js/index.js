const botaoCarrossel =  document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
botaoCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', ()=>{
        desativarBotaoSelecionado();
        
        botao.classList.add('selecionado');

        esconderImagemAtiva();
        
        imagens[indice].classList.add('ativa')

    })
});

function desativarBotaoSelecionado(){
    const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

}

function esconderImagemAtiva(){
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa')
}