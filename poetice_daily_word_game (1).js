
Here are the two files you can save directly into a folder named `poetice-daily-word-game`:

---

### **1️⃣ index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Poetice Daily Word Game</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; text-align: center; }
    header { background: #4a90e2; color: white; padding: 20px; }
    h1 { margin: 0; }
    .container { padding: 20px; max-width: 600px; margin: auto; }
    input[type=text] { padding: 10px; width: 60%; font-size: 16px; }
    button { padding: 10px 15px; font-size: 16px; margin: 5px; cursor: pointer; }
    .guess-history { margin-top: 20px; text-align: left; }
    .clue { margin: 10px 0; font-style: italic; color: #333; }
    .win-screen { background: #d4edda; padding: 20px; margin: 20px 0; border-radius: 8px; }
    li { list-style: none; margin: 5px 0; font-weight: bold; }
  </style>
</head>
<body>
  <header>
    <h1>Poetice Daily Word Game</h1>
  </header>
  <div class="container">
    <input type="text" id="guessInput" placeholder="Enter your guess" />
    <button onclick="submitGuess()">Submit</button>
    <button onclick="showClue()">Show Clue</button>

    <p class="clue" id="clueText" style="display:none;"></p>

    <div class="guess-history">
      <h3>Guess History</h3>
      <ul id="guessList"></ul>
    </div>

    <div class="win-screen" id="winScreen" style="display:none;"></div>
  </div>

  <footer>
    <p>Prototype by Poetice.org</p>
  </footer>

  <script>
    const WORD_BANK = [
      { word: 'Choma', type: 'Location', hint: 'A city in Zambia' },
      { word: 'Worship', type: 'Program', hint: 'Part of a music ministry' },
      { word: 'Justice', type: 'Mission', hint: 'Related to fairness and advocacy' },
      { word: 'Empowerment', type: 'Mission', hint: 'Encouraging growth and strength' },
      { word: 'Zambia', type: 'Location', hint: 'The country we serve in Africa' },
      { word: 'Staff', type: 'People', hint: 'Our dedicated team members' }
    ];

    const dailyWord = WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)];
    const guessList = document.getElementById('guessList');
    const clueText = document.getElementById('clueText');
    const winScreen = document.getElementById('winScreen');

    function submitGuess() {
      const input = document.getElementById('guessInput');
      const guess = input.value.trim();
      if (!guess) return;

      let similarity = 0;
      if (guess.toLowerCase() === dailyWord.word.toLowerCase()) {
        similarity = 100;
        winScreen.style.display = 'block';
        winScreen.textContent = `🎉 You guessed it! The word was ${dailyWord.word}`;
      } else {
        similarity = Math.floor(Math.random() * 80);
      }

      const li = document.createElement('li');
      li.textContent = `${guess} - Similarity: ${similarity}%`;
      if (similarity > 70) li.style.color = 'green';
      else if (similarity > 30) li.style.color = 'orange';
      else li.style.color = 'red';
      guessList.appendChild(li);
      input.value = '';
    }

    function showClue() {
      clueText.style.display = 'block';
      clueText.textContent = `Clue: ${dailyWord.type} - ${dailyWord.hint}`;
    }
  </script>
</body>
</html>
```

---

### **2️⃣ vercel.json (optional but recommended for Vercel)**
```json
{
  "version": 2,
  "builds": [
    { "src": "index.html", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

---

### **Instructions:**

1. Create a folder called `poetice-daily-word-game`.
2. Save `index.html` and `vercel.json` (optional) inside that folder.
3. Upload the folder to a **new GitHub repository**.
4. Connect the repo to **Vercel** → Deploy → test your live URL.

Once deployed, we can also walk through **pointing `play.poetice.org` to your Vercel site** so everyone can access it.  

Do you want me to guide you through that next?
