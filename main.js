random_number = 0
quick_draw_data_set = ""
timer_counter = 0
drawn_sketch = ""
answer_holder = ""
score = 0

array_1=['0','1', '2', '3', '4',]
random_number = Math.floor((Math.random()*array_1.length)+1)
console.log(random_number)


function setup() 
{
    canvas = createCanvas(280,280)
    canvas.position(center)
    background("white")
}
function draw() 
{
    if (drawn_sketch == sketch) 
    {
        answer_holder = "set"
    }
    stroke_weight(5)
    stroke("red")
    if (mouseIsPressed) 
    {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}
function classifyCanvas() 
{
    classifier.classify(canvas, gotResult)
}
function clr_canvas() 
{
    background("white")
}
function preload() 
{
    classifier = ml5.imageClassifier('DoodleNet')
}
function setup() 
{
    canvas.mouseReleased(classifyCanvas)
}
function gotResult(error, result) 
{
    if (error) 
    {
        console.error(error)
    } 
    else
    {
        console.log(result)
        document.getElementById("label").innerHTML = result[0].label
        document.getElementById("confidence").innerHTML = Math.round(result[0].confidence*100) + '%'
        utterThis = new SpeechSynthesisUtterance(result[0].label)
        synth.speak(utterThis)
    }
}