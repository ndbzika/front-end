function inserir(numero1)
{
    var numero2 = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero2 + numero1
}
function limpar()
{
    document.getElementById('display').innerHTML = ""
}
function deletar()
{
    var res = document.getElementById('display').innerHTML
    document.getElementById('display').innerHTML = res.substring(0, res.length -1)
}
function calc()
{
    var res = document.getElementById('display').innerHTML
    if(res)
    {
        document.getElementById('display').innerHTML = eval(res)
    }
    else
    {
        document.getElementById('display').innerHTML = "Digite uma equação!"
    }
}