import { useState } from "react"

function Contact() {

  const [name,setName] = useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage] = useState("")

  
function handleSubmit(e) {
  e.preventDefault()

  if (
    name === "" ||
    email === "" ||
    message === ""
  ) {
    alert("Please fill all fields")
    return
  }

  alert("Message submitted successfully")
}


  return (

    <section className="contact-page">

      <h1>Contact me </h1>

      <form action="" onSubmit={handleSubmit}>

      <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} />

      <input type="email" placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} />
      
      <textarea placeholder="Enter your message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>

      <button type="submit">
        Send Message
      </button>

      </form>
    <div>
      



    </div>
    </section>
  )
}

export default Contact;
