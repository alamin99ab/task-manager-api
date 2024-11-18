import UserModel from '../model/UserModel.js';



export const Registration=async(req,res)=>{
    try {
    let reqBody=req.body;
    await UserModel.create(reqBody)
    return res.json({status:"success", "Message":"user registered successfully"})
    }catch(err){
        return res.json({status:"fail", "Message":err.toString()})
    }
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