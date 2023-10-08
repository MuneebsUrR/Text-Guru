import React from 'react'
import '../App.css'
import Paraphrase from './Paraphrase';


const Home = (props) => {
  return (
    <div>
      <Paraphrase apiKey={props.apiKey} alert={props.alert} />
    </div>
  );
}

export default Home;

