import './Contact.css';
import { FaDiscord, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
function openGoogleByMetho1(){
    window.open("https://discord.com/channels/@me")
   }
   function openGoogleByMetho2(){
    window.open("https://www.linkedin.com/in/sri-vardhan-doniparti-513326231")
   }
   function openGoogleByMetho3(){
    window.open("https://www.instagram.com/shadow_was.taken/")
   }
   function openGoogleByMetho4(){
    window.open("mailto:srivardhandoni@gmail.com")

   }
function Contact(){
    return(
        <div className="class1">
            <div className='conpag'>
            <h1><b>Contact me</b></h1><pre></pre><pre></pre>
            <form method="post" action="mailto:srivardhandoni@gmail.com">
                <input type="text" placeholder="Your Name"/><pre></pre>
                <input type="email" placeholder="Your Email"/><pre></pre>
                <input type="text" placeholder="Your Message"/><pre></pre>
                <button type="submit" class="conbt">Send Email</button>
                </form>
                </div>
                <div className='icn'>
            <FaDiscord className='insta1' onClick={openGoogleByMetho1}/><p></p>
            <FaLinkedin className='insta2' onClick={openGoogleByMetho2}/><p></p>
            <FaInstagram className='insta3' onClick={openGoogleByMetho3}/><p></p>
            <FaEnvelope className='insta4' onClick={openGoogleByMetho4}/>
            </div>
          
                 </div>
            
    )
}
export default Contact;