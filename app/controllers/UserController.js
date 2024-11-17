export const Registration=async(req,res)=>{
    return res.json({status:"success", "Message":"user registered successfully"})
}

export const Login=async(req,res)=>{
    return res.json({status:"success", "Message":"user login successfully"})
}

export const ProfileDetails=async(req,res)=>{
    return res.json({status:"success", "Message":"user ProfileDetails successfully"})
}

export const ProfileUpdate=async(req,res)=>{
    return res.json({status:"success", "Message":"user Profileupdate successfully"})
}

export const EmailVerify=async(req,res)=>{
    return res.json({status:"success", "Message":"user EmailVerify successfully"})
}

export const CodeVerify=async(req,res)=>{
    return res.json({status:"success", "Message":"user codeVerify successfully"})
}

export const ResetPassword=async(req,res)=>{
    return res.json({status:"success", "Message":"user Passwordreset successfully"})
}