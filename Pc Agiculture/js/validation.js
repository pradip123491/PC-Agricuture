function validateForm() {
    var email = document.getElementById("typeEmailX-2").value;
    var password = document.getElementById("typePasswordX-2").value;
    var error = false;
    
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    var emailPattern = /^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,7}$/;
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (email === "") {
        emailError.innerHTML = "Email is required.";
        error = true;
    } else if (!emailPattern.test(email)) {
        emailError.innerHTML = "Please enter a valid email with the format name@domain.com";
        error = true;
    } else {
        emailError.innerHTML = ""; 
    }

    if (password === "") {
        passwordError.innerHTML = "Password is required.";
        error = true;
    } else if (!passwordPattern.test(password)) {
        passwordError.innerHTML = "Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter.";
        error = true;
    } else {
        passwordError.innerHTML = "";
    }

    return !error; 
}



function sing_up_valid() {

    var us = document.getElementById('fname').value;
    var mno = document.getElementById('mo').value;
    var em = document.getElementById('email').value;
    var pwd = document.getElementById('password').value;
    var pwd1 = document.getElementById('password2').value;


    if (us == "") {
        var vem1 = "false";
        var x = "Full Name field is empty please enter your Full Name";
        document.getElementById('p5').innerHTML = x;
        document.getElementById('p5').style.color = 'red';
    }
    else {
        var b1 = /^[A-Za-z\s]{2,20}$/;
        var a1 = b1.test(us);
        if (a1 == false) {
            var vem1 = "false";
            var x = "Full Name field must contain only alphabet and char limie 2-20";
            document.getElementById('p5').innerHTML = x;
            document.getElementById('p5').style.color = 'red';
        }
        else {
            vem1 = "true";
            var x = "";
            document.getElementById('p5').innerHTML = x;
        }
    }



    if (em == "") {
        var vem = "false";
        var x = "Email field is empty please enter your email";
        document.getElementById('p1').innerHTML = x;
        document.getElementById('p1').style.color = 'red';
    }
    else {
        var b = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,7})$/;
        var a = b.test(em);
        if (a == false) {
            var vem = "false";
            var x = "Please Enter Valid Email";
            document.getElementById('p1').innerHTML = x;
            document.getElementById('p1').style.color = 'red';
        }
        else {
            vem = "true";
            var x = "";
            document.getElementById('p1').innerHTML = x;
        }
    }

    if (mno == "") {
        var vmno = "false";
        var x = "Moblie number field is empty please enter your moblie number";
        document.getElementById('p4').innerHTML = x;
        document.getElementById('p4').style.color = 'red';
    }
    else {
        var c = /^[0-9]{10}$/;
        var d = c.test(mno);
        if (d == false) {
            var vmno = "false";
            var x = "Please Enter 10 digit number ";
            document.getElementById('p4').innerHTML = x;
            document.getElementById('p4').style.color = 'red';
        }
        else {
            var vmno = "true";
            var x = "";
            document.getElementById('p4').innerHTML = x;
        }
    }


    if (pwd == "") {
        var x = "Password field is empty please enter Password";
        document.getElementById('p2').innerHTML = x;
        document.getElementById('p2').style.color = 'red';
        var vpwd = "false";
    }
    else {
        re = /[0-9]/;
        re1 = /[a-z]/;
        re2 = /[A-Z]/;
        re3 = /[!@#\$%\^\&*+=._-]/;
        var a1 = pwd.length < 8;
        var a2 = pwd.length > 15;
        var a3 = re.test(pwd);
        var a4 = re1.test(pwd);
        var a5 = re2.test(pwd);
        var a6 = re3.test(pwd);
        if (a1 == true || (a2 == true) || (a3 == false) || (a4 == false) || (a5 == false) || (a6 == false)) {
            var x = "Password length must be 8to 15 charachters and must contain one small and capital letter a digit and special character";
            document.getElementById('p2').innerHTML = x;
            document.getElementById('p2').style.color = 'red';
            var vpwd = "false";
            //alert(vpwd);
        }
        else {
            var x = "";
            document.getElementById('p2').innerHTML = x;
            vpwd = "true";
        }
    }

    if (pwd1 == "") {
        var x = "Confirm Password field is empty please enter Password";
        document.getElementById('p3').innerHTML = x;
        document.getElementById('p3').style.color = 'red';
        var vpwd1 = "false";
    }
    else {
        if (pwd1 != pwd) {
            var x = "Confirm password is not match with password please enter valid confirm password";
            document.getElementById('p3').innerHTML = x;
            document.getElementById('p3').style.color = 'red';
            vpwd1 = "false";
        }
        else {

            var x = "";
            document.getElementById('p3').innerHTML = x;
            vpwd1 = "true";
        }
    }





    if (vem1 == "true" && vem == "true" && vmno == "true" && vpwd == "true" && vpwd1 == "true") {
        return true;
    }
    else {
        return false;
    }

}
