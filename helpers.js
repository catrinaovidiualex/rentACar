let btnAdd=document.querySelector(".adaugare");
let btnDlt=document.querySelector(".stergere");
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

    return section;

}




function attachCards(vector){

    container.innerHTML='';
     vector.forEach(element => {
         container.appendChild(createCard(element));
         
     });

}


function adaugareMasina(){
    let newmarca=document.querySelector("#addmarca");

    let newan=document.querySelector("#addan");

    let newcombustibil=document.querySelector("#addcombustibil");


    let newstatusinch=document.querySelector("#addstatusinch");

    masini.push({
        marca: newmarca.value,
        anfabricatie:newan.value,
        combustibil: newcombustibil.value,
        status:newstatusinch.value
    });

    

    newmarca.value="";
    newan.value="";
    newcombustibil.value="";
    newstatusinch.value="";

    attachCards(masini);

    
}

btnAdd.addEventListener("click",()=>{
    adaugareMasina();
})

function verificareStatus(marcaM){
    for (let i=0;i<masini.length;i++){
        if(masini[i].status=="inchiriata" && masini[i].marca==marcaM)
        return true;
    }
    return false;
}

function inchiriaza(){
   
    let masinadeinchiriat=document.querySelector("#deinchiriat");
    while(masinadeinchiriat.value===masini.marca && masini.status.value!="neinchiriata"){

        masini.status.value="inchiriata";

        
    }





}

function stergeMasina(){
    let list=[];
    let masinaDeSters=prompt("Introduceti marca masinii pe care doriti sa o stergeti:");
    for(let i=0;i<masini.length;i++){
        if(masini[i].marca!==masinaDeSters){
            list.push(masini[i]);
        }
    }

    masini=[...list];//spread operator

    attachCards(masini);

}  

btnDlt.addEventListener("click",()=>{
    stergeMasina();
})




