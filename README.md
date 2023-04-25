# TalkingPages 🎙️📚

TalkingPages is a convenient Chrome extension that converts selected text on a webpage into speech using the Eleven Labs text-to-speech API. This powerful tool enhances the browsing experience by providing an accessible and efficient way to consume written content.

## Features ✨

- Easy-to-use Chrome extension for converting selected text to speech
- Integration with the Eleven Labs text-to-speech API
- Efficient and accessible way to consume written content on webpages

## Installation 🔧

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" using the toggle in the top right corner.
4. Click "Load unpacked" and select the folder containing the extension files.

## Usage 🚀

1. Click on the TalkingPages extension icon in the Chrome toolbar.
2. Open the `popup.js` file located in the `src` directory of the extension files in a text editor.
3. Locate the following lines of code in `popup.js`:
   ```javascript
   const apiKey = "";
   const voiceId = "";
   ```
4. Enter your Eleven Labs API key between the quotes for `apiKey` and your desired voice ID for `voiceId`. For example:
   ```javascript
   const apiKey = "your-api-key-here";
   const voiceId = "fr-FR-Standard-A";
   ```
5. Save the `popup.js` file.
6. Open Chrome and navigate to `chrome://extensions`.
7. Enable "Developer mode" using the toggle in the top right corner.
8. Click "Load unpacked" and select the folder containing the extension files.
9. Select some text on a webpage. 🖱️
10. Click the "Play Selected Text" button in the extension popup. 🎧
11. Listen to the selected text as it is read aloud, providing an efficient and accessible way to consume content.

If you don't have an Eleven Labs API key, you can sign up for one [here](https://www.eleven-labs.com/en/text-to-speech-api/).

## Roadmap 🗺️

- Support for multiple languages and voices
- Adjustable speech speed and pitch settings
- Option to pause, resume, and stop playback
- Integration with other text-to-speech APIs for more voice options
- Keyboard shortcuts for quicker access to functionality

## Contributing 🤝

Contributions are welcome and greatly appreciated. To contribute, please fork this repository and submit pull requests for new features, bug fixes, or any other improvements. Your input will help make TalkingPages even more effective and user-friendly.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
