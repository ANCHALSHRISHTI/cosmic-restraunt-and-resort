// Close welcome popup
function closePopup() {
    document.getElementById("welcomePopup").style.display = "none";
}

// Display customer message based on name's first letter
function displayMessage() {
    let name = document.getElementById("customerName").value.trim();
    if (name.length > 0) {
        let firstLetter = name.charAt(0).toUpperCase();
        let message = getMessage(firstLetter);
        document.getElementById("customerMessage").innerText = message;
    } else {
        alert("Please enter your name!");
    }
}

// Message for each alphabet
function getMessage(letter) {
    const messages = {
        "A": "A warm welcome to you!",
        "B": "Best flavors await your taste buds.",
        "C": "Cherish delightful moments with us.",
        "D": "Delicious dishes made with love.",
        "E": "Every bite tells a story.",
        "F": "Fresh ingredients, fantastic flavors!",
        "G": "Great ambiance for great times.",
        "H": "Happiness served on a plate.",
        "I": "Indulge in mouthwatering cuisines.",
        "J": "Just relax and enjoy your meal.",
        "K": "Keep smiling with every bite.",
        "L": "Love and taste blend perfectly here.",
        "M": "Memories are made around the table.",
        "N": "Nourishing meals, heartwarming service.",
        "O": "Outstanding hospitality always!",
        "P": "Perfect place for food lovers.",
        "Q": "Quality food, quality time.",
        "R": "Relax and relish your meal.",
        "S": "Savor the taste of perfection.",
        "T": "Taste the magic in every dish.",
        "U": "Unforgettable dining experience.",
        "V": "Variety that satisfies every craving.",
        "W": "Warm hearts, wonderful meals.",
        "X": "Xtra special service for you.",
        "Y": "Your happiness is our priority.",
        "Z": "Zestful flavors, zero regrets!"
    };
    return messages[letter] || "Welcome to Cosmic Restaurant & Resort!";
}

// Show food menu
function showMenu() {
    document.getElementById("menuDetails").classList.toggle("hidden");
}
