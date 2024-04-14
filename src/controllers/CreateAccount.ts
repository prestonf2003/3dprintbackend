
export async function CreateAccountController(req: any, res: any){
    const { db } = req.app
    const {email, password} = req.body
    
    const result = await db.collection('accounts').insertOne({
        email, password
    });
    res.status(200).json({message: "Customer Created"})

    console.log(result)
}