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

  /* const titleCased = () => {
  return tutorials.map((title) => {
    const getTitle = title.split('');
    const newGetTitle = getTitle.map ((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
  
    })
    return newGetTitle.join('');  
  })

}
*/
/*

const titleCased = () => {
  return tutorials.map((tutorial) => {
    const getTitle = tutorial.split('');
    const newGetTitle = getTitle.map (function (word){ 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    return newGetTitle.join('');  
  })
}
*/

function titleCased () {
  const getTitleCase = tutorials.map (tutorial => {
    return tutorial 
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  })

  return getTitleCase;
}




/* const titleCased = () => {
  return tutorials.map((title) => {
    const getTitle = title.split('');
    const newGetTitle = []
    getTitle.forEach ((word) => {
      newGetTitle.push(word.charAt(0).toUpperCase() + word.slice(1, word.length));
    })
    return newGetTitle.join('');  
  })
}
*/