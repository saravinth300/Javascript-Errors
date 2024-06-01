// try{
//     console.log(test)
// }catch(error){

//     console.log(error.message)
//     console.log(error.name)
//     console.log(error.stack)
// }


// 2 finally (always execute)

// try{
//     console.log(test)
// }catch(error){
//     console.log(error.message)
// }finally{
//     console.log("from finally")
// }

// 3 catch no finally work
// try{
//     console.log(1)
// }finally{
//     console.log("from finally")
// }
// 4 throw (maually given error)
try{
    throw new Error("my Error")
}catch(error){
    console.log(error.message)
}finally{
    console.log("from finally")
}