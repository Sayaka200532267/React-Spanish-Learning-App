import React, { useState, useEffect } from "react";

function Greetings() {
  // State for Spanish greetings
  const [SpanishGreetings] = useState([
    "Buenos dias",
    "Buenos tardes",
    "Buenos noches",
    "Hola",
    "¿Cómo estás?",
    "Muy Bien",
    "Adiós",
    "Nos vemos",
    "Buen venido"
  ]);

  // State for English translations
  const [EnglishTranslations] = useState([
    "Good morning",
    "Good afternoon",
    "Good evening",
    "Hi",
    "How are you?",
    "I'm good",
    "Goodbye",
    "See you",
    "Welcome"
  ]);

  // State to control the visibility of translations
  const [showTranslations, setShowTranslations] = useState(true);

  // Function to toggle the visibility of translations
  const toggleTranslations = () => {
    setShowTranslations(!showTranslations);
  };

  // Effect hook to set document title
  useEffect(() => {
    document.title = "Spanish Greetings";
  }, []);

  return (
    <section className="container">
      <h1>Learn Spanish Greetings</h1>

      <ul className="list-group">
        {SpanishGreetings.map((SpanishGreeting, index) => (
          <li className="list-group-item" key={index}>
            {SpanishGreeting} - {showTranslations && EnglishTranslations[index]}
          </li>
        ))}
      </ul>

      {/* Button to toggle translations visibility */}
      <button className="btn btn-info m-1 p-1" onClick={toggleTranslations}>
        {showTranslations ? 'Hide Translations' : 'Show Translations'}
      </button>
    </section>
  );
}

export default Greetings;