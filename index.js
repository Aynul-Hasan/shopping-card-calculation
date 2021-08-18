const totalAmount=()=>{
    const mobile_total=document.getElementById('mobile-total').innerText
    const product_total= document.getElementById('product-total').innerText
    const total= parseFloat(mobile_total)+parseFloat(product_total)
    const sub_total= document.getElementById('sub_total').innerText=total
    const tex= sub_total *.10;
    document.getElementById('tex-total').innerText=Math.round(tex)
    document.getElementById('total').innerText=Math.round(tex+sub_total)
}
const calculation=(input,istrue,amount,total)=>{
    const _input= document.getElementById(input)
    const _value=parseFloat( _input.value)
    if(istrue){
     _input.value= _value +1;
      const s=_input.value*amount
      const  _total=  document.getElementById(total).innerText=s
      totalAmount()
    }else if(_value>0 && !istrue){
     _input.value= _value-1;
     const s=_input.value*amount
     document.getElementById(total).innerText=s
     totalAmount()
    }          
}
document.getElementById('mobile-plus').addEventListener('click',()=>{
     calculation('mobile_input',true,799,'mobile-total')
})
document.getElementById("mobile-minus").addEventListener("click",()=>{
    calculation("mobile_input",false,799,'mobile-total')
})
document.getElementById('product-plus').addEventListener("click",()=>{
    calculation('product_input',true,59,'product-total')
})
document.getElementById('product-minus').addEventListener('click',()=>{
    calculation('product_input' ,false, 59, 'product-total')
})
totalAmount()