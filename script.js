function nextPage() {
    // Redirect to another page (e.g., thank you page)
    window.location.href = "yes.html"; // Change this to your desired URL
}

function moveButton(event) {
            const noButton = document.getElementById("noButton");
            const maxWidth = window.innerWidth - noButton.offsetWidth;
            const maxHeight = window.innerHeight - noButton.offsetHeight;

            const randomX = Math.floor(Math.random() * maxWidth);
            const randomY = Math.floor(Math.random() * maxHeight);

            noButton.style.position = "absolute"; // Ensure the button is positioned absolutely
            noButton.style.left = randomX + "px";
            noButton.style.top = randomY + "px";
            noButton.classList.add("wiggle");

            // Create heart element
            const heart = document.createElement("img");
            heart.classList.add("heart");
            heart.src = "https://media.tenor.com/Oo-1SBMVYNUAAAAi/bunny-cute.gif"; // Update with a valid path
            heart.style.left = event.clientX + "px"; // Position at cursor
            heart.style.top = event.clientY + "px"; 
            document.body.appendChild(heart);

            // Fade out heart after 1 second
            setTimeout(() => {
                heart.style.opacity = 0;
                setTimeout(() => {
                    document.body.removeChild(heart);
                }, 1000); // Remove after fade out
            }, 1000); // Start fade out after 1 second
        }
