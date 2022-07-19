
            
            function handleCalc() {
                let numero1 = document.getElementById('n1').value
                let numero2 = document.getElementById('n2').value
                console.log(numero1)
                console.log(numero2)
                

                let resultado = (numero1 * 100)/numero2

                alert(numero1 +  ' é ' + resultado + ' % ' + ' de ' + numero2)

            }
       