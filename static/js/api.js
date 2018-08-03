var contentText = document.getElementById('content-text');
var contentImage = document.getElementById('content-image');

var btnText = document.getElementById('btn-menu-text');
var btnImage = document.getElementById('btn-menu-image');

contentImage.style.display = 'none';
btnImage.addEventListener('click', function(){
    contentText.style.display = 'none';
    contentImage.style.display = 'block';
});

btnText.addEventListener('click', function(){
    contentImage.style.display = 'none';
    contentText.style.display = 'block';
});


var btnSummary = document.getElementById('btn-test-summary');
var btnImage = document.getElementById('btn-test-image');
var inputText = document.getElementById('input-test');
var modalContentSummary = document.getElementById('modal-content-summary');
var modalContentImage = document.getElementById('modal-content-image')
btnSummary.addEventListener('click', function(){
	modalContentSummary.innerHTML = "<p>Please wait for summarization.</p>";
	// var request = new XMLHttpRequest();
	// request.open('POST', '/test_api', true);
	// request.onload = function () {
	//   // Begin accessing JSON data here
	//   var data = JSON.parse(this.response);
	//   console.log(data);
	//   modalContentSummary.innerHTML = "";
	// }
	// request.send('abdc');
});

btnImage.addEventListener('click', function(){
	modalContentImage.innerHTML = "<p>Please wait for search.</p>";
	var request = new XMLHttpRequest();
	request.open('POST', '/api/image', true);
	request.onload = function () {
	  var img_url = JSON.parse(this.response);
	  console.log(img_url);
	  modalContentImage.innerHTML = '<img src="' + img_url + '" class="modal-content modal-img"></img>';
	}
	request.send(inputText.value);
});
