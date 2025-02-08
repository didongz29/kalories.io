let totalCalories = 0;

function addMeal() {
    let mealName = document.getElementById("mealName").value;
    let calories = document.getElementById("calories").value;

    if (mealName === "" || calories === "") {
        alert("Please enter meal name and calorie value.");
        return;
    }

    let mealList = document.getElementById("mealList");
    let listItem = document.createElement("li");
    listItem.textContent = `${mealName} - ${calories} kcal`;

    mealList.appendChild(listItem);
    totalCalories += parseInt(calories);
    document.getElementById("totalCalories").textContent = totalCalories;

    document.getElementById("mealName").value = "";
    document.getElementById("calories").value = "";
}