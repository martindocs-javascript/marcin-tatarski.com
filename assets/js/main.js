const projectsTotal = document.querySelectorAll('.project-content').length;
const projectsNo = document.querySelector('.projects-no');
const article = document.querySelector('.article-content');
const modal = document.querySelector('.modal');

// show total numbers of projects
if(projectsTotal > 0){    
    projectsNo.innerHTML = projectsTotal;
}

if(article){    
    // zoom-in when clicked on article images
    function imgZoomIn(item){ 
        // clicked img
        const currentIMG = item.target;   
    
        if(currentIMG.tagName === 'IMG'){    

            // create new image    
            const newIMG = document.createElement('img');

            // append src & alt from clicked img to new image
            newIMG.src = item.target.attributes.src.value;
            newIMG.alt = item.target.attributes.alt.value;

            // hide page content
            modal.style.display = 'block';
            modal.style.opacity = 1;

            // show newly created img
            modal.insertAdjacentElement('afterend', newIMG);

            // position new img on the page
            newIMG.style.position = 'absolute';
            newIMG.classList.add('img-zoom-out');            
            newIMG.style.maxWidth = '90%';            
            newIMG.style.top = (innerHeight/2 + window.scrollY) - (currentIMG.clientHeight) + 'px';             
            
            window.addEventListener('scroll', imgScroll);
            newIMG.addEventListener('click', imgZoomOut);            
        }
    }

    // remove popup img from page if usr scroll 
    function imgScroll(){
        const img = modal.nextElementSibling;
        modal.style.display = 'none';
        modal.style.opacity = 0;        
        img.remove();
        window.removeEventListener('scroll', imgScroll);      
    }

    // remove popup img from page if usr click on img
    function imgZoomOut(item){
        const img = item.target;
        modal.style.display = 'none';
        modal.style.opacity = 0;
        img.remove();      
    }
    
    article.addEventListener('click', imgZoomIn);
}