var allbox = document.querySelectorAll(".box")

window.addEventListener("scroll",()=>{
    // 80% de la fenetre visible (4/5eme)
   const value = (window.innerHeight /5 * 4);

    allbox.forEach(box=>{

        //recuperer la distance entre le bord superieur de la card et le bord sup de la fenetre visible
    let boxtop = box.getBoundingClientRect().top

    boxtop<value ? box.classList.add("visible"):box.classList.remove("visible")
})
})

