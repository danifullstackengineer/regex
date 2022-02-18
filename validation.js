const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/,
    password: /^[\w@-]{8,20}$/i,
    telephone: /^[0-9]{11}$/,
    slug: /^[a-z\d-]{8,20}$/
}


const inputs = document.querySelectorAll('input');


// validation function

function validate(field, regex){
    if(regex.test(field.value)){
        field.className = "valid";
    }
    else{
        field.className = "invalid";
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', ev=>{
        validate(ev.target, patterns[ev.target.attributes.name.value])
    })
})