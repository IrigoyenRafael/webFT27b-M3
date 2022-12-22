// creamos array que simula DB y todas las funciones de la logica

let users = [];
let posts = [];

const getUsers = () => {
    // va a retornar los usuarios esta fun
    // fun normalita no usa req o res eso es en las rutas/
    return users;
}

const getUsersByName = (name) => {
    const filterUsers = users.filter(
        user => user.name === name
    )

    if(filterUsers) return filterUsers //filter.length
    else return {error: 'No hay usuarios'}

    //ternario 

    // filterUsers ? filterUsers : {error: 'No hay usuarios'}
}

let id = 1
const postUsers = (name, lastName, mail) => {
    const newUser = {
        id: ++id,
        name,
        lastName,
        mail,
        post: []
    }

    users.push(newUser)
    return newUser;
}

const getUsersById = (id) => {
    const userById = users.find(
        user => user.id === parseInt(id)
    )

    if(userById) return userById
    else return {error: 'ID invalido'}

    // userById ? userById : {error: 'ID invalido'}
}

const updateUser = (id, name, lastName, mail) => {
    const user = user.find(
        user => user.id === parseInt(id)
    )

    if(!user) return {error: 'Usuario no encontrado'}
    else {
        user.name = name
        user.lastName = lastName
        user.mail = mail

        return user
    }
}

const deleteUser = (id) => {
    const user = user.find(
        user => user.id === parseInt(id)
    )
    
    if(!user) return {error: 'Usuario no encontrado'}
    else {
        users = users.filter(
            user => user.id !== parseInt(id)
        )

        return user;
    }

}


// ------------- POST ----------

let idP = 1
const posteoPost = (userId, title, content) => {
    const newPost = {
        id: ++idP,
        title,
        content,
        userId
    }

    posts.push(newPost)

    // tambien hay que agregarlo al post del usuario respectivo

    const user = user.find(
        user => user.id === userId 
    )

    user.post.push(newPost.id)

    return newPost;
}






module.exports = {
    getUsers,
    getUsersByName,
    postUsers,
    getUsersById,
    deleteUser,
    posteoPost,
};