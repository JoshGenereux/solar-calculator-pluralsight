function floor(diameter){
    let radius = diameter / 2;
    let floorArea = Math.PI * (radius * radius);
    return floorArea;
}

function walls(diameter, height){
    let radius = diameter/2;
    let circumference = 2 * Math.PI * radius;
    let wallArea =  circumference * height;
    return wallArea;
}

function materialsNeeded(){
    let d = document.getElementById('across').value;
    let h = document.getElementById('height').value;

    let carpetNeeded = Math.ceil(floor(d));
    let paintNeeded = Math.ceil(walls(d, h));

    console.log(`Carpet Needed is ${carpetNeeded}sqft`);
    console.log(`Paint Needed is ${paintNeeded}sqft`);
}
