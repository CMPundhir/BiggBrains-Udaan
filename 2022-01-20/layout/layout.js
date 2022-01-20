function changeContent(index) {
	const title = document.getElementById('title')
	const desc = document.getElementById('desc')
	switch(index){
		case 1:
			title.innerHTML = "Home"
			desc.innerHTML = 
				`<div>
					<h3>Home sweet Home</h3>
					<p>Hamara ghar sabse mast</p>
				</div>`
			break;
		case 2:
			title.innerHTML = "Services"
			desc.innerHTML = 
				`<div>
					<h3>Sameer dev ki Masti</h3>
					<p>Hamara ghar sabse mast</p>
				</div>`
			break;
		case 3:
			title.innerHTML = "Products"
			desc.innerHTML = 
				`<div>
					<h3>Bhasan</h3>
					<p>Hamara ghar sabse mast</p>
				</div>`
			break;
		case 4:
			title.innerHTML = "About US"
			desc.innerHTML = 
				`<div>
					<h3>We are God</h3>
					<p>Hamara ghar sabse mast</p>
				</div>`
			break;
		case 5:
			title.innerHTML = "Profile"
			desc.innerHTML = 
				`<div>
					<h3>Profile</h3>
					<p>Hamara ghar sabse mast</p>
				</div>`
			break;
		default:
			title.innerHTML = "default"
			desc.innerHTML = 
				`<div>
					<img src="https://biggbrains.com/assets/img/logo.png">
					<p>BiggBrains Solutions Pvt Ltd is registerd with Ministary of corporate affairs dealing in technology driven websites, software, mobile applications.</p>
				</div>`

	}
}

