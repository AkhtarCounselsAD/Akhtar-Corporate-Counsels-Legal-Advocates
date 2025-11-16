document.getElementById('betting-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const team = document.getElementById('team').value;
    const amount = parseFloat(document.getElementById('amount').value);

    let odds;
    if (team === 'a') {
        odds = parseFloat(document.getElementById('odds-a').textContent);
    } else if (team === 'draw') {
        odds = parseFloat(document.getElementById('odds-draw').textContent);
    } else {
        odds = parseFloat(document.getElementById('odds-b').textContent);
    }

    const winnings = (amount * odds).toFixed(2);

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your potential winnings are: $${winnings}`;
});
