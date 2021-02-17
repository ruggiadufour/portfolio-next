import Section from "../../Components/Atomic/Section";
import Textbox from "../../Components/Atomic/TextBox";
import Button from "../../Components/Atomic/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from 'next/head'

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);

  function send(e) {
    e.preventDefault();
    setLoading(true)
    axios
      .post(
        "/api/contact",
        { name, message, email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setEmail("")
        setMessage("")
        setName("")
        setLoading(false)
        setAlert("✅ You message has been sent successfully! I will reply to you as soon as I can 😉.")
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
        setAlert("❌ Oh something went wrong, your message couldn't be sent 😥")
      });
  }

  useEffect(()=>{
    if(alert!==""){
      setAlert("")
    }
  },[email,name, message])

  return (
    <>
    <Head>
        <meta charset="UTF-8" />
        <link rel="icon" href="images/favicon.svg" />
        <meta name="description" content="Send a message to Angel Ruggia Dufour, then he will reply you as soon as he can." />
        <meta
          name="keywords"
          content="Contact, message, Ruggia, talk, email"
        />
        <meta name="author" content="Angel Ruggia Dufour" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact me</title>

        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <Section>
        <div className="flex-items">
          <form onSubmit={send}>
            <h1 className="is-text-2 color-text-2 title">Contact me:</h1>

            <h2 className="color-text-2">Your name</h2>
            <Textbox
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />

            <h2 className="color-text-2">Your email</h2>
            <Textbox
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />

            <h2 className="color-text-2">Your message</h2>
            <Textbox
              type="textarea"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
            />
            {
              alert!=="" && <p>{alert}</p>
            }
            <Button text="Send" type="submit" className={loading?"button is-loading":null}/>
          </form>
        </div>
      </Section>
      <style jsx>{`
        p{
          margin-bottom: 15px;
        }
        form {
          max-width: 400px;
          margin: auto;
          margin-top: 40px;
        }
        h2 {
          font-size: 1.3rem;
        }
      `}</style>
    </>
  );
}
