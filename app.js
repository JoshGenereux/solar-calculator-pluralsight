
function addMonths(elem){
    let annualUseKw = 0, dailyUseKw = 0, i = 0, x = 0;
    let months = document.getElementById(elem).getElementsByTagName('input');

    for(let i = 0; i < months.length; i++){
        x = Number(months[i].value);
        annualUseKw += x;
    }
    dailyUseKw = annualUseKw/365;
    return dailyUseKw;
}

function sunHours(){
    let hrs;
    let theZone = document.forms.solarForm.zone.selectedIndex;
    theZone += 1;

    switch (theZone){
        case 1:
            hrs = 6;
            break
        case 2:
            hrs = 5.5;
            break
        case 3:
            hrs = 5;
            break
        case 4:
            hrs = 4.5;
            break
        case 5:
            hrs = 4.2;
            break
        case 6:
            hrs = 3.5;
            break
        default:
            hrs = 0;
    }
    return hrs;
}

function calculatePanel() {
    let userChoice = document.forms.solarForm.panel.selectedIndex;
    let panelOptions = document.forms.solarForm.panel.options;
    let power = panelOptions[userChoice].value;
    let name = panelOptions[userChoice].text;
    let x = [power, name]
    console.log(x)
    return x;
}


function calculateSolar (){
    let dailyUseKw = addMonths('mpc')
    console.log(dailyUseKw)

    let sunHoursPerDay = sunHours();
    console.log(sunHoursPerDay);

    let minKwNeeds = dailyUseKw/sunHoursPerDay;
    console.log(minKwNeeds)

    let realKwNeeds = minKwNeeds * 1.25;
    console.log(realKwNeeds)

    let realWattNeeds = realKwNeeds * 1000;
    console.log(realWattNeeds)

    let panelInfo = calculatePanel();
    let panelOutPut = panelInfo[0];
    let panelName = panelInfo[1];
}


