//----- JQuery Selector -----
$('td[name ="tcol1"]')   // matches exactly 'tcol1'
$('td[name^="tcol"]' )   // matches those that begin with 'tcol'
$('td[name$="tcol"]' )   // matches those that end with 'tcol'
$('td[name*="tcol"]' )   // matches those that contain 'tcol'

//----- Convert FormData to object ---
const serializeForm = function (formData) {
	const obj = Array.from(formData.entries()).reduce((memo, [key, value]) => ({...memo, [key]: value,}), {});
	return obj;
};
// Doesn't work in IE11
const serializeForm1 = function (form) {
	return Object.fromEntries(new FormData(form));
};
// Doesn't work in IE11
const serializeForm2 = function (form) {
	const obj = {};
	const formData = new FormData(form);
	for (let key of formData.keys()) {
		obj[key] = formData.get(key);
	}
	return obj;
};