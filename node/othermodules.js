// import fs from 'fs'


 // fs.writeFileSync('info.txt','welcome to codedesk')



// const show = fs.readFileSync('info.txt', 'utf-8');

// console.log(show);

// import abc from 'fs'

// abc.writeFileSync('api.file','this is node.js apifile')

// const api = abc.readFileSync('api.file', 'utf-8')

// console.log(api)

import file  from 'fs'

// file.writeFileSync('file.text', 'welcome to codedesk')

const data = file.readFileSync('file.text', 'utf-8')
console.log(data)