// import react to use 'useEffect'
import React, { useEffect } from "react";

function AboutSpanish() {

    // render document name
  useEffect(() => {
    document.title = "About Spanish";
  }, []);


  return (
    <section className="container">
      <h1>About Spanish</h1>
<p>Spanish has been spoken in 21 countries globally, and the number of speakers is approximately 559 million.</p>
<p>Spanish is already well-spoken in the US, due to the influx of immigrants from Latin America, and the number is increasing. It is said that the number of Spanish speakers in the United States will reach 132.8 million by 2025; this number will be the highest among any other Spanish-speaking countries. If the United States continues to be the most powerful country in the IT section as it is today, it might be a good idea for developers to learn Spanish to take advantage of job opportunities in the United States.</p>
<p>In addition, Spanish is gaining popularity since the number of immigrants from Latin America has increased in Canada; it is also beneficial to study Spanish.</p>

    </section>
  );
}

export default AboutSpanish;
