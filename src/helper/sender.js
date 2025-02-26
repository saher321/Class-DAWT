export const sendResponse = (res, status, message,data)=>{

    return res.status(200).json({status, success: status ? 'sucess': 'error', message,data})

}

export const sendError = (res,error)=>{

    return res.status(500).json({status:false, success:  'error', error: error.message})

}

export const sendToken = async(res, user, message)=>{

    try {
        console.log(user, 'token')
        const token = user.getAuthToken()
        console.log(token)

        const contents = {
            "access_token": token,
            user
        }
    
        return res.status(200).json({status:true, success: 'sucess', message, data: contents})
    
    } catch (error) {
        sendError(res,error)
    }

   
}