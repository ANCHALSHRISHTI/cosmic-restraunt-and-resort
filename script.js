document.addEventListener("DOMContentLoaded", function () {
    // Name-based personalized message function
    const messages = {
        A: "Awesome choice to visit us!", B: "Best wishes for your stay!", C: "Come enjoy our delicious cuisines!",
        D: "Delightful moments await you!", E: "Experience luxury at its finest!", F: "Feel the comfort of our resort!",
        G: "Get ready for a memorable experience!", H: "Hospitality at its best!", I: "Indulge in great food and ambiance!",
        J: "Join us for an unforgettable stay!", K: "Kind service and delicious meals await!", L: "Luxury and comfort guaranteed!",
        M: "Make the most of your visit!", N: "Never-ending happiness at our resort!", O: "Outstanding service and great food!",
        P: "Perfect getaway for you!", Q: "Quality dining and relaxation!", R: "Relax and rejuvenate with us!",
        S: "Savor the flavors of India!", T: "Taste the best dishes with us!", U: "Unwind and enjoy at Cosmic Resort!",
        V: "Vacation of your dreams!", W: "Welcome to a world of flavors!", X: "Xperience the best hospitality!",
        Y: "Your satisfaction is our priority!", Z: "Zesty flavors and amazing ambiance!"
    };

    document.getElementById("customerName").addEventListener("input", function () {
        let name = this.value.trim();
        let firstLetter = name.charAt(0).toUpperCase();
        let message = messages[firstLetter] || "Welcome to Cosmic Resort!";
        document.getElementById("customerMessage").innerText = message;
    });

    // Menu data and functionality
    const menuData = {
        "North India": {
            "Punjab": {
                "Butter Chicken": "Creamy tomato-based chicken curry. High in protein & rich in flavors.",
                "Amritsari Kulcha": "Stuffed crispy bread with masala filling. Great energy source."
            },
            "Uttar Pradesh": {
                "Tunday Kabab": "Melt-in-mouth mutton kebabs. Protein-packed & aromatic spices.",
                "Baati Chokha": "Roasted wheat balls with mashed potatoes & eggplant. Rich in fiber & minerals."
            }
        },
        "South India": {
            "Tamil Nadu": {
                "Dosa with Sambar": "Crispy fermented crepe with lentil soup. Probiotic-rich & great for digestion.",
                "Chettinad Chicken": "Spicy & flavorful chicken dish. Boosts metabolism & immunity."
            },
            "Kerala": {
                "Kerala Fish Curry": "Tangy coconut-based fish curry. High in Omega-3 for heart health.",
                "Appam & Stew": "Soft rice pancakes with coconut stew. Rich in fiber & gut-friendly."
            }
        },
        "East India": {
            "West Bengal": {
                "Shorshe Ilish": "Hilsa fish in mustard gravy. High in Omega-3 & good for the heart.",
                "Rosogolla": "Soft, spongy cottage cheese dessert. Light & delicious for digestion."
            },
            "Odisha": {
                "Dalma": "Lentils with vegetables and raw papaya. Packed with proteins & fiber.",
                "Chhena Poda": "Burnt cheesecake made from cottage cheese. Calcium-rich & nutritious dessert."
            }
        },
        "West India": {
            "Rajasthan": {
                "Dal Baati Churma": "Wheat dumplings with lentils & sweet crumbles. Rich in fiber & energy-boosting.",
                "Laal Maas": "Fiery red mutton curry. Great for metabolism & winter warming."
            },
            "Goa": {
                "Pork Vindaloo": "Fiery, vinegar-based pork curry. High in protein & bold flavors.",
                "Bebinca": "Layered coconut milk dessert. Great for digestion & rich taste."
            }
        }
    };

    const menuList = document.getElementById("menu-list");

    for (let region in menuData) {
        let regionDiv = document.createElement("div");
        regionDiv.className = "menu-region";
        regionDiv.innerText = region;

        let stateList = document.createElement("div");
        stateList.className = "state-list";

        for (let state in menuData[region]) {
            let stateDiv = document.createElement("div");
            stateDiv.className = "state";
            stateDiv.innerText = state;

            let dishList = document.createElement("div");
            dishList.className = "dish-list";

            for (let dish in menuData[region][state]) {
                let dishItem = document.createElement("div");
                dishItem.className = "dish-item";
                dishItem.innerText = dish;

                let dishDetails = document.createElement("div");
                dishDetails.className = "dish-details";
                dishDetails.innerText = menuData[region][state][dish];

                dishItem.addEventListener("click", function () {
                    dishDetails.style.display = dishDetails.style.display === "block" ? "none" : "block";
                });

                dishList.appendChild(dishItem);
                dishList.appendChild(dishDetails);
            }

            stateDiv.addEventListener("click", function () {
                dishList.style.display = dishList.style.display === "block" ? "none" : "block";
            });

            stateList.appendChild(stateDiv);
            stateList.appendChild(dishList);
        }

        regionDiv.addEventListener("click", function () {
            stateList.style.display = stateList.style.display === "block" ? "none" : "block";
        });

        menuList.appendChild(regionDiv);
        menuList.appendChild(stateList);
    }
});
