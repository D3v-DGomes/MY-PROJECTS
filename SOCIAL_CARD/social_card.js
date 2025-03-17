// Selecionando todos os itens a serem utilizados:
const $cards = document.querySelectorAll('.js-card');
const $menu = document.querySelector('.js-menu');
const sectionToggleClass = 'js-section-toggle';     // Para evitar repetições
const $menuToggles = $menu.querySelectorAll(`.${sectionToggleClass}`);


// Adicionando evento de click:
$menu.addEventListener('click', event => {
    // Condicional para os clicks dos ícones das redes sociais:
    if(event.target.classList.contains(sectionToggleClass)) {
        // Ativando o card que foi selecionado:
        activateCard(event.target.parentElement)
        // Marcando o card como ativo:
        markAsActiveMenuItem(event.target)
    }
})

// FUNÇÕES:
function activateCard(element) {
    // Identificando o card:
    const socialNetwork = element.dataset.socialNetwork

    // Loop para remover a classe is-active:
    $cards.forEach(card => {
        card.classList.remove('is-active');
        // Incluindo o is-active somente no card que foi identificado:
        if(card.classList.value.includes(socialNetwork)) {
            card.classList.add('is-active');
        }
    })
}

function markAsActiveMenuItem(element) {
    // Loop para remover a classe is-active dos toggles:
    $menuToggles.forEach(item =>{
        item.classList.remove('is-active')
    })
    // Adicionando o is-active somente no elemento escolhido:
    element.classList.add('is-active');
}

