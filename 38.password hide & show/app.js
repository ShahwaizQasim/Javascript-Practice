

const passwordEye = document.getElementById("Password");
console.log(passwordEye.type);

const eye = document.getElementById("eye");
// let isTrue = true;

const hidePassword = () => {
    if (passwordEye.type === "password") {
        eye.classList.add("fa-eye-slash")
        eye.classList.remove("fa-eye")   
        passwordEye.type = "text";
    }else{
        eye.classList.add("fa-eye");
        eye.classList.remove("fa-eye-slash");
        passwordEye.type = "password"
    }
    // isTrue = !isTrue;
}


eye.addEventListener("click", hidePassword);