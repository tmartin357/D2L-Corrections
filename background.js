var dl = document.querySelector('.d2l-minibar-activity');
var gotoemail = dl.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[3].getAttribute('href');
dl.childNodes[7].innerHTML = '<a href="'+gotoemail+'"><img src="https://raw.github.com/tmartin357/D2L-Corrections/master/email.png" alt="D2L Email"></a>';
var attr = dl.childNodes[7].getAttribute('class');
dl.childNodes[7].setAttribute('class', 'D2L-Correct-email-link '+attr);
