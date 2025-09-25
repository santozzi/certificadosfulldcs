import pkg from 'jsonwebtoken';
const { verify } = pkg;
export const verifyTokenMiddleware = (req, res, next) => {
  
    const authHeader = req.header('authorization');
   if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Token de acceso no proporcionado" });
  }
   const token = authHeader;

  try {
    //si no verifica salta una excepcion
   
    
    //const decoded = verifyToken(token,jwtConfig.JWT_SECRET);
    const decoded = verify(token,"palabraSecreta");
    //guardar en el usuario que se verificó ok
    
    
    req.user = decoded;
  

    next();
  } catch (error) {
    if(error instanceof Error)
      res.status(401).json({ message: error.message()});
  }
};
