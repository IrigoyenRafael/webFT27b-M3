const commands = require('./commands/index');

const print = (input) => {
    process.stdout.write(input + '\n')
    process.stdout.write('prompt > ')
}

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
    //process.stdout.write(data)

    let args = data.toString().trim().split(' ');

    let cmd = args.shift(); // 'echo'

    //console.log(commands[cmd]())
    commands[cmd]
    ? commands[cmd](args, print)
    : print('Command invalid ');

    
    // console.log(args)

})
