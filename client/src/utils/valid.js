const valid = ({username, tagname, email, password, cf_password}) => {
    const err = {}

    if(!username) {
        err.username = "Please add your tagname."
    }else if(username.length > 25){
        err.username = "Tagname is up to 25 characters long."
    }

    if(!tagname) {
        err.tagname = "Please add your tag."
    }else if(tagname.replace(/ /g, '').length > 25){
        err.tagname = "Tag is up to 25 characters long."
    }

    if(!email) {
        err.email = "Please add your email."
    }else if(!validateEmail(email)){
        err.email = "Email format is incorrect."
    }

    if(!password) {
        err.password = "Please add your password."
    }else if(password.length < 6){
        err.password = "Password must be at least 6 characters."
    }

    if(password !== cf_password) {
        err.cf_password = "Confirm password did not match."
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}



function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  
export default valid