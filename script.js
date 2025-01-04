const text = document.getElementById("text");
const displayed = document.getElementById("background");
const countdownEle = document.getElementById("countdown");
const message = document.getElementById("message");

let num = 10;
let countdown;
let isCounting = false;

function display() {
    const sentences = [
        "The messages of the Supreme Personality of Godhead are full of potencies, and these potencies can be realized if topics regarding the Supreme Godhead are discussed amongst devotees.",
        "The Lord understands the mentality and sincerity of a particular living entity who is engaged in Kṛṣṇa consciousness and gives him the intelligence to understand the science of Kṛṣṇa in the association of devotees. Discussion of Kṛṣṇa is very potent, and if a fortunate person has such association and tries to assimilate the knowledge, then he will surely make advancement toward spiritual realization.",
        // ... (other sentences)
        "The Lord has described various kinds of knowledge and processes of religion – knowledge of the Supreme Brahman, knowledge of the Supersoul, knowledge of the different types of orders and statuses of social life, knowledge of the renounced order of life, knowledge of nonattachment, sense and mind control, meditation, etc."
    ];
    const randomIndex = Math.floor(Math.random() * sentences.length);
    displayed.textContent = sentences[randomIndex];
}

function count() {
    if (!isCounting) {
        isCounting = true;
        countdown = setInterval(() => {
            num--;
            countdownEle.textContent = num;

            if (num === 0) {
                clearInterval(countdown);
                const charCount = text.value.length;
                const wordCount = charCount / 5;
                const WPM = Math.round(wordCount / 0.5);

                message.textContent = `Typing Speed: ${WPM} WPM`;
                text.disabled = true;

                setTimeout(() => {
                    reset();
                }, 5000);
            }
        }, 1000);
    }

    verifyInput();
}

function verifyInput() {
    const currentText = text.value;
    const targetText = displayed.textContent;

    // Check if current input matches the target text
    if (targetText.startsWith(currentText)) {
        // Allow typing
        text.style.borderColor = "green"; // Optional: Change border color to indicate correct input
    } else {
        // Prevent further typing
        text.value = currentText.slice(0, -1); // Remove last character
        text.style.borderColor = "red"; // Optional: Change border color to indicate incorrect input
    }
}

function reset() {
    clearInterval(countdown);
    isCounting = false;
    num = 10;
    countdownEle.textContent = num;
    text.value = "";
    text.disabled = false;
    message.textContent = "";
    display();
}

text.addEventListener("input", count);
display();
