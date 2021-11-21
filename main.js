function setup() {
    canvas = createCanvas(300,300);
    video = createCapture(VIDEO);
    canvas.position(625,450);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

}

function modelLoaded() {
    console.log("Model Loaded!!!")
}

function draw() {
    image(video,0,0,300,300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("object_output").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}