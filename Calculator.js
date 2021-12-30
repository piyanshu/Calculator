var a=document.getElementsByClassName('button');
var b=document.getElementById('display');
var op1, op, result;
console.log('hello');
for(var i=0;i<a.length;i++)
{
    a[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        if(value == '=')
        {
            op2 = b.innerText;
            if(op1 == 'ERROR')
            {
                b.innerText = 'ERROR';
            }
            else if(op1==1 && op == '/' && op2 == '0')
            {
                b.innerText = 'ERROR';
            }
            else
            {
                result = eval(op1+op+op2);
                b.innerText = result;
            }
        }
        else if(value=='+'||value=='-'||value=='*'||value=='/'||value=='%'||value=='AC')
        {
            op1 = b.innerText;
            op = value;
            b.innerText = " ";
        }
        else if(value=='+/-')
        {
            b.innerText = -b.innerText;
        }
        else 
        {
            b.innerText += value;
        }
    });
    
}