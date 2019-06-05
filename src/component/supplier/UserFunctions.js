// import axios from 'axios';



// export const vehicleregister = newVehicle =>{
    
//     // var oVehicle = newVehicle.size;
//     // if(oVehicle==='driver'){
//     //     var oVehicle=false;
//     //     console.log(oVehicle);
//     // }else{
//     //     var oVehicle=true;
//     //     console.log(oVehicle);
//     // }
//     return axios

//     .post('vehicleReg/vehicleregister' ,{
//         first_name:newVehicle.first_name,
//         last_name:newVehicle.last_name,
//         address:newVehicle.address,
//         email:newVehicle.email,
//         contactNo:newVehicle.contactNo,
//         oVehicle:newVehicle.oVehicle,
//         // size:newVehicle.size,
//         // withDriver:newVehicle.withDriver,
//         // withoutDriver:newVehicle.withoutDriver,
//         //vehicle_photo:newVehicle.vehicle_photo,
//         vehicle_model:newVehicle.vehicle_model,
//         supplier_name:newVehicle.supplier_name,
//         vehicle_no:newVehicle.vehicle_no,
//         begingdate:newVehicle.begingdate,
//         endingdate:newVehicle.endingdate,
//         location:newVehicle.location,
//         sheet_num:newVehicle.sheet_num,
//         pay_per_onekm:newVehicle.pay_per_onekm,
//         //profile_image:newVehicle.profile_image,
//         password:newVehicle.password
        

//     .post('user/register' ,{
//         first_name:newUser.first_name,
//         last_name:newUser.last_name,
//         // address:newUser.address,
//         email:newUser.email,
//         password:newUser.password,


//     })
    
    
        
    
    
//     .then(res => {
//         console.log('Registered!')
//     })
// }

// // export const sendEmail = newEmail =>{
// //     return axios
// //     .post('sendNotify/sendemail' ,{
// //             first_name:newEmail.first_name,
// //             last_name:newEmail.last_name,
// //             supplier_name:'',
// //             vehicle_no:newEmail.vehicle_no,
// //             begingdate:newEmail.begingdate,
// //             endingdate:newEmail.endingdate,
// //             travled_place:newEmail.travled_place,
// //             total_distanse:newEmail.total_distanse,
// //             //distanse_ammount:'',
// //             guide_fee:newEmail.guide_fee,
// //             parcking_fee:newEmail.parcking_fee,
// //             entry_ticket:newEmail.entry_ticket,
// //             highway_ticket:newEmail.highway_ticket,
// //             other_fee:newEmail.other_fee,
// //     })
// //     .then(res => {
// //         console.log('Succes Send Email!')
// //     })
// // }
// // export const imageupload = newImage =>{
// //     return axios
// //     .post('imageUp/imageupload' ,{
        
// //         vehicle_photo:newImage.vehicle_photo,
// //         profile_image:newImage.profile_image
        
        

// //     })
    
    
        
    
    
// //     .then(res => {
// //         console.log('Registered!')
// //     })
// // }

// export const hotelregister = newHotel =>{
//     return axios
//     .post('hotelReg/hotelregister' ,{
//         first_name:newHotel.first_name,
//         last_name:newHotel.last_name,
//         address:newHotel.address,
//         email:newHotel.email,
//         contactNo:newHotel.contactNo,
//         //hotel_photo:newHotel.hotel_photo,
//         begingdate:newHotel.begingdate,
//         endingdate:newHotel.endingdate,
//         single_room_num:newHotel.single_room_num,
//         double_room_num:newHotel.double_room_num,
//         password:newHotel.password
        

//     })
    
    
        
    
    
//     .then(res => {
//         console.log('Registered!')
//     })
// }

// export const loginVehicle = vehicleuser =>{
//     return axios
//     .post('vehicleLog/login' ,{
//         email:vehicleuser.email,
//         password:vehicleuser.password
//     })
//     .then(res =>{
//         localStorage.setItem('usertoken' , res.data)
//         return res.data
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// }
// export const loginHotel = hoteluser =>{
//     return axios
//     .post('hotelLog/login' ,{
//         email:hoteluser.email,
//         password:hoteluser.password
//     })
//     .then(res =>{
//         localStorage.setItem('usertoken' , res.data)
//         return res.data
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// }

