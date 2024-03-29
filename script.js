let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle( 'fa-xmark');
    navbar.classList.toggle('active');
}

let section = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () =>{
    sections.forEach(sect => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href"=' +id + ']' ).classList.add('active');
            });
        }
    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
 });
 