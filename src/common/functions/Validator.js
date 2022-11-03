const patterns = {
    name: /^[a-z]{3,}([" "][a-z]{3,})*$/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    contactNum: /^[0-9]{10}/
}

function NameValidation(name){
    let retVal = {
        valid: false,
        err: '',
    }

    if(name==null || !name.trim().length){
        retVal.err = 'Name is required';
    } else if(patterns.name.test(name.trim())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Name';
    }

    return retVal;
}

function EmailValidation(email){
    let retVal = {
        valid: false,
        err: '',
    }

    if(email==null || !email.trim().length){
        retVal.err = 'Email is required';
    } else if(patterns.email.test(email.trim().toLowerCase())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Email';
    }

    return retVal;
}

function ContactNumValidation(num){
    let retVal = {
        valid: false,
        err: '',
    }

    if(num==null || !num.trim().length){
        retVal.err = 'Contact Number is required';
    } else if(patterns.contactNum.test(num.trim())){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Contact Number';
    }

    return retVal;
}

function DoBValidation(dob){
    let retVal = {
        valid: false,
        err: '',
    }

    if(!dob || dob == ''){
        retVal.err = 'DoB is required';
    } else if(dob < new Date()){
        retVal.valid = true;
    } else {
        retVal.err = 'Invalid Date of Birth';
    }

    return retVal;
}

function isInputEmpty(input){
    let isEmpty = true;

    if(input && input != ''){
        isEmpty = false;
    }

    return isEmpty;
}


export {
    NameValidation,
    EmailValidation,
    ContactNumValidation,
    DoBValidation,
    isInputEmpty
}