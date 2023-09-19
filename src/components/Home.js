import React, {  useState } from 'react'
import '../App.css'
import Paraphrase from './Paraphrase';
import Summary from './Summary';

const Home = (props) => {
    return (
        <div>
          <Paraphrase alert={props.alert} />
        </div>
    );
}

export default Home;

