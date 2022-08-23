document.getElementById('calculate-total').addEventListener('click', function(){
    const calculateTotalField = document.getElementById('player-total-amount');
    const calculateTotalFieldString = calculateTotalField.innerText;
    const calculateTotal = parseFloat(calculateTotalFieldString);
    
    const managerTotalCostField = document.getElementById('manager-cost');
    const managerTotalCostString = managerTotalCostField.innerText;
    const managerTotalCost = parseFloat(managerTotalCostString);

    const coachTotalCostField = document.getElementById('coach-cost');
    const coachTotalCostString = coachTotalCostField.innerText;
    const coachTotalCost = parseFloat(coachTotalCostString);

    const totalCostField = document.getElementById('total-cost');
    const totalCostString = totalCostField.innerText;
    const totalCost = parseFloat(totalCostString);
    
    const newTotal = calculateTotal + managerTotalCost + coachTotalCost;
    totalCostField.innerText = newTotal;
})
