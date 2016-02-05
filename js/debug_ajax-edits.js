var myData;

function debugAjax(){
    
	$.ajax("data/megacities.geojson", {
		dataType: "json",
		success: callback
	});
};
    
function callback(response){
    myData = response;
    
    console.log(myData);
    
    $(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(myData));
};
    

function debugAjax2(){
    
	$.ajax("data/megacities.geojson", {
		dataType: "json",
		success: debugCallback
	});
};


function debugCallback(response){
    myData = response;
    
    console.log(myData);
	
	$(mydiv).append('DEEEERRRRRRRRRP data: ' + JSON.stringify(myData));
};

//
//$(mydiv).append('GeoJSON data: ' + JSON.stringify(myData));

$(document).ready(debugAjax);
$(document).ready(debugAjax2);