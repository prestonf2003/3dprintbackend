export async function AccountloginController(req: any, res: any) {
  const { db } = req.app;
  const { email, password } = req.body;
  const jwt = require("jsonwebtoken")
  let existingUser;
  try {
      existingUser =  await db.collection("accounts").findOne({
          email,
          password,
        });
  } catch {
      const error =
          new Error(
              "Error! Something went wrong."
          );
      res.status(500).json({message: error.message})
  }
  let token;
  try {
      //Creating jwt token
      token = jwt.sign(
          {
              email: existingUser.email,
              password: existingUser.password
          },
          "secretkeyappearshere",
          { expiresIn: "1h" }
      );
  } catch (err) {
      console.log(err);
      const error =
          new Error("Error! Something went wrong.");
      res.status(500).json({message: error.message})
  }

  res
      .status(200)
      .json({
          success: true,
          data: {
              email: existingUser.email,
              password: existingUser.password,
              token: token,
          },
      });
};

// Handling post request


//   try {
//     const result = await db.collection("accounts").findOne({
//       email,
//       password,
//     });
//     if (email.IsNullOrWhiteSpace() || password.IsNullOrWhiteSpace()) {
//       res.status(200).json({ message: "Invalid Credentials" });
//     }
//     if (result != null) res.status(200).json({ message: "Login successful" });
//     else {
//       res.status(500).json({ message: "No Login with that name" });
//     }

//     console.log(result);
//   } catch {
//     res.status(500).json({ message: "Couldn't find that login" });
//   }
// }

