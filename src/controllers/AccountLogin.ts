
export async function AccountloginController(req: any, res: any){
    const { db } = req.app
    const {email, password} = req.body
    try{

    const result = await db.collection('accounts').findOne({
        email, password
    });
    if(result != null)
    res.status(200).json({message: "Login successful"})
else{
    res.status(500).json({message: "No Login with that name"})
}

    console.log(result)
}
catch{
    res.status(500).json({message: "Couldn't find that login"})
}
}