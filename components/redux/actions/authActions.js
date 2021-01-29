import firebase from '../../firebase/firebase'

export function createEmailAccount(email,password){
return async(dipatch)=>{
try{
const user =await firebase
.auth()
.createUserWithEmailAndPassword(email,password)
dipatch(loggedIn(user))
}  catch (error){
console.log(error)

    }
  }
}

export function loginEmailAccount(email,password){
   return async(dipatch)=>{
    try{
        const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        dipatch(loggedIn(user))
        }  catch (error){
        console.log(error)
        
            }
} 
}
export function logout(){
    return async(dipatch)=>{
        try{
        await  firebase.auth().signOut()
        dipatch(loggedOut())
            }  catch (error){
            console.log(error)
            
         }
    }
}


function loggedIn(user) {
    return{
        type:LOGGED_IN,
        payload:user 
    }
}
function loggedOut(user) {
    return{
        type:LOGGED_OUT,
      
    }
}