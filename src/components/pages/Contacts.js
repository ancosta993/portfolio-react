import React, {useState} from 'react';

function Contacts(){
   const [contacts, setContacts] = useState({name:'', email:'', message:''});
   const {name, email,message} = contacts;
   const [errorMessage, setErrorMessage] = useState('');

   const handleChange = (e) => {
      if (!errorMessage) {
         setContacts({...contacts, [e.target.name]: e.target.value});
      }
   };
   
   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(contacts);
   }

   return(
      <section className='form-container'>
         <h1>Contact Me</h1>
         <form className='form' onSubmit = {handleSubmit}>
            <div>
               <label htmlFor = 'name'>Your Name:</label>
               <input type = 'text' name='name' defaultValue={name} onBlur = {handleChange} />
            </div>
            <div>
               <label htmlFor = 'email'>Email Adress:</label>
               <input type = 'email' name='email' defaultValue={email} onBlur = {handleChange} />
            </div>
            <div>
               <label htmlFor = 'message'>Message</label>
               <textarea name="message" defaultValue = {message} onBlur={handleChange}/>
            </div>
            {errorMessage && (
               <div>
                  <p>{errorMessage}</p>
               </div>
            )}
            <button type='submit'>Submit</button>
         </form>
      </section>
   )
}

export default Contacts