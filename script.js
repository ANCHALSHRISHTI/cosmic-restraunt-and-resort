document.addEventListener("DOMContentLoaded", function () {
    // Show Welcome Popup
    const popup = document.getElementById("welcomePopup");
    popup.style.display = "block";

    // Close Popup Function
    window.closePopup = function () {
        popup.style.display = "none";
    };

    // Personalized Customer Message
    window.displayMessage = function () {
        const name = document.getElementById("customerName").value.trim();
        const messageBox = document.getElementById("customerMessage");

        if (name === "") {
            messageBox.innerHTML = "Please enter your name!";
            return;
        }

        const firstLetter = name.charAt(0).toUpperCase();
        const messages = {
            A: "A warm welcome to you!",
            B: "Best flavors await your taste buds.",
            C: "Cherish delightful moments with us.",
            D: "Delicious dishes made with love.",
            E: "Every bite tells a story.",
            F: "Fresh ingredients, fantastic flavors!",
            G: "Great ambiance for great times.",
            H: "Happiness served on a plate.",
            I: "Indulge in mouthwatering cuisines.",
            J: "Just relax and enjoy your meal.",
            K: "Keep smiling with every bite.",
            L: "Love and taste blend perfectly here.",
            M: "Memories are made around the table.",
            N: "Nourishing meals, heartwarming service.",
            O: "Outstanding hospitality always!",
            P: "Perfect place for food lovers.",
            Q: "Quality food, quality time.",
            R: "Relax and relish your meal.",
            S: "Savor the taste of perfection.",
            T: "Taste the magic in every dish.",
            U: "Unforgettable dining experience.",
            V: "Variety that satisfies every craving.",
            W: "Warm hearts, wonderful meals.",
            X: "Xtra special service for you.",
            Y: "Your happiness is our priority.",
            Z: "Zestful flavors, zero regrets!"
        };

        const personalizedMessage = messages[firstLetter] || "Enjoy your meal with us!";
        messageBox.innerHTML = `Hello ${name}, ${personalizedMessage}`;
    };
});
