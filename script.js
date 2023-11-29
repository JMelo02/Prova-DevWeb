document.addEventListener('DOMContentLoaded', function () {

    const titles = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    titles.forEach(title => title.classList.add('highlight'));
  
    
    const rotatingElements = document.querySelectorAll('.rotating-element');
    rotatingElements.forEach(element => rotateElement(element, 0));
});
  

function rotateElement(element, angle) {
    let currentAngle = angle;
    setInterval(() => {
      currentAngle += 1; 
      element.style.transform = `rotate(${currentAngle}deg)`; 
    }, 30); 
}