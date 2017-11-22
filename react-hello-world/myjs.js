var div = document.getElementById("app");
httpGet();
var i=0;
var o=0;
function httpGet(){
  $.getJSON("http://52.88.26.79:7000/?type=json&w=10&h=10", function(responseText) {

   // for(i=0;i<responseText.length;i++){
    	//var line = responseText[i]

    	//for(o=0;o<line.length;o++){
    		//div.innerHTML += '<div>'+ line[o] + '</div>'
    	//}
    	
     	//console.log(responseText[i]);
   // }

});

}