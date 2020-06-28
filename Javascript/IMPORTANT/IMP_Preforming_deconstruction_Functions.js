const user = {
    name: 'Kristine',
    email: 'kristine@devcamp.com'
  }
  
  const renderUser = ({ name, email }) => {
    console.log(`${name}: ${email}`);
  }
  
  renderUser(user);//?


// const bank = {
//   accountNum: 454812259,
//   name: 'John Doe',
//   balance: 1257
// }

// const bankInfo = ({accountNum, name, balance}) => {
//   return (`Hi ${name}! Your current balance is $${balance}. Account#: ${accountNum}.`)
// }

// bankInfo(bank);


// Guide to Adding Default Object Values to JavaScript Function Arguments ##############################################################################################################################
const blog = {
  title: 'My great post',
  summary: 'Summary of my post'
}

const openGraphMetadata = ({ title, summary = 'A DailySmarty Post' }) => {
  return(`
    og-title=${title}
    og-description=${summary}
  `);
}

openGraphMetadata(blog);//?