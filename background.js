//Email Icon
var imgEmail = chrome.extension.getURL("/images/email.png");
var dl = document.querySelector('.d2l-minibar-activity');
var gotoemail = dl.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[3].getAttribute('href');
dl.childNodes[7].innerHTML = '<a class="d2l-minibar-activity-buckethandle" href="'+gotoemail+'"><img src="'+imgEmail+'" alt="D2L Email"></a>';
var attr = dl.childNodes[7].getAttribute('class');
dl.childNodes[7].setAttribute('class', 'D2L-Correct-email-link '+attr);

//Icons
var con = dl.childNodes[1].childNodes[1].childNodes[2];
var spacer = con.childNodes[5];
var mess = document.createElement('div');
mess.setAttribute('class', "D2L-Correct-button-label");
mess.innerHTML = "Messages";
con.insertBefore(mess, spacer);

var con = dl.childNodes[4].childNodes[1].childNodes[2];
var spacer = con.childNodes[5];
var mess = document.createElement('div');
mess.setAttribute('class', "D2L-Correct-button-label");
mess.innerHTML = "Updates";
con.insertBefore(mess, spacer);

var con = dl.childNodes[7].childNodes[0];
var mess = document.createElement('div');
mess.setAttribute('class', "D2L-Correct-button-label");
mess.innerHTML = "Email";
con.appendChild(mess);

var tallimg = chrome.extension.getURL("/images/new.D2L.LP.Main.png");

dl.childNodes[1].childNodes[1].childNodes[2].childNodes[1].setAttribute("style", "background-image: url("+tallimg+") ;")
dl.childNodes[1].childNodes[1].childNodes[2].childNodes[2].setAttribute("style", "background-image: url("+tallimg+") ;")
dl.childNodes[1].childNodes[1].childNodes[2].childNodes[3].setAttribute("style", "background-image: url("+tallimg+") ;")
dl.childNodes[1].childNodes[1].childNodes[2].childNodes[4].setAttribute("style", "background-image: url("+tallimg+") ;")
dl.childNodes[4].childNodes[1].childNodes[2].childNodes[1].setAttribute("style", "background-image: url("+tallimg+") ;")
dl.childNodes[4].childNodes[1].childNodes[2].childNodes[2].setAttribute("style", "background-image: url("+tallimg+") ;")
dl.childNodes[4].childNodes[1].childNodes[2].childNodes[3].setAttribute("style", "background-image: url("+tallimg+") ;")
dl.childNodes[4].childNodes[1].childNodes[2].childNodes[4].setAttribute("style", "background-image: url("+tallimg+") ;")

//Homepage Re-Arrange
if (document.URL == "https://spsu.view.usg.edu/d2l/home") { //home page
	var courses = document.querySelectorAll('.d2l-widget')[0]
	var recon = document.querySelectorAll('.d2l-widget')[1]
	var libra = document.querySelectorAll('.d2l-widget')[2]
	var news = document.querySelectorAll('.d2l-widget')[3]
	var cal = document.querySelectorAll('.d2l-widget')[4]
	var qlinks = document.querySelectorAll('.d2l-widget')[5]
	
	var leftparent = courses.parentNode
	var rightparent = news.parentNode
	
	while (leftparent.firstChild) {
		leftparent.removeChild(leftparent.firstChild);
	}
	while (rightparent.firstChild) {
		rightparent.removeChild(rightparent.firstChild);
	}
	
	leftparent.appendChild(courses);
	leftparent.appendChild(qlinks);
	leftparent.appendChild(news);
	
	rightparent.appendChild(libra);
	rightparent.appendChild(cal);
	rightparent.appendChild(recon);
}

//Course Home
if (document.URL.indexOf("https://spsu.view.usg.edu/d2l/home/") == 0) { //note the last char '/'
	var news = document.querySelectorAll('.d2l-widget')[0]
	var cal = document.querySelectorAll('.d2l-widget')[1]
	var conbzr = document.querySelectorAll('.d2l-widget')[2]
	var extlt = document.querySelectorAll('.d2l-widget')[3]
	var updates = document.querySelectorAll('.d2l-widget')[4]
	var bkmks = document.querySelectorAll('.d2l-widget')[5]
	
	var leftparent = news.parentNode
	var rightparent = conbzr.parentNode
	
	while (leftparent.firstChild) {
		leftparent.removeChild(leftparent.firstChild);
	}
	while (rightparent.firstChild) {
		rightparent.removeChild(rightparent.firstChild);
	}
	
	leftparent.appendChild(news);
	leftparent.appendChild(bkmks);
	leftparent.appendChild(extlt);
	
	rightparent.appendChild(cal);
	rightparent.appendChild(conbzr);
	rightparent.appendChild(updates);
}
