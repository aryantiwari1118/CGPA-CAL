document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let cgpa = parseFloat(document.getElementById('cgpa').value);
    if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
        alert('Please enter a valid CGPA between 0 and 10.');
        return;
    }
    let percentage = (cgpa - 0.5) * 10;
    document.getElementById('result').innerText = `Percentage: ${percentage.toFixed(2)}%`;
});
