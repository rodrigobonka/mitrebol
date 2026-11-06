// Funcion Galeria Lighbox
GLightbox({ 
    selector: '.glightbox', 
    touchNavigation: true, 
    loop: true }); 
    
    // Actualizar el año en el pie de página
    document.getElementById('year')
    .textContent = new Date()
    .getFullYear();