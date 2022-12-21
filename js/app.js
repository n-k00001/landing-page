let navList = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section');
let links = document.getElementsByName('links');

// build the nav
// creat items of nav bar
function creatItem(){
    for(let i=1;i<=sections.length;i++){
        item = document.createElement('li');
        item.innerHTML = `<a href="#section${i}" name="links" id="li_section${i}" data-nav="section${i}" class="menu__link">section${i}</a>` ;
        navList.appendChild(item); 
    }
}
creatItem();

onscroll = function(){
    
   sections.forEach(section=>{
        const sectionHeight = section.offsetHeight;
        const sectionTop = (section.getBoundingClientRect().top + window.pageYOffset) - 50;
        if (scrollY > sectionTop &&scrollY <= sectionTop + sectionHeight)
        {
            current = section.getAttribute("id");
            removeActive();
            addActive(current);
        }  
    });    

    if(scrollY >=400){
        btn.style.display = 'block';
    }
    else{
        btn.style.display = 'none';
    }
}

function removeActive(){
    sections.forEach(section => {
        section.classList.remove('your-active-class');
        links.forEach(link =>{
            if(link.dataset.nav==section.id){
                link.classList.remove('your-active-class');
            } 
        });
    });
}

function addActive(current){
    document.getElementById(current).classList.add('your-active-class');
    document.getElementById(`li_${current}`).classList.add('your-active-class');
}

/* button to top */
btn.onclick = function(){
    window.scrollTo({
        top: 0, behavior: 'smooth'
    });
}

// Scroll smooth to section on link click
navList.addEventListener('click',function(lnk){
    lnk.preventDefault();
    target = lnk.target;
    console.log(target);
    if(target.dataset.nav){
        document.getElementById(`${target.dataset.nav}`).scrollIntoView({behavior:"smooth"});
    }
});

