var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/kahar.png') {
		myImage/setAttribute ('src','images/icon150.png');
	} else {
		myImage.setAttribute ('src','images/kahar.png')
	}
}