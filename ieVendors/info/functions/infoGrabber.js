var itemType = {
	AMMO: " (Ammo)",
	ALCH: " (Aid)",
	ARMO: " (Apparel)",
	BOOK: " (Misc)",
	MISC: " (Misc)",
	WEAP: " (Weapon)",
	LVLI: ""
}

function getList (e) {
	var list = e ? e.split(',').map(items=>items.split('|')) : ""
	return e ? list.map(item=>"<span itemsearch='"+uniquesSimplified[item[0]].toLowerCase()+"'class='item'>" + item[2] + "x " + uniquesSimplified[item[0]] + itemType[item[1]] + "</span>").join("<br>") : "Empty"
}

function getItemsOnly (e) {
	var list = e ? e.split(',').map(items=>items.split('|')) : ""
	return e ? list.map(item=>uniquesSimplified[item[0]]) : ["Empty"]
}

function unshorten (e) {
	var list = e ? e.split(',').map(items=>items.split('|')) : ""
	list ? list.forEach((item) => item[0] = uniquesSimplified[item[0]]) : ""
	return e ? list.join('|') : ""
}