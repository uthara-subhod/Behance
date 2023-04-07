function replaceLogoText(){
    var screenWidth= window.innerWidth;
    if (screenWidth<=1300){
        var element = document.getElementById("brand-name");
        element.innerHTML= "Bē";
    }
    else{
        var element = document.getElementById("brand-name");
        element.innerHTML= "Bēhance";
    }
}

function searchbox(){
    var screenWidth=window.innerWidth;
    if (screenWidth<=1300){
        document.getElementById('searchbar').style.display = 'none';
        document.getElementById('search-button').style.display = 'block';
    }
    else{
        document.getElementById('searchbar').style.display = 'block';
        document.getElementById('search-button').style.display = 'none';
    }

}
window.onload = replaceLogoText,searchbox;
window.onresize = replaceLogoText,searchbox;


const menu_btn = document.querySelector('.hamburger');

menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
})

const navSlide =() =>{
    const burger = document.querySelector('.hamburger');
    const nav=document.querySelector('.nav-links');

    burger.addEventListener('click' , function(){
        nav.classList.toggle('nav-active');
    })
}

navSlide();
