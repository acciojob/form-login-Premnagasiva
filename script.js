function getFormvalue() {
    //Write your code here
	e.preventDefault()
	const fname = document.forms['form1']['fname'].value
	const lname = document.forms['form1']['lname'].value
	const fullname = `${fname} ${lname}`
	alert(fullname)
}
