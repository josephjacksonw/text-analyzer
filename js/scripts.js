// Business Logic
function textCensor(input) {
  let wordArray = input.split(" ");
  let output = [];

  wordArray.forEach(function(element) {
 //   console.log ()
    console.log(element, typeof(element));
    if (element != "zoinks" && element !="muppeteer" && element != "biffaroni" && element !="loopdaloop") {
      output.push(element);       
    }
  })
  return output;
}


function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++
    }
  });
  return wordCount;
}
  

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}