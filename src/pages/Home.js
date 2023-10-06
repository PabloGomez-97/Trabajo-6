// ParentComponent.js
import React from "react";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import List from "../components/List";
import Form from '../components/Form'
import Footer from "../components/Footer";

function Home() {
  return (
    <>
    <div className="App">
      <Header />
      <Paragraph />
      <List />
      <Form />
      <Footer />
    </div>
    </>
  );
}

export default Home;
