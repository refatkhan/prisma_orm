import { prisma } from "./lib/prisma";


async function run() {
    // const createUser = await prisma.user.create({
    //     data:{
    //         name: " Farina Ahmed Khan",
    //         email:"farina@gmail.com"
    //     }
    // })

    // console.log("Created User ", createUser);

    //const create post for user id 1

    const createPost = await prisma.post.create({
        data:{
            title: "This is title for user-1",
            content: "This is optional content",
            authorId: 1
        }
    })

    console.log("Post Created", createPost);
}

run()