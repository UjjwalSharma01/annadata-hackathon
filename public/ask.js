// Import the AssemblyAI package
import { AssemblyAI } from 'assemblyai';

// Initialize AssemblyAI client
const client = new AssemblyAI({
    apiKey: "9073f09a23a44ec69b3cf167382da3cf"
});

// Set the audio URL
const audioUrl = 'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3';

const config = {
    audio_url: audioUrl
};


    // Check if the SpeechRecognition API is supported by the browser
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window || 'mozSpeechRecognition' in window || 'msSpeechRecognition' in window) {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
      recognition.lang = 'hi-IN'; // Set the language to Hindi (India)
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
  
      // Event listener for the "Start Listening" button (Question input)
      document.querySelector('#start-btn1').addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("first button clicked")
        recognition.start();
      });
  
      // Event listener for speech recognition results (Question input)
      recognition.onresult = (event) => {
        // Get the recognized transcript and set it as the input value
        document.querySelector('#floatingInput').value = event.results[0][0].transcript;
      };
  
      // Handle errors
      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };
  
      // Check if the SpeechRecognition API is supported by the browser for the second input
      if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window || 'mozSpeechRecognition' in window || 'msSpeechRecognition' in window) {
        const recognition2 = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        recognition2.lang = 'hi-IN'; // Set the language to Hindi (India)
        recognition2.interimResults = false;
        recognition2.maxAlternatives = 1;
  
        // Event listener for the "Start Listening" button (Description textarea)
        document.querySelector('#start-btn2').addEventListener('click', (event) => {
          event.preventDefault(); // Prevent the default form submission behavior
          console.log("second button clicked")
          recognition2.start();
        });
  
        // Event listener for speech recognition results (Description textarea)
        recognition2.onresult = (event) => {
          // Get the recognized transcript and set it as the textarea value
          document.querySelector('#description-text').value = event.results[0][0].transcript;
        };
  
        // Handle errors
        recognition2.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
        };
      } else {
        // SpeechRecognition API not supported, display an error message
        document.querySelector('#description-text').value = 'Speech recognition is not supported in this browser.';
      }
    } else {
      // SpeechRecognition API not supported, display an error message
      document.querySelector('#floatingInput').value = 'Speech recognition is not supported in this browser.';
    }
  
  