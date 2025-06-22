import React from "react";
import Card from "../components/Card";
import contacts from "../contacts.js";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact, index) => (
        <Card 
          key={index}
          title={contact.name}
          img={contact.imgURL}
          alt="avatar_img"
          tel={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;