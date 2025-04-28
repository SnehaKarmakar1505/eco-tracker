document.getElementById('carbonForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const driveKm = document.getElementById('driveKm').value;
    const electricityUse = document.getElementById('electricityUse').value;
    const meatMeals = document.getElementById('meatMeals').value;
  
    const carEmissionPerKm = 0.21;
    const electricityEmissionPerKwh = 0.5;
    const meatMealEmission = 5;
  
    const driveEmissions = driveKm * carEmissionPerKm * 4;
    const electricityEmissions = electricityUse * electricityEmissionPerKwh;
    const meatEmissions = meatMeals * meatMealEmission * 4;
  
    const totalEmissions = driveEmissions + electricityEmissions + meatEmissions;
  
    // NEW: Calculate trees needed
    const treesNeeded = totalEmissions / 21; // 1 tree absorbs ~21kg CO₂ per year
  
    let resultText = `🌿 Your monthly carbon footprint is approximately ${totalEmissions.toFixed(2)} kg CO₂!`;
  
    if (totalEmissions > 1000) {
      resultText += "<br>😮 Try reducing car travel or electricity usage!";
    } else {
      resultText += "<br>👏 Great! You are eco-friendly!";
    }
  
    resultText += `<br>🌳 To balance this, you need to plant about <b>${Math.ceil(treesNeeded)}</b> trees!`;
  
    document.getElementById('result').innerHTML = resultText;
      // Update progress bar
  const progressValue = Math.max(0, 100 - (totalEmissions / 20)); // lower emissions = higher score
  document.getElementById('ecoProgress').value = progressValue;

  });
  