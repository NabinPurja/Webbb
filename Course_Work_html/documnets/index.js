function addToCart() {
    // Implementation for adding item to cart
    alert("Item added to cart!");
}
function validateForm() {
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
    }
    else{
        alert("Message sent successfully!");
    }
}