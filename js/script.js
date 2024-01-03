let targat = document.querySelector(".testimonials");
let targatTitles = document.querySelectorAll(".title");

const options = {
    threshold : 0.5,
    rootMargin:"0px 0px 0px 0px"
};


const observer = new IntersectionObserver(function(entries){

    entries.forEach(entry =>{
        console.log(entry.target);

        const intersecting = entry.isIntersecting;
        console.log(intersecting);
        if(intersecting){
            entry.target.classList.add("opacityOn");
            entry.target.classList.add("titleOpOn");
        }
    })

},options);

targatTitles.forEach(title=>{
    observer.observe(title);
})

observer.observe(targat);