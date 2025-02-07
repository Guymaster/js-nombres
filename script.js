// Model
let nombres = [];
let total = 0;
let effectif = 0;

// View
function refresh(){
    let parent = document.getElementById("liste");
    parent.innerHTML = "";
    let resume = document.getElementById("resume");
    resume.innerText = effectif + 
    " nombres sélectionnés. La somme est " + total;
    for (let i in nombres){
        let n = nombres[i];
        console.log(i)
        // Créer un article
        let elt = document.createElement("article");
        // Le paramétrer
        elt.classList.add("nombre");
        let span1 = document.createElement("span");
        span1.classList.add("nombre-decre");
        span1.innerText = "< ";
        let span2 = document.createElement("span");
        span2.classList.add("nombre-incre");
        span2.innerText = " >";
        let span3 = document.createElement("span");
        span3.classList.add("croix");
        span3.innerText = "x";
        elt.appendChild(span1);
        // elt.innerHTML = elt.innerHTML + n;
        let eltN = document.createTextNode(n);
        elt.appendChild(eltN);
        elt.appendChild(span2);
        elt.appendChild(span3);
        // L'ajouter à la page
        parent.appendChild(elt);
        // Controller
        function incrementer(){
            console.log("incrementer à l'index " + i);
            nombres[i] = nombres[i] + 1;
            total = total + 1;
            refresh();
        }
        span2.addEventListener("click", incrementer);
        function decrementer(){
            console.log("decrementer à l'index " + i);
            nombres[i] = nombres[i] - 1;
            total = total - 1;
            refresh();
        }
        span1.addEventListener("click", decrementer);
        function supprimer(){
            total = total - nombres[i];
            effectif = effectif - 1;
            nombres.splice(i, 1);
            refresh();
        }
        span3.addEventListener("click", supprimer);
    }
}
refresh();

// Controller
function ajouter(){
    nombres.push(0);
    effectif++;
    refresh();
}
const btnAjout = document.getElementById("ajout");
btnAjout.addEventListener("click", ajouter);