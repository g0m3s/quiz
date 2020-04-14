var e1 = 0 //escolha
var e2 = 0
var e3 = 0
var reload = 0

const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')
const perguntas = document.querySelector('#antes')

function comecar () {

    p1.style.opacity = 1
    perguntas.style.opacity = 0
    

    if (reload != 0)

        window.location.reload()

    else

        reload ++


}

function r1 (escolha){

    e1 = escolha
    p2.style.opacity = 1
    
}

function r2 (escolha) {

    e2 = escolha
    p3.style.opacity = 1
    
}

function r3 (escolha) {

    e3 = escolha
    pessoa()

}

function pessoa() {
    
    if ( e1 == 1 && ((e2 == 1) ||(e2 == 4)) && e3 == 1 ) {   //laiza

        window.alert('Voce e laiza')

    }

    else{

        if ( ((e1 == 2) || (e1 == 3)) && e2 == 3 && e3 == 1 ) {    //iris 

            window.alert('Voce e Iris')

        }
        
        else {

            if ( ((e1 == 3) || (e1 == 2)) && e2 == 2 && e3 == 1 ) {    // pedro
    
                window.alert('Voce e o Pedro')
    
            }
                
            else{

                if ( e1 == 2 && ((e2 == 4) || (e2 == 1)) && e3 == 2 ) {    // mae

                    window.alert('Voce a Barbara')

                }

                else {

                    window.alert("Nao consegui identificar :( ")
    
                }
                    
            }

        }

    }

}