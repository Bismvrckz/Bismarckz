window.addEventListener('scroll', function() {
	if (this.scrollY > 50) {
		document.getElementById('my-nav').style.backgroundColor = "#2E3532";
		document.getElementsByClassName('logo')[0].style.color = "#E0E2DB"
		document.getElementsByClassName('nav-lists')[0].style.color = "#E0E2DB"
		document.getElementsByClassName('nav-lists')[1].style.color = "#E0E2DB"
		document.getElementsByClassName('nav-lists')[2].style.color = "#E0E2DB"
	} else {
		document.getElementById('my-nav').style.backgroundColor = "transparent";
		document.getElementsByClassName('logo')[0].style.color = "#2e3532"
		document.getElementsByClassName('nav-lists')[0].style.color = "#2E3532"
		document.getElementsByClassName('nav-lists')[1].style.color = "#2E3532"
		document.getElementsByClassName('nav-lists')[2].style.color = "#2E3532"
	}
})