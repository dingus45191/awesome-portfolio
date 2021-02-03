import React, { useEffect, useState } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Resume from "../Components/Resume";
import Contact from "../Components/Contact";
import Testimonials from "../Components/Testimonials";
import Portfolio from "../Components/Portfolio";
import Head from "next/Head";


const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
        .then((res) => res.json())
        .then((data) => {
          setResumeData(data);
        });
  }, []);

  return (
      <div className="App">
          <Head>
              <title>Mubashir Hasan</title>
              <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/60180419?s=460&u=5135c6af08fc8ae159e854882cd816efa82c7da5&v=4" type="image/x-icon" />
          </Head>
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Testimonials data={resumeData.testimonials} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </div>
  );
};

export default App;
