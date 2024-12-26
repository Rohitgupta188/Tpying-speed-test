const text = document.getElementById("text");
      const displayed = document.getElementById("background");
      const countdownEle = document.getElementById("countdown");
      const message = document.getElementById("message");

      let num = 30;
      let countdown;
      let isCounting = false;

      function display() {
        const sentences = [
          "The messages of the Supreme Personality of Godhead are full of potencies, and these potencies can be realized if topics regarding the Supreme Godhead are discussed amongst devotees.",
          "The Lord understands the mentality and sincerity of a particular living entity who is engaged in Kṛṣṇa consciousness and gives him the intelligence to understand the science of Kṛṣṇa in the association of devotees. Discussion of Kṛṣṇa is very potent, and if a fortunate person has such association and tries to assimilate the knowledge, then he will surely make advancement toward spiritual realization",
          "The Bhagavad-gītā, especially from the Second Chapter on, stresses the importance of the soul. In the very beginning, the Lord says that this body is perishable and that the soul is not perishable (antavanta ime dehā nityasyoktāḥ śarīriṇaḥ).",
          "That is a confidential part of knowledge: simply knowing that the spirit soul is different from this body and that its nature is immutable, indestructible and eternal.",
          "For those who are engaged in the devotional service of the Supreme Personality of Godhead, all sinful reactions, whether fructified, in the stock, or in the form of a seed, gradually vanish. Therefore the purifying potency of devotional service is very strong, and it is called pavitram uttamam, the purest. Uttama means transcendental. ",
          "It is said that the execution of devotional service is so perfect that one can perceive the results directly. This direct result is actually perceived, and we have practical experience that any person who is chanting the holy names of Kṛṣṇa (Hare Kṛṣṇa, Hare Kṛṣṇa, Kṛṣṇa Kṛṣṇa, Hare Hare/ Hare Rāma, Hare Rāma, Rāma Rāma, Hare Hare) in course of chanting without offenses feels some transcendental pleasure and very quickly becomes purified of all material contamination.",
          "By associating with the sages, Nārada got the taste for hearing and chanting the glories of the Lord, and he developed a great desire for devotional service. Therefore, as described in the Vedānta-sūtra, prakāśaś ca karmaṇy abhyāsāt: if one is engaged simply in the acts of devotional service, everything is revealed to him automatically, and he can understand. This is called pratyakṣa, directly perceived.",
          "The most confidential part of knowledge is that one should become a pure devotee of Kṛṣṇa and always think of Him and act for Him. One should not become an official meditator. Life should be so molded that one will always have the chance to think of Kṛṣṇa. One should always act in such a way that all his daily activities are in connection with Kṛṣṇa. He should arrange his life in such a way that throughout the twenty-four hours he cannot but think of Kṛṣṇa.",
          "And the Lord’s promise is that anyone who is in such pure Kṛṣṇa consciousness will certainly return to the abode of Kṛṣṇa, where he will be engaged in the association of Kṛṣṇa face to face. This most confidential part of knowledge is spoken to Arjuna because he is the dear friend of Kṛṣṇa. Everyone who follows the path of Arjuna can become a dear friend to Kṛṣṇa and obtain the same perfection as Arjuna.",
          "These words stress that one should concentrate his mind upon Kṛṣṇa – the very form with two hands carrying a flute, the bluish boy with a beautiful face and peacock feathers in His hair. There are descriptions of Kṛṣṇa found in the Brahma-saṁhitā and other literatures.",
          "One should fix his mind on this original form of Godhead, Kṛṣṇa. One should not even divert his attention to other forms of the Lord. The Lord has multiforms as Viṣṇu, Nārāyaṇa, Rāma, Varāha, etc., but a devotee should concentrate his mind on the form that was present before Arjuna.",
          "Concentration of the mind on the form of Kṛṣṇa constitutes the most confidential part of knowledge, and this is disclosed to Arjuna because Arjuna is the most dear friend of Kṛṣṇa’s.",
          "The Lord has described various kinds of knowledge and processes of religion – knowledge of the Supreme Brahman, knowledge of the Supersoul, knowledge of the different types of orders and statuses of social life, knowledge of the renounced order of life, knowledge of nonattachment, sense and mind control, meditation, etc.",

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
      }

      text.addEventListener("input", count);
      display();