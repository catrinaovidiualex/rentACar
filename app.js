let btnAdd=document.querySelector(".adaugare");
let container=document.querySelector(".container");


//functie ce coverteste  un obiect intr-un card


function createCard(obj){

      
    
    let section=document.createElement('section');

    section.classList.add('masina');
   

    let p1=document.createElement("p");
    p1.classList.add("marca");
    p1.textContent=obj.marca;
    section.appendChild(p1);

    let p2=document.createElement("p");
    p2.classList.add("anfabricatie");
    p2.textContent=obj.anfabricatie;
    section.appendChild(p2);

    let p3=document.createElement("p");
    p3.classList.add("combustibil");
    p3.textContent=obj.combustibil;
    section.appendChild(p3);

    let p4=document.createElement("p");
    p4.classList.add("statusinchiriere");
    p4.textContent=obj.status;
    section.appendChild(p4);


}








function adaugareMasina(){
    let newcar=document.querySelector("#addmasina");
}
