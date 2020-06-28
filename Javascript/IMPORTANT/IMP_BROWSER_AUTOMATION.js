// !!!!!!!!!!!!!! Important changes from google ------------> All of what we do here is stuff we do in the console, I have not yet learned how to make a hook allowing me to do this on VS Code or any other application, but that comes next and maybe with python

// Code Update
// Google has updated their website, this the the way to call their new classNames.

// Instead of running $('.gsfi').value = 'JavaScript tips'to input text into the search bar the updated command is $('.gLFyf').value = "Javascript tips";

// And to perform a search $('.jsb').childNodes[0].childNodes[0].click has been updated to $(".FPdoLc").childNodes[1].childNodes[1].click()
// Also note, that they added a class to the google search bar button, but honestly it is good to learn how to traverse the dom

// actual code examples for google search bar ##############################################################################################################################################################################
// $('.gLFyf')
// const searchBar = document.querySelector('.gLFyf')

// in the console
// $('.gLFyf').value = 'JavaScript tips'
// "JavaScript tips"
// https://puu.sh/FShe2/271e4d4f6d.png
// $('.FPdoLc')
// $('.FPdoLc').childNodes[0]
// #text
// $('.FPdoLc')
// $('.FPdoLc').hasChildNodes
// ƒ hasChildNodes() { [native code] }
// $('.FPdoLc').childNodes
// NodeList(3) [text, center, text]
// 0: text
// 1: center
// 2: text
// length: 3
// __proto__: NodeList
// $('.FPdoLc').childNodes[1]
// $('.FPdoLc').childNodes[1][0]
// undefined
// $('.FPdoLc').childNodes[1].childNodes
// NodeList(6) [text, input.gNO89b, text, input#gbqfbb, div.gbqfba.gbqfba-hvr, text]
// 0: text
// 1: input.gNO89b
// 2: text
// 3: input#gbqfbb
// 4: div.gbqfba.gbqfba-hvr
// 5: text
// length: 6
// __proto__: NodeList

// $('.FPdoLc').childNodes[1].childNodes[1].click() THIS CLICKS THE BUTTON ON GOOGLE HOME DOMAIN

// Instagram examples ##############################################################################################################################################################################