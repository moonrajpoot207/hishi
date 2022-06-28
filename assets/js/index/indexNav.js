    // Side Navigation

    let body = document.querySelector("body");
    let navBar = document.querySelector(".navbar");
    let menuBtn = document.querySelector(".menu-btn");
    let cancelBtn = document.querySelector(".cancel-btn");
    
    menuBtn.addEventListener("click", function(){
        navBar.classList.add("active");
        menuBtn.style.opacity= "0";
        menuBtn.style.pointerEvents = "none";
        body.style.overflowX = "hidden";
    })
    cancelBtn.addEventListener("click", function(){
        navBar.classList.remove("active");
        menuBtn.style.opacity= "1";
        menuBtn.style.pointerEvents = "auto";
        body.style.overflowX = "auto";
    })
    
    // Close Navigation
    
    let navLinks = document.querySelectorAll("ul li a");
    for(var i = 0; i < navLinks.length; i++) {
     navLinks[i].addEventListener("click", function(){
        navBar.classList.remove("active");
        menuBtn.style.opacity= "1";
        menuBtn.style.pointerEvents = "auto";
     })
    }