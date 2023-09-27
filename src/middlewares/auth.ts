export const authUserMiddlerWare = (req: any, res: any, next: any) => {
  const auth =
    req.headers.authorization &&
    new Buffer(req.headers.authorization.split(" ")[1], "base64").toString();
  if (auth == "admin:secret") {
    next();
  } else {
    res.send("unauthorized").status(401);
  }
};
