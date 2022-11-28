const { encryptpass, comparePass } = require("../Helpers/encryption");
const { validateSchema } = require("../Helpers/validation");

const users = [{
    name: "jane doe",
    email: "janedoe@gmail.com",
    username: "janeey",
    password: "$2b$08$EwvIFKi3erwfxpvS0BhgA.p/QFb/A93hNsqHgdC7hkyEcY3u8kn6O"
}]

module.exports = {
      getusers: (req, res) => {
            res.send(users)
      },

      login: async (req, res) => {
            const data = req.body;
            const user = users.find(user => user.email === data.email)
            if (user) {
                  let loggedin = await comparePass(data.password, user.password).catch(err => console.log(err))

                  if (loggedin) {
                        return res.send("user logged in successfully")
                  }else{
                        return res.send("Wrong credentials")
                  }
            } else {
                  return res.send("User doesn't exist")
            }
      },

      signup: async (req, res) => {
            const data = req.body;

            let hashed_pass = await encryptpass(data.password)
            res.send({ ...data, password: hashed_pass })
      }
}