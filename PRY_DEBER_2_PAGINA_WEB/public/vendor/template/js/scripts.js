/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

// Función para cargar páginas dinámicamente
function fn_cargarPagina(event, url) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    
    const mainContent = document.getElementById('main-content');
    
    // Hacer la petición para cargar el archivo HTML
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar la página');
            }
            return response.text();
        })
        .then(html => {
            // Insertar el contenido en el main
            mainContent.innerHTML = html;
            
            // Desplazarse al inicio de la página
            window.scrollTo(0, 0);
        })
        .catch(error => {
            console.error('Error al cargar la página:', error);
            mainContent.innerHTML = '<div class="alert alert-danger">Error al cargar la página</div>';
        });
}

window.addEventListener('DOMContentLoaded', event => {

    // Cargar la página de inicio por defecto
    fn_cargarPagina({preventDefault: () => {}}, './views/home.html');

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
