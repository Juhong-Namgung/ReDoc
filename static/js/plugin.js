var bundlePluginDetail = document.getElementById('bundle-plugin-detail')
var btnStart = document.getElementById('btn-redoc-start');
var btnSummary = document.getElementById('btn-redoc-summary');
var btnImage = document.getElementById('btn-redoc-image');
var btnSpeaker = document.getElementById('btn-redoc-speaker');

bundlePluginDetail.style.visibility = 'hidden'

btnStart.addEventListener('click', function(ev) {
    if(bundlePluginDetail.style.visibility == 'visible')
        bundlePluginDetail.style.visibility = 'hidden';
    else bundlePluginDetail.style.visibility = 'visible';
});


var modalImage = document.getElementById('modal-image');
btnImage.addEventListener('click', function(ev) {
    modalImage.on('shown.bs.modal');
});
