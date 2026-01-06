function getFormvalue(e) {
    //Write your code here
	e.preventDefault()
	const fname = e.target.fname.value;
	const lname = e.target.lname.value
	const fullname = `${fname} ${lname}`
	alert(fullname)
}
