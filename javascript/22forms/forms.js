const getId = () => {
    let id = Math.floor(Math.random() * 100000)
    document.getElementById('eid').value=`EPID${id}`
}

const validateFname = () => {
    let name = document.getElementById('fname').value;
    let fdiv = document.getElementById('fdiv');
    let ptag = document.getElementById('fout')
    if(name.trim().length==0){
        ptag.innerText = 'Please Enter First Name';
        fdiv.classList.remove('has-success')
        fdiv.classList.add('has-error')
    }else{
        ptag.innerText = ''
        fdiv.classList.remove('has-error')
        fdiv.classList.add('has-success')
    }
}

const validateEmail = () => {
    let email = document.getElementById('mail').value;
    let ptag = document.getElementById('eout')
    if(email.trim().length==0){
        ptag.innerText ='Please enter email'
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")==null){
            ptag.innerText ='Please enter Valid email'
        }else{
            ptag.innerText =''
        }
    }

}


const validatePwd = () => {
    let pass = document.getElementById('pwd').value;
    let ptag = document.getElementById('pout')
    let bar = document.getElementById('ppout');
    if(pass.trim().length<15){
        if(pass.trim().length<8){
            ptag.innerText = "Min Length is 8";
            bar.style.display="block";
            bar.style.backgroundColor="red"
        }else if(pass.trim().length>8 && pass.trim().length<811){
            ptag.innerText = "";
            bar.style.backgroundColor="orange"
        }

    }else{
        bar.style.backgroundColor="green"
    }

}

const pass = document.getElementById('pwd')
const cpass = document.getElementById('cpwd')
let ptag = document.getElementById('cpout')
cpass.addEventListener('blur',()=>{
    if(cpass.value !== pass.value){
        ptag.innerText = "Password do not Match"
    }else{
        ptag.innerText = ""
    }
})


