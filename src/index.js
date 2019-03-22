function toChars(str) {
	var i=0, arr=[];
	while (i < str.length) {
		arr.push(str.charCodeAt(i++));
	}
	return arr;
}

function reduce(arr, value, fn) {
	var j, tmp, str='', chars=toChars(value);
	while (tmp = chars.shift()) {
		for (j=0; j < arr.length; j++) tmp ^= arr[j];
		str += fn(tmp);
	}
	return str;
}

export function encode(key, value) {
	return reduce(toChars(key), value, function (x) {
		return ('0' + x.toString(16)).substr(-2);
	});
}

export function decode(key, value) {
	return reduce(toChars(key), value, function (x) {
		return String.fromCharCode(x);
	});
}
