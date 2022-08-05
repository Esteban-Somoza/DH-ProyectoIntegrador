const isAdmin =(req,res,next) => { 
    if(!req.session.user.isAdmin){
        return next()
    } return res.redirect('/')
}
module.exports =isAdmin