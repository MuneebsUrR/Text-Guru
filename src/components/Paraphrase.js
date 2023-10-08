import React, { useState } from 'react';
import "../App.css"
import Summary from './Summary';
const Paraphrase = (props) => {
    const [normalText, setnormalText] = useState('');
    const [paraphraseText, setparaphraseText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const paraphrase = async () => {
        const url = 'https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': props.apiKey,
                'X-RapidAPI-Host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com'
            },
            body: JSON.stringify({
                language: 'en',
                strength: 3,
                text: normalText
            })
        };
        if (normalText.length > 0) {


            try {
                setIsSubmitting(true);
                const response = await fetch(url, options);
                const result = await response.json();

                setparaphraseText(result.rewrite);
                props.alert('success', 'Your text paraphrased successfully :)');
                setIsSubmitting(false);

            } catch (error) {
                console.error(error);
            }
        } else {
            alert('Enter some text to paraphrase');
        }
    };

    function copyText() {
        let val = document.getElementById('paraphrasetextarea');
        val.select();
        navigator.clipboard.writeText(val.value);

        if (paraphraseText !== '')
            props.alert('success', 'text copied successfully');
        else alert('First enter some text!')
    }


    return (

        <div className='container my-5 paraphraser-section'>

            <h2 id='heading' >Enter your text to paraphrase</h2>
            <div className="row">
                <div className="col-md-6 box-text">
                    <div className="header text-secondary text-center">
                        Normal Text
                        <hr />

                        <textarea className='form-control' name="simpletext" value={normalText} onChange={(e) => setnormalText(e.target.value)} cols="28" rows="8" style={{ overflow: 'auto' }} ></textarea>

                        <button className={`btn ${normalText.length >= 10000 ? 'btn-outline-danger' : 'btn-outline-dark'}  my-3`} id='paraphrase-button' onClick={paraphrase} disabled={normalText.length >= 10000 ? true : false || isSubmitting} >Paraphrase Text</button>

                    </div>

                </div>


                <div className="col-md-6 box-paraphrase">
                    <div className="header text-secondary text-center ">
                        <span className="paraphrase-text">Paraphrase Text</span>
                        <hr />
                        <textarea id='paraphrasetextarea' className='form-control' name="simpletext" value={paraphraseText} onChange={(e) => setparaphraseText(e.target.value)} cols="28" rows="8" style={{ overflow: 'auto' }}></textarea>
                    </div>
                    <div className="copy-button text-center">
                        <button className='btn btn-outline-success my-3 ' onClick={copyText}>copy text</button>
                    </div>

                </div>

            </div>

            <Summary text={normalText} />

        </div>
    );
}

export default Paraphrase;
