import React, { useState, useEffect } from 'react';

function Holidays() {
  const [holidays, setHolidays] = useState([]);
  const [showSpanish, setShowSpanish] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    document.title = 'Learn holiday in Spanish';

    const fetchHoliday = async () => {
      try {
        const response = await fetch(
          `https://date.nager.at/api/v2/PublicHolidays/2020/US`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Error');
        }

        const holidayData = await response.json();
        setHolidays(holidayData);
      } catch (error) {
        console.error(error);
        setErrorMessage('Error');
      }
    };

    fetchHoliday();
  }, []);

  const getSpanishTranslation = (index) => {
    const spanishTranslations = [
      'Día de Año Nuevo',
      'Día de Martin Luther King, Jr.',
      'Día de Washington',
      'Viernes Santo',
      'Viernes Santo',
      'Día Conmemorativo',
      'Día de la Independencia',
      'Día del Trabajo',
      'Día de Colón',
      'Día de los Veteranos',
      'Día de Acción de Gracias',
    ];

    return spanishTranslations[index] || 'Translation Not Found';
  };

  const toggleSpanishNames = () => {
    setShowSpanish(!showSpanish);
  };

  if (errorMessage) {
    return (
      <div className="container">
        <div className="alert alert-danger mt-3">{errorMessage}</div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1>How to say holidays in Spanish?</h1>
        <button className="btn btn-outline-success m-3 p-2" onClick={toggleSpanishNames}>
          {showSpanish ? 'Hide Spanish Names' : 'Show Spanish Names'}
        </button>
        <div className="row">
          <div className="col-md-6">
            <h3>Holidays</h3>
            <ul className="list-group">
              {holidays.map((holiday, index) => (
                <li className="list-group-item" key={holiday.name}>
                  <p>
                    {holiday.name} - {showSpanish ? getSpanishTranslation(index) : ''}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Holidays;
