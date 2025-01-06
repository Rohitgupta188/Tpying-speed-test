const text = document.getElementById("text");
const displayed = document.getElementById("background");
const countdownEle = document.getElementById("countdown");
const message = document.getElementById("message");

let num = 30;
let countdown;
let isCounting = false;
countdownEle.textContent=num;
text.focus();

function display() {
    const sentences = [
        "The Lord understands the mentality and sincerity of a particular living entity who is engaged in Krsna consciousness and gives him the intelligence to understand the science of Krsna in the association of devotees. Discussion of krsna is very potent, and if a fortunate person has such association and tries to assimilate the knowledge, then he will surely make advancement toward spiritual realization.",
        "There are so many departments of knowledge all over the world and many huge universities, but there is, unfortunately, no university or educational institution where the science of the spirit soul is instructed. Yet the soul is the most important part of the body; without the presence of the soul, the body has no value. Still people are placing great stress on the bodily necessities of life, not caring for the vital soul.",
        "By associating with the sages, Narada got the taste for hearing and chanting the glories of the Lord, and he developed a great desire for devotional service.",
        "The process of devotional service is a very happy one (su-sukham). Why? Devotional service consists of sravanam kirtanam vishnu, so one can simply hear the chanting of the glories of the Lord or can attend philosophical lectures on transcendental knowledge given by authorized ācāryas. Simply by sitting, one can learn; then one can eat the remnants of the food offered to God, nice palatable dishes. In every state devotional service is joyful.",
        "When one’s heart is cleared of all nonsense, then one can understand what God is. Thus the process of devotional service, of Krsna consciousness, is the king of all education and the king of all confidential knowledge. It is the purest form of religion, and it can be executed joyfully without difficulty. Therefore one should adopt it.",
        "The faithless cannot accomplish this process of devotional service; that is the purport of this verse. Faith is created by association with devotees. Unfortunate people, even after hearing all the evidence of Vedic literature from great personalities, still have no faith in God. They are hesitant and cannot stay fixed in the devotional service of the Lord. Thus faith is a most important factor for progress in Krsna consciousness.In the Caitanya-caritmrita it is said that faith is the complete conviction that simply by serving the Supreme Lord, Sri Krsna, one can achieve all perfection. That is called real faith.",
        "Now, the development of that faith is the process of Krsna consciousness. There are three divisions of Krsna conscious men. In the third class are those who have no faith. Even if they are officially engaged in devotional service, they cannot achieve the highest perfectional stage. Most probably they will slip, after some time. They may become engaged, but because they haven’t complete conviction and faith, it is very difficult for them to continue in Krsna consciousness.",
        "Yet one should not conclude that because He is spread all over He has lost His personal existence. To refute such an argument the Lord says, “I am everywhere, and everything is in Me, but still I am aloof.” For example, a king heads a government which is but the manifestation of the king’s energy; the different governmental departments are nothing but the energies of the king, and each department is resting on the king’s power. But still one cannot expect the king to be present in every department personally. That is a crude example. Similarly, all the manifestations that we see and everything that exists, both in this material world and in the spiritual world, are resting on the energy of the Supreme Personality of Godhead.",
        "And yet everything that is created does not rest in Me. Behold My mystic opulence! Although I am the maintainer of all living entities and although I am everywhere, I am not a part of this cosmic manifestation, for My Self is the very source of creation.",
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
    num = 30;
    countdownEle.textContent = num;
    text.value = "";
    text.disabled = false;
    message.textContent = "";
    display();
    text.focus();
}

text.addEventListener("input", count);
display();
