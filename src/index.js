function toChars(str) {
	var i=0, arr=[];
	while (i < str.length) {
		arr.push(str.charCodeAt(i++));
	}
	return arr;
}

function reduce(hasher, base, value) {
	var i=0, j, tmp, str='';
	var chars = base ? value.match(/.{1,2}/g) : toChars(value);
	while (i < chars.length) {
		tmp = base ? parseInt(chars[i++], 16) : chars[i++];
		for (j=0; j < hasher.length;) tmp ^= hasher[j++];
		str += base ? String.fromCharCode(tmp) : ('0' + tmp.toString(16)).substr(-2);
	}
	return str;
}

export function encrypt(key) {
	return reduce.bind(reduce, toChars(key), 0);
}

export function decrypt(key) {
	return reduce.bind(reduce, toChars(key), 1);
}
