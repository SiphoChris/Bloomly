export function errorHandling(err, _req, res, next) {
  if (err || res.statusCode >= 400 || res.statusCode < 200 )
    return res.json({
      status: res.status || res.statusCode || 500,
      err: err.message
    });
  
  next();
}
//"An error occured. Please try again later."
// {
//     "emailAdd": "sipho@test.com",
//     "userPass": "securepass"
// }