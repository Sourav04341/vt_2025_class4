
const {faker}=require("@faker-js/faker")
const fs=require("fs")

const generateFakeuserData=(num)=>{
    const users=[]
    for(let i=0;i<=num;i++){
        const user={
            id:i+1,
            name:faker.name.fullName(),
            email:faker.internet.email(),
            phone:faker.phone.number(),
            address:{
                street:faker.address.streetAddress(),
                city:faker.address.city(),
                country:faker.address.country(),

            },
            crate_at:faker.date.past().toISOString()
                
            
        }
        users.push(user)
    }
    return users
}
const user_fakeData=generateFakeuserData(50)

fs.writeFileSync("store_fake_user_data.json",JSON.stringify(user_fakeData,null,2))
console.log("fake json user data is created sucessfully")