const asyncHandler=(reqestHandler)=>{
    (req,res,next)=>{
        Promise.
        resolve(reqestHandler(req,res,next)).
        reject((err)=>next)
    }
}
// ye samjh nai aya..but i will understand this soon..


export {asyncHandler}



//  const f=()=>{}
//  const f=(fun)=>()=>{}
//  const f=(fun)=>async()=>{}


// const asyncHandler=(fn)=> async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message:error.message
//         })
//     }
// }