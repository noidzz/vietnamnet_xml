function loadNewSports() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState === 4 && this.status === 200) {
			loadXML(this);
		}
	};
	xhttp.open('GET', 'http://vietnamnet.vn/rss/the-thao.rss', true);
	xhttp.send();
}

function loadXML(xml) {
	var i, text_title, text_node_title, link;
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("item");
	for(i = 0; i < x.length; i++){
		var type_title = document.createElement("LI");
		var type_link = document.createElement("A");

		text_title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
		link = x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;

		text_node_title = document.createTextNode(text_title);
		type_link.setAttribute("href", link)
		type_link.appendChild(text_node_title);
		type_title.appendChild(type_link);
		
		document.getElementById("news").appendChild(type_title);
	}
}

loadNewSports();
api.openweathermap.org/data/2.5/weather?id=1566165&appid=298d3bf063ede18bc160101d6080448b