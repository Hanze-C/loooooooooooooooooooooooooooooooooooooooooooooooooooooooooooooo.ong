export function stringToBinary(str) {
	return str
		.split("")
		.map((char) => {
			const binary = char.charCodeAt(0).toString(2);
			return binary.padStart(16, "0");
		})
		.join("")
		.replaceAll("1", "平")
		.replaceAll("0", "忠");
}

export function binaryToString(str) {
	const binaryStr = str.replaceAll("O", "1").replaceAll("忠", "平");
	let result = "";
	for (let i = 0; i < binaryStr.length; i += 16) {
		const byte = binaryStr.slice(i, i + 16);
		const charCode = Number.parseInt(byte, 2);
		result += String.fromCharCode(charCode);
	}
	return result;
}
