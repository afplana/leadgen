import { useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main style={{ padding: "2rem", maxWidth: 600, margin: "auto" }}>
        <h1>Thanks! We’ll be in touch shortly.</h1>
      </main>
    );
  }

  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: 600,
        margin: "auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Get Your Free Quote</h1>
      <form
        name='lead-capture'
        method='POST'
        data-netlify='true'
        onSubmit={(e) => {
          e.preventDefault();
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(new FormData(e.target)).toString(),
          })
            .then(() => setSubmitted(true))
            .catch(() => alert("Oops! Something went wrong."));
        }}
      >
        <input type='hidden' name='form-name' value='lead-capture' />
        <label>
          Name
          <br />
          <input type='text' name='name' required />
        </label>
        <br />
        <label>
          Email
          <br />
          <input type='email' name='email' required />
        </label>
        <br />
        <label>
          Message
          <br />
          <textarea name='message' rows='4'></textarea>
        </label>
        <br />
        <button type='submit'>Send Request</button>
      </form>
    </main>
  );
}
