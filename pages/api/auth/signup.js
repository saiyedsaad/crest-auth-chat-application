import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";
import { hash } from "bcryptjs";

const handler = async (req, res) => {
  connectMongo().catch((error) => res.json({ error: "Connection Failed!" }));

  // Only POST Requests
  if (req.method === "POST") {
    if (!req.body) {
      return res.status(404).json({ error: "No Form Data!" });
    }

    const { username, email, password } = req.body;

    // Check Duplicate Users
    const checkExisitingUser = await Users.findOne({ email });

    if (checkExisitingUser) {
      return res.status(422).json({ message: "User Already Exists!" });
    }

    // Hash the Password
    Users.create(
      { username, email, password: await hash(password, 12) },
      function (err, data) {
        if (err) return res.status(404).json(err);
        res.status(201).json({ status: true, user: data });
      }
    );
  } else {
    return res.status(500).json({ message: "Invalid HTTP Method!" });
  }
};

export default handler;
