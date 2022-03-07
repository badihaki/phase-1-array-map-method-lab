const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let captializeNextCharacter = false;

const titleCased = () => {
  // map the spaces
  // console.log(`tutorials include: ${tutorials}`)
  return tutorials.map(checkLine)
}

function checkLine(line){
  console.log(`current line is ${line}`);
  /*
  for (let i = 0; i < line.lenth; i++){
    // if the current character is a space, the next character needs to be capitalized
    if(line[i] === ` `){
      console.log(`changing next character: "${line[i++]}"`);
      line[i++] = line[i++].toUpperCase();
      console.log(`character changed to: "${line[i++]}"`);
    }
  }
  */
  const newLine = line.split(' ');
  return newLine.map(function(word){
    // console.log(`changing word: ${word.replace(word[0], word[0].toUpperCase())}`);
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ')
 // line.map(checkForSpaces)
}