document.getElementById("matchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let personality = document.getElementById("personality").value;

    if (!personality) {
        alert("Please select a personality type!");
        return;
    }

    let roommateOptions = {
        "Introvert": "John (Loves quiet time & reading)",
        "Extrovert": "Mike (Loves parties & socializing)",
        "Ambivert": "Sarah (Balanced mix of quiet & fun)"
    };

    let matchResult = roommateOptions[personality];

    alert("Your Best Match: " + matchResult);
});
