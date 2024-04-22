var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];

var recognition = new SpeechRecognition();
if (SpeechGrammarList) {
  var speechRecognitionList = new SpeechGrammarList();
  var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
}
recognition.continuous = false;
recognition.lang = 'pl-PL';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

var colorHTML= '';
colors.forEach(function(v, i, a){
  console.log(v, i);
  colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
});
hints.innerHTML = 'Tap/click then say a color to change the background color of the app. Try ' + colorHTML + '.';

function funkcja() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

recognition.onresult = function(event) {
  
  console.log(event.results[0][0].transcript);
  var color = event.results[0][0].transcript;
  switch(color) {
    case "akwamaryna":
      color = "aqua";
      break;
    case "lazur":
      color = "azure";
      break;
      case "beżowy":
        color = "beige";
        break;
        case "bisque":
      color = "bisque";
      break;
      case "czarny":
      color = "black";
      break;
      case "niebieski":
      color = "blue";
      break;
      case "brązowy":
      color = "brown";
      break;
      case "czekoladowy":
      color = "chocolate";
      break;
      case "koralowy":
      color = "coral";
      break;
      case "karmazynowy":
      color = "crimson";
      break;
      case "cyjan":
      color = "cyan";
      break;
      case "fuksja":
      color = "fuchsia";
      break;
      case "widmo biały":
      color = "ghostwhite";
      break;
      case "złoty":
      color = "gold";
      break;
      case "nawłoć":
      color = "goldenrod";
      break;
  }
  diagnostic.textContent = 'Result received: ' + color + '.';
  bg.style.backgroundColor = color;
  console.log('Confidence: ' + event.results[0][0].confidence);
}

function stop() {
  recognition.stop();
}
 
/*recognition.onspeechend = function() {
  recognition.stop();
}*/

/*recognition.onnomatch = function(event) {
  diagnostic.textContent = "I didn't recognise that color.";
}*/

/*recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}*/