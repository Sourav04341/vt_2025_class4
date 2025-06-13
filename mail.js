
const nodemailer=require("nodemailer")
const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:  'souravgoswami586@gmail.com' ,
        pass:'gamw nmbs padc afra'
    }

})

const recipients=[
    'indranilsaha003@gmail.com',
    'biswa24062001@gmail.com',
    'srahit1402@gmail.com',
    'saurabhraj25aug2004@gmail.com',
    'sohamsarkarofficial000@gmail.com'
]
async function sendBulkEmails(){
    for(const recv of recipients){
        const mailOption={
            from:'souravgoswami586@gmail.com',
            to:recv,
            subject:"greeding",
            text:`Hellow ${recv} ,\n\n this is sourav goswami this side, greed you good afternoon`
        }
        try{
            const info=await transporter.sendMail(mailOption)
            console.log("mail is sent to everyone")
            
        }catch(err){
            console.error(err)
        }
    }
}
sendBulkEmails()