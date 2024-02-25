function handleSubmit(event) {
    // Prevent the default form submission behavior
    

    // Get the value from the search input
    var searchTerm = document.getElementById('input').value;

    // Do something with the search term (e.g., save it to a variable)
    console.log("Search term:", searchTerm);
    window.alert(searchTerm)
    }