
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
    return x;
}


function calculateSolar (){
    let dailyUseKw = addMonths('mpc')

    let sunHoursPerDay = sunHours();

    let minKwNeeds = dailyUseKw/sunHoursPerDay;

    let realKwNeeds = minKwNeeds * 1.25;

    let realWattNeeds = realKwNeeds * 1000;

    let panelInfo = calculatePanel();
    let panelOutPut = panelInfo[0];
    let panelName = panelInfo[1];

    let panelsNeeded = Math.ceil(realWattNeeds / panelOutPut);

    let feedback = ``;
    feedback += `<p>Based on your average daily use of ${Math.round(dailyUseKw)} KWh, you will need
                to purchase ${panelsNeeded}, ${panelName} solar panels to offset 100% of your electricity bill.`;
    feedback += `<h2>Additional Details</h2>`;
    feedback += `<p>Your average daily electricity consumption: ${Math.round(dailyUseKw)} KWh per day.`;
    feedback += `<p>Average sunshine hours per day: ${sunHoursPerDay}`;
    feedback += `<p>Realistic watts needed per hour: ${Math.round(realWattNeeds)} watts/hour`;
    feedback += `<p>The ${panelName} panel your selected generates about ${panelOutPut} watts per hour.`;

    document.getElementById('feedback').innerHTML = feedback;
}


