export default ((req, res) => {
    res.send({data: "Hola"+ process.env.REDIRECT_URI});
})