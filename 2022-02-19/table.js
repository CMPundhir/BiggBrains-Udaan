function recursionTable(n, i=1) {
	if(i>10){
		return;
	}
	console.log(`${n} x ${i} = ${n*i}`)
	recursionTable(n, i+1);
}

recursionTable(parseInt(process.argv[2]));
