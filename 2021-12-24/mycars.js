
const cars = [
	{
		"name": "Ferrai",
		"price": 10,
		"color": "Yellow",
		"image": "https://cdn.cnn.com/cnnnext/dam/assets/200918141328-01-ferrari-f8-spider-super-tease.jpg"
	},
	{
		"name": "Bugati",
		"price": 20,
		"color": "Orange",
		"image": "https://4.imimg.com/data4/WM/DF/ANDROID-42477241/product-500x500.jpeg"
	}
];


function addCar() {
	let name = document.getElementById('name').value;
	let price = document.getElementById('price').value;
	let color = document.getElementById('color').value;
	let img_url = document.getElementById('image').value;
	let car = {
		"name": name,
		"price": price,
		"color": color,
		"image": img_url
	}
	//cars.push(car);
	var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
	var newRow = tableRef.insertRow(tableRef.rows.length);
	newRow.innerHTML = createRow(tableRef.rows.length, car);
}


function createRow(index, item) {
	return 
	`
		<tr>
			<td>${index}</td>
			<td>${item.name}</td>
			<td>${item.price}</td>
			<td>${item.color}</td>
			<td><img src="${item.image}" width="150px" height="100px"></td>
		</tr>
	`;
}

function clearRows() {
	var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
	tableRef.innerHTML = ""
}