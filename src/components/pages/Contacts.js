import React from 'react';

function Contacts(){
   const [contacts, setContacts] = useState({name:'', email:'', message:''});
   const {name, email,message} = contacts;
   const [errorMessage, setErrorMessage] = useState('');

   const handleChange = (e) => {
      if (!errorMessage) {
         setContacts({...contacts, [e.target.name]: e.target.value});
      }
   };
   


   return(
      <h1>Contact</h1>
   )
}

export default Contacts