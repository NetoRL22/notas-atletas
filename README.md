# Projeto de certificação 1 - Pontuação dos atletas
Para este projeto foi criado uma situação hipotética de uma competição de ginástica astística em que minha aplicação é responsável por retornar o nome do atleta, todas as suas notas e sua média válida (explicada mais adiante)
# Input
Da linha 1 à 18 temos o input que recebi na proposta do projeto com todos os dados dos atletas (nomes e notas) em uma mátriz de objetos
# Média Válida
Para fazer o cálculo (linha 20 à 42) da média válida deveria ser feito a soma de todos as notas exceto a maior e a menor e dividir pelo número de notas que foram somadas (no caso tinham 5, eram retiradas 2, e se dividia por 3), assim da linha 21 à 26 é descoberto qual a menor nota, e da 28 à 33 qual a maior, ambos com o uso de forEach e If, assim para da 35 à 40 a media ser calculado (somando tudo, diminuindo a maior e menor, e dividindo pelo numero de notas que era 3)
# Dados dos Atletas
Da linha 44 à 54 há uma função que retorna os dados dos atletas em uma matriz de strings que é salva como uma string só na linha 56 pelo método .join(), assim o resultado final esperado é impresso no console pelo console.log()
