let globalIsSubmitted = false 

function validate(isSubmitted = false) {
	let firstName = document.getElementById('first-name').value
    console.log(firstName)
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let mobileNumber = document.getElementById('mobileNumber').value
	let country = document.getElementById('country').value

    let error = false

    // var phone = document.forms['myfrm']['mobileno'];
    // if(isNaN(phone.value)){
    //     alert(NAN)
    //     return false
    // }

    var digits = /[*0-9]|/gi
    var a = document.forms[0]
    var genders = ""
    for(let i=0; i<a.length; i++){
        if(a[i].checked==true){
             genders = "a"
        }
    }

	if(isSubmitted) {``
		globalIsSubmitted = true
	}

	if(globalIsSubmitted) {
        //firstName Validation
		if(firstName.length >= 3) {
			document.getElementById('first-name-valid').style.display = 'block'
			document.getElementById('first-name-invalid').style.display = 'none'
		} else if(isNaN(firstName)){
            alert('NAN')
            return false
        }
        else {
			document.getElementById('first-name-invalid').style.display = 'block'
			document.getElementById('first-name-valid').style.display = 'none'
			error = true
		}

        //lastName Validation
		if(lastName.length >= 3) {
			document.getElementById('last-name-valid').style.display = 'block'
			document.getElementById('last-name-invalid').style.display = 'none'
		} else {
			document.getElementById('last-name-invalid').style.display = 'block'
			document.getElementById('last-name-valid').style.display = 'none'
			error = true
		}

        //email Validation
		if (
			email.includes("@") &&
			email.includes(".") &&
			email.indexOf("@") != 0 &&
			email.length - email.lastIndexOf(".") >= 2
		) {
			document.getElementById("email-valid").style.display = "block";
			document.getElementById("email-invalid").style.display = "none";
		} else {
			document.getElementById("email-invalid").style.display = "block";
			document.getElementById("email-valid").style.display = "none";
			error = true
		}

        //mobile number validation
		if(mobileNumber.length == 10 && mobileNumber.length != "") {
			document.getElementById('mobileNumber-valid').style.display = 'block'
			document.getElementById('mobileNumber-invalid').style.display = 'none'
		} else {
			document.getElementById('mobileNumber-invalid').style.display = 'block'
			document.getElementById('mobileNumber-valid').style.display = 'none'
			error = true
		}

        //gender validation
		if(genders != "") {
			document.getElementById('gender-valid').style.display = 'block'
			document.getElementById('gender-invalid').style.display = 'none'
		} else {
			document.getElementById('gender-invalid').style.display = 'block'
			document.getElementById('gender-valid').style.display = 'none'
			error = true
		}

        //country validation
		if(country != 'None') {
			document.getElementById('country-valid').style.display = 'block'
			document.getElementById('country-invalid').style.display = 'none'
		} else {
			document.getElementById('country-invalid').style.display = 'block'
			document.getElementById('country-valid').style.display = 'none'
			error = true
		}

		if(!error && isSubmitted) {
			alert('Your details have been saved successfully!')

			document.getElementById('registration-form').reset()

			let validFeedbacks = document.getElementsByClassName('valid-feedback')
			for(let i = 0; i < validFeedbacks.length; i++) {
				validFeedbacks[i].style.display = 'none'
			}
			let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
			for(let i = 0; i < invalidFeedbacks.length; i++) {
				invalidFeedbacks[i].style.display = 'none'
			}
		}
	}
}

console.log('priyanka')
