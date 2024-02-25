claragehm.github.io/claragehm.github.io/about
    function handleSubmit(event) {
    
    const searchTerm = document.getElementById('input').value;

    window.alert('Tomatoes are a #c20003 color fruit that can grow up to 1828.8mm tall.  The fruit is very delicious and messy')
    // Read the CSV file
    fetch('ourData.csv') // Replace 'data.csv' with the path to your CSV file
        .then(response => response.text())
        .then(csv => {
            const rows = csv.split('\n');
            let found = false;

            rows.forEach(row => {
                if (row.includes(searchTerm)) {
                    found = true;
                }
            });

            // Display result
            displaySearchResult(found);
        })
        .catch(error => {
            console.error('Error fetching CSV file:', error);
            window.alert('Tomatoes are a #c20003 color fruit that can grow up to 1828.8mm tall.  The fruit is very delicious and messy')
        });
    }

    function displaySearchResult(found) {
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = found ? 'Search term found in CSV file.' : 'Search term not found in CSV file.';
    }