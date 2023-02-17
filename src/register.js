import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'



//Reference : https://blog.logrocket.com/build-crud-application-react-firebase-web-sdk-v9/
//Referece: https://www.section.io/engineering-education/registration-form-react.js-firebase/
//Reference: https://www.youtube.com/watch?v=F7t-n5c7JsE&t=217s
function RegistrationForm() {
    const [fname, setfName] = useState('')
    const [lname, setlName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')


    const [message, setMessage] = useState('')
    const [state, setState] = useState(false)
    const navigate = useNavigate();


    const validateName = /^[A-Za-z]+$/;
    const validateEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const validatepassword =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;


    async function handleSubmit(e) {
        e.preventDefault()
        if(fname === ''){
            alert("First Name Required")
            return
        }
        else if (!validateName.test(fname)) {
            alert("First name must contain only letters")
            return
        }

        if(lname === ''){
            alert("Last Name Required")
            return
        }
        else if (!validateName.test(lname)) {
            alert("Last name must contain only letters")
            return
        }

        if(email === ''){
            alert("Email Required")
            return
        }
        else if (!validateEmail.test(email)) {
            alert("Invalid email. Enter valid email address")
            return
        }


        if(password === ''){
            alert("Password Required")
            return
        }
        else if(!validatepassword.test(password)){
            alert("Password must be minimum 8 charcaters long and it must be alphanumeric and contains at least one special character")
            return
        }

        if(confirm_password === ''){
            alert("Confirm Password Required")
            return
        }
        else if(confirm_password != password){
            alert("Password does not match")
            return
        }
        const userData = {fname,lname,email,password,confirm_password};
        navigate('/profile', {state:userData});
        

    }
    
    return(
    <div>
        <h1>Registration Form</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>

              <div className="fname">
                  <label htmlFor="fname"><b>First Name</b> </label>
                  <input                        
                        id ='fname' 
                        type="text" 
                        placeholder="First Name"
                        value={fname}
                        onChange={e => setfName(e.target.value)
                        }
                    />
              </div>

              <div className="lname">
                  <label htmlFor="lname"><b>Last Name</b> </label>
                  <input                        
                        id ='lname' 
                        type="text" 
                        placeholder="Last Name"
                        value={lname}
                        onChange={e => setlName(e.target.value)
                        }
                    />
              </div>

              <div className="email">
                  <label className="label1" htmlFor="email"> <b>Email</b> </label>
                  <input                          
                        id = 'email' 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
              </div>

              <div className="password">
                  <label htmlFor="password"><b>Password</b>  </label>
                  <input                     
                        id = 'password' 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                  />
              </div>

              <div className="confirm_password">
                  <label htmlFor="confirm_password"><b>Confirm Password</b> </label>
                  <input                     
                        id = 'confirm_password' 
                        type="password"
                        placeholder="Confirm Password"
                        value={confirm_password}
                        onChange={e => setConfirmPassword(e.target.value)}
                  />
              </div>


            <div className='bottom'>
            <button type="submit" className="btn" > REGISTER </button>
            </div>
            
          </form>
         
      </div>      

    </div>
      
    )       
}
export default RegistrationForm;