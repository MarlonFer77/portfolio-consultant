document.addEventListener('DOMContentLoaded', function() {
    // Alerta para o link do LinkedIn (se ainda for '#')
    const linkPortfolio = document.querySelector('#contato a[href="#"]');
    if(linkPortfolio) {
        linkPortfolio.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Lembre-se de adicionar o link do seu LinkedIn ou portfólio!');
        });
    }

    // Efeito Scroll Reveal
    const sections = document.querySelectorAll('section');

    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para animar apenas uma vez
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null, // Observa em relação à viewport
        threshold: 0.15, // Ativa quando 15% da seção estiver visível
        rootMargin: '0px 0px -50px 0px' // Começa a observar um pouco antes de entrar totalmente
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});