// Typewriter effect configuration
var textArr = ["Developing Applications", "Brainstorming sessions", "a good cup of tea!", "dancing"];
var maxTextIndex = textArr.length;

var sPerChar = 100; // Time in milliseconds per character
var sBetweenWord = 1500; // Time in milliseconds between words
var textIndex = 0;
var typeInterval = null; // Variable to hold the typing interval

// Function to clear typewriter content
function clearTypewriterContent() {
    document.getElementById("type-span").innerHTML = "";
}

// Function to start the typewriter effect
function startTypewriter() {
    clearTypewriterContent(); // Clear previous content
    typing(textIndex, textArr[textIndex]);
}

// Function to type the text
function typing(index, text) {
    var charIndex = 0;
    var maxCharIndex = text.length - 1;
    typeInterval = setInterval(function() {
        document.getElementById("type-span").innerHTML += text[charIndex];
        charIndex++;
        if (charIndex > maxCharIndex) {
            clearInterval(typeInterval);
            setTimeout(function() {
                deleting(index, text);
            }, sBetweenWord);
        }
    }, sPerChar);
}

// Function to delete the text
function deleting(index, text) {
    var charIndex = text.length - 1;
    var deleteInterval = setInterval(function() {
        var currentText = document.getElementById("type-span").innerHTML;
        if (charIndex >= 0) {
            document.getElementById("type-span").innerHTML = currentText.slice(0, -1);
            charIndex--;
        } else {
            clearInterval(deleteInterval);
            textIndex = (index + 1) % maxTextIndex; // Move to the next text
            setTimeout(function() {
                startTypewriter(); // Start typing the next text
            }, sBetweenWord);
        }
    }, sPerChar);
}

// Initialize typewriter effect after page load
$(document).ready(function() {
    startTypewriter(); // Start typewriter effect
});

// Smooth scrolling with hash handling
$(document).ready(function() {
    $(".navbar-nav a").on('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Clear typewriter content immediately
        clearTypewriterContent();
        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });
});






