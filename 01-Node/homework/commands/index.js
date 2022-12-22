const fs = require('fs')
const request = require('request')

const echo = (args, print) => {
    print(args.join(' '));
}

const pwd = (args, print) => {
    //print(process.mainModule.path) Todo el path
    // print(__dirname.split('\\').pop()) solo la carpeta
    print(__dirname.split('\\').at(-1)) //solo la carpeta
}

const date = (args, print) => {
    print(Date());
}

const ls = (args, print) => {
    fs.readdir('.', (err, files) => {
        err
        ? console.log(err)
        // : (files.forEach(file => {
        //     process.stdout.write(file + '\n')
        // }))
        : print(files.join('\n'))
    });
}

const cat = (args, print) => {
    fs.readFile(args[0], 'utf-8', (err, data) => {
        print(data)
    })
}

const head = (args, print) => {
    fs.readFile(args[0], 'utf-8', (err, data) => {
        print(data.split('\n').splice(0, 5).join('\n'))
    })
}

const tail = (args, print) => {
    fs.readFile(args[0], 'utf-8', (err, data) => {
        print(data.split('\n').splice(-5).join('\n'))
    })
}

const curl = (args, print) => {
    request(args[0], (err, data) => {
        print(data.body)
    })
}

module.exports = {
    echo,
    pwd,
    date,
    ls,
    cat,
    head,
    tail,
    curl
}