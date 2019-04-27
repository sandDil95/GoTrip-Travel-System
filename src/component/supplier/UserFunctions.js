import axios from 'axios';



export const vehicleregister = newVehicle =>{
    return axios
    .post('vehicleReg/vehicleregister' ,{
        first_name:newVehicle.first_name,
        last_name:newVehicle.last_name,
        address:newVehicle.address,
        email:newVehicle.email,
        contactNo:newVehicle.contactNo,
        withDriver:newVehicle.withDriver,
        withoutDriver:newVehicle.withoutDriver,
        vehicle_photo:newVehicle.vehicle_photo,
        vehicle_model:newVehicle.vehicle_model,
        begingdate:newVehicle.begingdate,
        endingdate:newVehicle.endingdate,
        location:newVehicle.location,
        sheet_num:newVehicle.sheet_num,
        pay_per_onekm:newVehicle.pay_per_onekm,
        profile_image:newVehicle.profile_image,
        password:newVehicle.password
        

    })
    
    
        
    
    
    .then(res => {
        console.log('Registered!')
    })
}

// export const sendEmail = newEmail =>{
//     return axios
//     .post('vehicleReg/vehicleregister' ,{
//         first_name:newEmail.first_name,
//         email:newEmail.email,
//         contactNo:newEmail.contactNo
        

//     })
    
    
        
    
    
//     .then(res => {
//         console.log('Succes Send Email!')
//     })
// }
export const imageupload = newImage =>{
    return axios
    .post('imageUp/imageupload' ,{
        
        vehicle_photo:newImage.vehicle_photo,
        vehicle_model:newImage.vehicle_model
        
        

    })
    
    
        
    
    
    .then(res => {
        console.log('Registered!')
    })
}

export const hotelregister = newHotel =>{
    return axios
    .post('hotelReg/hotelregister' ,{
        first_name:newHotel.first_name,
        last_name:newHotel.last_name,
        address:newHotel.address,
        email:newHotel.email,
        contactNo:newHotel.contactNo,
        hotel_photo:newHotel.hotel_photo,
        begingdate:newHotel.begingdate,
        endingdate:newHotel.endingdate,
        single_room_num:newHotel.single_room_num,
        double_room_num:newHotel.double_room_num,
        password:newHotel.password
        

    })
    
    
        
    
    
    .then(res => {
        console.log('Registered!')
    })
}

export const loginVehicle = vehicleuser =>{
    return axios
    .post('vehicleLog/login' ,{
        email:vehicleuser.email,
        password:vehicleuser.password
    })
    .then(res =>{
        localStorage.setItem('usertoken' , res.data)
        return res.data
    })
    .catch(err =>{
        console.log(err)
    })
}
export const loginHotel = hoteluser =>{
    return axios
    .post('hotelLog/login' ,{
        email:hoteluser.email,
        password:hoteluser.password
    })
    .then(res =>{
        localStorage.setItem('usertoken' , res.data)
        return res.data
    })
    .catch(err =>{
        console.log(err)
    })
}

