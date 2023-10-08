import React, { useEffect } from 'react'
import '../App.css'
import Paraphrase from './Paraphrase';


const Home = (props) => {
  useEffect(() => {
    document.title = "Text Guru-Paraphrasing Tool"
    
  }, );
  return (
    <div>
      <Paraphrase apiKey={props.apiKey} alert={props.alert} />
    </div>
  );
}

export default Home;

