
export async function CreateAccountController(req: any, res: any){
    const { db } = req.app
    const {email, password} = req.body
    const jwt = require("jsonwebtoken")

    let token;
    try {
        token = jwt.sign(
            {
                email: email,
                password: password
            },
            "secretkeyappearshere",
            { expiresIn: "1h" }
        );
    } catch (err) {
        const error =
            new Error("Error! Something went wrong.");
        res.status(500).json({message: error.message})
    }
    const result = await db.collection('accounts').insertOne({
        email, password
    });
    res.status(200).json({message: "Customer Created"})

    console.log(result)
}