function toChars(str) {
	var i=0, arr=[];
	while (i < str.length) {
		arr.push(str.charCodeAt(i++));
	}
	return arr;
}

export function encode(key, value) {
	var i=0, j=0, str='';
	var hash = toChars(key);
	var chars = toChars(value);
	for (; i < chars.length; i++) {
		for (j=0; j < hash.length; j++) {
			chars[i] ^= hash[j];
		}
		str += ('0' + chars[i].toString(16)).substr(-2);
	}
	return str;
}


export function decode(key, value) {
	var i=0, j=0, str='';
	var hash = toChars(key);
	var chars = value.match(/.{1,2}/g);
	for (; i < chars.length; i++) {
		chars[i] = parseInt(chars[i], 16);
		for (j=0; j < hash.length; j++) {
			chars[i] ^= hash[j];
		}
		str += String.fromCharCode(chars[i]);
	}
	return str;
}
