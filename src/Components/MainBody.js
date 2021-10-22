import {useState} from 'react'
export default function MainBody(props) {

    const [text, setTextChange] = useState("");

    const handleUpClick = () => {
        let upText = text.toUpperCase();
        setTextChange(upText)
    }

    const onChangeClick = (event) => {
        setTextChange(event.target.value)
    }

    const handleLoClick = () => {
        let loText = text.toLowerCase();
        setTextChange(loText);
    }
    
    return (
      <>
        <div>
          <div className="mb-3">
            <h3>{props.heading}</h3>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={text}
              onChange={onChangeClick}
            ></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to UPPERCASE
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>
            Convert to lowercase
          </button>
        </div>
        <div className="container">
            <h3>Your text details:</h3>
            <p>Your text contains {text.split(" ").length} number of words and {text.length} number of characters!</p>
            <h3>Text Preview:</h3>
            <p>{text}</p>
        </div>
      </>
    );
}
