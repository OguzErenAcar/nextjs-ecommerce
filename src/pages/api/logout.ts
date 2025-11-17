import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

res.setHeader("Set-Cookie", [
  "Auth=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax; Secure=false",
  "Auth.sig=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax; Secure=false"
]);

  res.status(200).json({ message: "Logged out" });
}
