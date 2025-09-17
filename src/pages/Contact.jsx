// src/pages/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  Wrap, Title, Form, Row, Input, TextArea,
  Submit, Hint, Links
} from "../styles/contactstyle";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ sending: false, ok: false, err: "" });

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: false, err: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus({ sending: false, ok: true, err: "" });
      formRef.current.reset();
    } catch (err) {
      setStatus({ sending: false, ok: false, err: err?.text || "Failed to send" });
      console.error(err);
    }
  };

  return (
    <Wrap>
      <Title>Contact</Title>

      <Form ref={formRef} onSubmit={sendEmail}>
        {/* Honeypot (botlar uchun) */}
        <input type="text" name="company" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        <Row>
          <Input name="name" placeholder="Your name" required />
          <Input type="email" name="email" placeholder="Your email" required />
        </Row>

        <TextArea rows="6" name="message" placeholder="Message..." required />

        <Submit type="submit" disabled={status.sending}>
          {status.sending ? "Sending..." : "Send Message"}
        </Submit>

        {status.ok && <Hint>✅ Message sent successfully!</Hint>}
        {status.err && <Hint>❌ {status.err}</Hint>}
      </Form>

      <Links>
        <a href="https://github.com/youruser" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:you@example.com">Email</a>
      </Links>
    </Wrap>
  );
}





// import React, { useState } from "react";
// import {
//   Wrap, Title, Form, Row, Input, TextArea,
//   Submit, Hint, Links
// } from "../styles/contactstyle";

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const onChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const body = encodeURIComponent(
//       `${form.message}\n\n— ${form.name} (${form.email})`
//     );
//     window.location.href = `mailto:youremail@example.com?subject=Portfolio Contact&body=${body}`;
//   };

//   return (
//     <Wrap>
//       <Title>Contact</Title>
//       <Form onSubmit={onSubmit}>
//         <Row>
//           <Input
//             name="name"
//             placeholder="Your name"
//             value={form.name}
//             onChange={onChange}
//           />
//           <Input
//             type="email"
//             name="email"
//             placeholder="Your email"
//             value={form.email}
//             onChange={onChange}
//           />
//         </Row>
//         <TextArea
//           rows="6"
//           name="message"
//           placeholder="Message..."
//           value={form.message}
//           onChange={onChange}
//         />
//         <Submit type="submit">Send Message</Submit>
//         <Hint>📧 This will open your default mail app (simple mailto)</Hint>
//       </Form>

//       <Links>
//         <a href="https://github.com/youruser" target="_blank" rel="noreferrer">GitHub</a>
//         <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
//         <a href="mailto:youremail@example.com">Email</a>
//       </Links>
//     </Wrap>
//   );
// }
