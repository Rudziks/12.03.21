//const btn = document.getElementsByClassName("btn")
//console.log(btn)
    //kolor czcionki
//const par1 = document.getElementsByClassName("par1")
//const sth = Array.from(par1)
//console.log(sth)
//console.log(typeof par1)
//for(let i = 0; i < par1.length; i++){
//    console.log(par1[1])
//    par1[i].style.color='red'
//    par1[i].classList.add('fsize')
//    par1[i].classList.remove('xd')
//}


// const par2 = document.getElementsByClassName("par2")
// const sth2 = Array.from(par2)
// console.log(sth2)
// console.log(typeof par2)
// for(let i=0; i<par2.length; i++){
//    console.log(par2[1])
//    par2[i].style.color='darkblue'
// }

        //po id
// const parID = document.getElementById('parid1')
// parID.style.backgroundColor='pink'
// console.log(parID)

// const parID2 = document.getElementById('parid2')
// parID2.innerHTML='<button>shshs</button>'
// console.log(parID2)

// const type = document.querySelector('input[type="button"]')
// console.log(type)

// const allType = document.querySelectorAll('input[type="button"]')
// const allTypeArr = Array.from(allType)
// console.log(allTypeArr)

// allTypeArr.forEach(item => {
//    item.value = "działa"
// })

// const tagA = document.getElementById('tagA')
// tagA.setAttribute('href', 'https://www.wp.pl/')
// console.log(tagA)

const paragraf = document.createElement('p')
paragraf.setAttribute('class', 'fsize')
paragraf.innerText = "niedługo do domu"
const app = document.getElementById('app')
app.appendChild(paragraf)

console.log(paragraf)

const spanOwn = document.createElement('span')
spanOwn.setAttribute('class','fsize')
spanOwn.innerText='jeszcze 50min'
app.appendChild(spanOwn)
console.log(spanOwn)

//dodajemy element 'to co chcemy dodac np. span, p', nastepniej dodajemy attributa 'class','nazwa klasy', nastepnie innerHTML/Text i wpisujemy to co ma sie tam znajdywac, pozniej appendChild
const spanOwn2 = document.createElement('span')
spanOwn2.setAttribute('class', 'fsize')
spanOwn2.innerText='proba2'
app.appendChild(spanOwn2)
console.log(spanOwn2)

const newDiv = document.createElement('div')
newDiv.setAttribute('class', 'fsize')
const span = document.createElement('span')
span.innerText="shhshshshs"
newDiv.appendChild(span)
app.appendChild(newDiv) 
console.log(newDiv)


