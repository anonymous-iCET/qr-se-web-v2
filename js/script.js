let targat = document.querySelector(".testimonials");
let targatTitles = document.querySelectorAll(".title");
let targatImgSec = document.querySelector(".imgSection01");
let targatImgSec2 = document.querySelector(".imgSection02");

const options = {
    threshold : 0.5,
    rootMargin:"0px 0px 0px 0px",
    root : null
};


const observer = new IntersectionObserver(function(entries){

    entries.forEach(entry =>{
        console.log(entry.target);

        const intersecting = entry.isIntersecting;
        
        if(intersecting){
            entry.target.classList.add("opacityOn");
            entry.target.classList.add("titleOpOn");
            entry.target.classList.add("onset01");
            entry.target.classList.add("onset02");
            
        }else{
            // entry.target.classList.add("testimonials");
            // entry.target.classList.add("title");
            // entry.target.classList.add("imgSection01");
            // entry.target.classList.add("imgSection02");
        }
    })

},options);

targatTitles.forEach(title=>{
    observer.observe(title);
})

observer.observe(targat);
observer.observe(targatImgSec);
observer.observe(targatImgSec2);