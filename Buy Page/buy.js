document.addEventListener("DOMContentLoaded", () => {
    const buyButton = document.querySelector(".buy-button");

    buyButton.addEventListener("click", () => {
        // Add button click animation
        buyButton.style.transform = "scale(0.9)";
        setTimeout(() => {
            buyButton.style.transform = "scale(1)";
        }, 200);

        // Show confirmation alert (can be replaced with actual functionality)
        setTimeout(() => {
            alert("Thank you for your purchase! Your order is being processed.");
        }, 300);
    });
});
