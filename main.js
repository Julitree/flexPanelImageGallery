let panels = [...document.querySelectorAll(".panel")];

function toggleOpen(){   
    //If i have any div with the class open remove it
    let tempOpenDiv = document.querySelector('.open');
    if (tempOpenDiv) tempOpenDiv.classList.toggle('open');

    // Add  class open to specific div
    this.classList.toggle('open');
    
}

panels.map(panel=>panel.addEventListener('click', toggleOpen));



