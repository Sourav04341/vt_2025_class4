
const server=require("express")
const app=server()
const math=require("./math")

app.get("/add",(req,res)=>{
    const {a,b}=req.query
    const add_result=math.add(Number(a),Number(b))
    res.json({operation:"ADD", add_result})
})

app.get("/sub",(req,res)=>{
    const {a,b}=req.query
    const sub_result=math.sub(Number(a),Number(b))
    res.json({operation:"SUB",sub_result})
})
app.get("/mul",(req,res)=>{
    const {a,b}=req.query
    const mul_result=math.mul(Number(a),Number(b))
    res.json({operation:"MUL",mul_result})
})
app.get("/div",(req,res)=>{
    const {a,b}=req.query
    const div_result=math.div(Number(a),Number(b))
    res.json({operation:"DIV",div_result})
})
app.get("/add",(req,res)=>{
    const {a,b}=req.query
    const pow_result=math.pow(Number(a),Number(b))
    res.json({operation:"POWER",pow_result_result})
})

app.listen(8000)