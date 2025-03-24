document.addEventListener("DOMContentLoaded", function () {
    // Welcome Popup Logic
    const welcomePopup = document.getElementById("welcomePopup");
    setTimeout(() => {
        welcomePopup.style.display = "block";
    }, 1000);

    window.closePopup = function () {
        welcomePopup.style.display = "none";
    };

    // Customer Greeting Based on Name
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

    window.displayMessage = function () {
        const nameInput = document.getElementById("customerName").value.trim();
        const messageDisplay = document.getElementById("customerMessage");

        if (nameInput.length > 0) {
            let firstLetter = nameInput[0].toUpperCase();
            let message = messages[firstLetter] || "Welcome! Enjoy your meal.";
            messageDisplay.textContent = message;
            messageDisplay.style.display = "block";
        } else {
            messageDisplay.textContent = "Please enter your name.";
            messageDisplay.style.display = "block";
        }
    };

    // Resort Details Update
    const resortInfo = {
        id: "CR12345",
        phone: "xxxxxxxxxx",
        E-mail Id : "cosmic@gamil.com" ,
        address: "123 Cosmic Street, Galaxy City, Universe"
    };
    
    document.getElementById("resort-info").innerHTML += `
        <h3>Resort Details</h3>
        <p><strong>Resort ID:</strong> ${resortInfo.id}</p>
        <p><strong>Phone Number:</strong> ${resortInfo.phone}</p>
        <p><strong>E-mail Id:</strong> ${resortInfo.E-mail Id}</p>
        <p><strong>Address:</strong> ${resortInfo.address}</p>
    `;

    // Dynamic Menu Generation
    const menuData = [
        {
            category: "North Indian Cuisine",
            items: [
                { region: "Punjab", dishes: ["Butter Chicken", "Amritsari Kulcha"] },
                { region: "Kashmir", dishes: ["Rogan Josh", "Yakhni Pulao"] },
                { region: "Uttar Pradesh", dishes: ["Tunday Kabab", "Baati Chokha"] }
            ]
        },
        {
            category: "South Indian Cuisine",
            items: [
                { region: "Tamil Nadu", dishes: ["Dosa with Sambar", "Chettinad Chicken"] },
                { region: "Kerala", dishes: ["Kerala Fish Curry", "Appam & Stew"] },
                { region: "Andhra Pradesh", dishes: ["Hyderabadi Biryani", "Gongura Pachadi"] }
            ]
        },
        {
            category: "Eastern Indian Cuisine",
            items: [
                { region: "West Bengal", dishes: ["Shorshe Ilish", "Rosogolla"] },
                { region: "Odisha", dishes: ["Dalma", "Chhena Poda"] },
                { region: "Assam", dishes: ["Assamese Thali", "Masor Tenga"] }
            ]
        },
        {
            category: "Western Indian Cuisine",
            items: [
                { region: "Rajasthan", dishes: ["Dal Baati Churma", "Laal Maas"] },
                { region: "Gujarat", dishes: ["Dhokla", "Undhiyu"] },
                { region: "Maharashtra", dishes: ["Puran Poli", "Misal Pav"] },
                { region: "Goa", dishes: ["Pork Vindaloo", "Bebinca"] }
            ]
        }
    ];

    function generateMenu() {
        const menuList = document.getElementById("menu-list");
        if (!menuList) return;
        menuList.innerHTML = "";

        menuData.forEach(category => {
            let categoryDiv = document.createElement("div");
            categoryDiv.classList.add("menu-category");

            let categoryTitle = document.createElement("h3");
            categoryTitle.textContent = category.category;
            categoryTitle.classList.add("menu-title");

            let itemList = document.createElement("ul");
            itemList.classList.add("menu-items");

            category.items.forEach(region => {
                let regionItem = document.createElement("li");
                regionItem.classList.add("menu-region");
                regionItem.innerHTML = `<strong>${region.region}</strong>: ${region.dishes.join(", ")}`;
                itemList.appendChild(regionItem);
            });

            categoryDiv.appendChild(categoryTitle);
            categoryDiv.appendChild(itemList);
            menuList.appendChild(categoryDiv);
        });
    }

    generateMenu();
});
