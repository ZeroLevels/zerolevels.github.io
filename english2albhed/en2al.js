function en2al(en, al2en = false){
	var english = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
			albhed = "ypltavkrezgmshubxncdijfqowYPLTAVKREZGMSHUBXNCDIJFQOW";
		
	if (al2en) {
		[english, albhed] = [albhed, english]
	}
	
	var sentence = en.split(' '),
			newSentence = [];
			
	sentence.forEach(e=>{
		var skip = e.startsWith('\\') ? true : false;
		var word = skip ? e.slice(1) : [...e];
		var newWord = [];
		
		if (!skip) {
			word.forEach(i=>{
				newWord.push(english.includes(i) ? albhed[english.indexOf(i)] : i)
			})
			newSentence.push(newWord.join(''))
		} else {
			newSentence.push(word)
		}
	})
	
	return newSentence.join(' ')
}