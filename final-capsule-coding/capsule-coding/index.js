const contents=document.querySelectorAll('.anim');

observer=new IntersectionObserver((entries)=>{
    // console.log(entries);
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `f-anim 2s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
    // if(entries[0].intersectionRatio>0){
    //     entries[0].target.style.animation=`f-anim 3s forwards ease-out`;
    // }else{
    //     entries[0].target.style.animation='none';
    // }
});

contents.forEach(content => {
    observer.observe(content)
})
// observer.observe(contents);