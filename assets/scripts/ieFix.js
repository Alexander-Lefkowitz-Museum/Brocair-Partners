var ie;
if (!!document.compatMode && !typeof document.documentElement.style.maxHeight !== "undefined" && !document.documentMode) {
	ie =  6;
} else if (typeof document.documentElement.style.maxHeight !== "undefined" && !document.documentMode) {
	ie =  7;
} else if (document.documentMode && !window.performance) {
	ie =  8;
} else if (document.documentMode && !!window.performance) {
	ie =  9;
}
if (1) {
	var docCreateElement = document.createElement, ssheet = document.createElement('style'), 
	    html5elms = ["header","footer","section","aside","nav","article","hgroup","time"],
	    sheet = "section, article, aside, footer, header, nav, hgroup { display:block }\n",
	    elmsLength = html5elms.length;
	window.console = {log:function(){}}

	if (ie < 8) {sheet += "hr {display:block}\n"}
	while (elmsLength) { elmsLength--; docCreateElement(html5elms.pop())}
	
	ssheet.setAttribute("type", "text/css");
	ssheet.id = "ieFix";
		
	document.getElementsByTagName('head')[0].appendChild(ssheet);
	if (ssheet.styleSheet) {ssheet.styleSheet.cssText = sheet}
}