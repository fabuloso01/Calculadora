                    
                function handleCalc() {
                    let numero1 = document.getElementById('n1').value
                    let numero2 = document.getElementById('n2').value
                  
                  if(numero1 == '' || numero2 =='') {
                    alert('Por favor preencha os campos.')
                } else if (numero2 ==0){
                    alert('Não dividir por zero.')
                } else {

                    let resultado = (numero1 * 100)/numero2

                alert(numero1 +  ' é ' + resultado + ' % ' + ' de ' + numero2)


                }

                
                }
       