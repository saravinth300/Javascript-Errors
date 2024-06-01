// try{
//     const ans = getQuotient(5,10);
//     console.log(ans)
// }catch(error){
//     console.log(error.message)
// }finally{
//     console.log("from finally")
// }


// function getQuotient(input1,input2){
//     return input1/input2;
// }

// 2 error
// try{
//     const ans = getQuotient(5,0);
//     console.log(ans)
//     if(ans===Infinity){
//         throw new Error('divided by 0 Error')
//     }
// }catch(error){
//     console.log(error.message)
// }finally{
//     console.log("from finally")
// }


// function getQuotient(input1,input2){
//     return input1/input2;
// }

// try{
//     const ans = getQuotient(5,2);
//     console.log(ans)
//     if(ans===Infinity){
//         throw new Error('divided by 0 Error')
//     }
// }catch(error){
//     console.log(error.message)
// }finally{
//     console.log("from finally")
// }


// function getQuotient(input1,input2){
//     if(isNaN(input1) || isNaN(input2)){
//         throw new Error('not a valied number')
//     }
//     return input1/input2;
// }

// 3 error
try{
    const ans = getQuotient('a',2);
    console.log(ans)
    if(ans===Infinity){
        throw new Error('divided by 0 Error')
    }
}catch(error){
    console.log(error.message)
}finally{
    console.log("from finally")
}


function getQuotient(input1,input2){
    if(isNaN(input1) || isNaN(input2)){
        throw new Error('not a valied number')
    }
    return input1/input2;
}
