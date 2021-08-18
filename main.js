Webcam.set({
width:350,height:300,
Image_format:'png',
png_quality:90
});
var Jio = document.getElementById("camera");
Webcam.attach("#camera");  
function take_phota(){
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML = '<img id="superman" src="'+ data_uri + '"/>';    
});
}
console.log('ml5 version:' , ml5.version);
var CPU = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-EUNmkulg/',modelloaded);
function modelloaded(){
console.log("modelloaded");
}
function checkers(){
    var img_img = document.getElementById("superman");
    CPU.classify(img_img,gotResult);
    }
    function gotResult(error,results){
    if(error){
    console.error(error);
    }
    else{
    console.log(results);
    document.getElementById("result_name").innerHTML = results[0].label;
    document.getElementById("result_confidence").innerHTML = results[0].confidence.toFixed(3);
    
    }
    }