const valeur = [
{
    valeur: 'sin',
    class : 'btn btn-outline-secondary',    
},
{
    valeur: 'tan',
    class : 'btn btn-outline-secondary',
},
{
    valeur: 'x²',
    class : 'btn btn-outline-secondary',
},
{
    valeur: 'C',
    class : 'btn btn-outline-secondary',
},
{
    valeur: '1',
    class : 'btn btn-outline-secondary',
},
{
    valeur: '2',
    class : 'btn btn-outline-secondary',
},
{
    valeur: '3',
    class : 'btn btn-outline-secondary',
},
{
    valeur: '+',
    class : 'btn btn-outline-secondary',
},
{
    valeur: '4',
    class : 'btn btn-outline-secondary',
},
{
    valeur: '5',
    class : 'btn btn-outline-secondary',
},
{
    valeur: '6',
    class : 'btn btn-outline-secondary',
},
{
    valeur: '/',
    class : 'btn btn-outline-secondary',
},
{
    valeur: '7',
    class : 'btn btn-outline-secondary',
},
{
    valeur: '8',
    class : 'btn btn-outline-secondary',
},
{
    valeur: '9',
    class : 'btn btn-outline-secondary',    
},
{
    valeur: '*',
    class : 'btn btn-outline-secondary',    
},
{
    valeur: '(',
    class : 'btn btn-outline-secondary',    
},
{
    valeur: '0',
    class : 'btn btn-outline-secondary',    
},
{
    valeur: '=',
    class : 'btn btn-outline-secondary',    
},
{
    valeur: ')',
    class : 'btn btn-outline-secondary',    
},
];

document.querySelector(".cal").innerHTML=''
const main = document.querySelector('.cal');

const ecrans = document.createElement('div')
    ecrans.className =('output')
    main.appendChild(ecrans)

const resultat = document.createElement('div');
    ecrans.appendChild(resultat);

const memoire = document.createElement('div');
    ecrans.appendChild(memoire);

const historique = document.createElement('div');
    historique.className = ('overflow-auto')
    ecrans.appendChild(historique);

function safeEval(str){
    return Function('return ' + str)()
}
 function sin() {
    return Math.sin(resultat.textContent)
}
// function cos() {  !!J'ai retiré la touche par manque de place/ergonomie ! (Le Else if est quand meme présent plus bas)
//     return Math.cos(resultat.textContent)
// }
function exp(){
    return Math.pow(resultat.textContent, 2)
}
function tan() {
    return Math.tan(resultat.textContent)
}
function hist(){
    arr.push (memoire.textContent);
    console.log(arr);
    historique.textContent = arr
}
let arr = [];
for (let element of valeur){
    const bouton = document.createElement('button');
    bouton.className = element.class;
    bouton.type = 'button';
    bouton.textContent = element.valeur;

    bouton.addEventListener(
        'click' ,function(){
            if (element.valeur == 'C') {
                resultat.textContent='';
                memoire.textContent='';
                arr=[];
                historique.textContent='';

            }
            else if (element.valeur == '=') {
                memoire.textContent = resultat.textContent;
                let response = safeEval(resultat.textContent);
                resultat.textContent = response;
                memoire.textContent = memoire.textContent +'='+ resultat.textContent
                hist(memoire.textContent)
                resultat.textContent = '';
            } 
            else if (element.valeur == 'sin') {
                memoire.textContent = 'sin('+ resultat.textContent ;
                let sinus = sin(resultat.textContent);
                resultat.textContent = sinus;
                memoire.textContent = memoire.textContent + '=' + sinus
                hist(memoire.textContent);
                resultat.textContent = ' ';
            }
             else if (element.valeur == 'cos') {
                memoire.textContent = 'cos('+ resultat.textContent ;
                let cosinus = cos(resultat.textContent);
                resultat.textContent = cosinus;
                memoire.textContent = memoire.textContent + '=' + cosinus
                hist(memoire.textContent);
                resultat.textContent = ' ';
             }
            else if (element.valeur == 'tan') {
                memoire.textContent = 'tan('+ resultat.textContent ;
                let tangente = tan(resultat.textContent);
                resultat.textContent = tangente;
                memoire.textContent = memoire.textContent + '=' + tangente
                hist(memoire.textContent);
                resultat.textContent = '';
            }
            else if (element.valeur == 'x²') {
                let exposant = exp();
                resultat.textContent = exposant;
            }
            else{
                resultat.textContent += element.valeur;
            }
        }
    )
    main.appendChild(bouton);
}