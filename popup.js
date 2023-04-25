const playText = async (text) => {
  const apiKey = "API_KEY"; // Replace with your API key
  const voiceId = "VOICE_ID"; // Replace with the desired voice ID

  const requestBody = {
    text,
  };

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": apiKey,
      },
      body: JSON.stringify(requestBody),
    }
  );

  if (response.status === 200) {
    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
  } else {
    console.error("Error fetching audio:", response.statusText);
  }
};

document.getElementById("playText").addEventListener("click", () => {
  chrome.tabs.executeScript(
    {
      code: "window.getSelection().toString();",
    },
    (selection) => {
      const text = selection[0];
      if (text) {
        playText(text);
      }
    }
  );
});
