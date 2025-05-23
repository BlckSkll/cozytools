document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector('.topo_menu');
  
    // Cria botão de toggle do menu móvel
    const btn = document.createElement('button');
    btn.textContent = "☰";
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'menu');
    btn.classList.add('menu-toggle');
    btn.style.fontSize = '1 rem';
    btn.style.background = 'none';
    btn.style.border = 'none';
    btn.style.cursor = 'pointer';
  
    // Insere botão antes do menu
    menu.parentNode.insertBefore(btn, menu);
  
    // Define id no menu pra acessibilidade
    menu.id = 'menu';
  
    btn.addEventListener('click', () => {
      const aberto = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', aberto);
    });
  });
  