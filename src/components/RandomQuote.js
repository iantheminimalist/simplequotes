import  React, 
        { useState }  from 'react';
import {
    Button,
    CardBody,   
    CardText
    } from 'reactstrap';
const arr = require('../shared/quotes.json'); // data


function GetRandomQuote(){
    const totalQuotes = arr.length; //get total of quotes
    const [randNum, setRandNum ] = useState( Math.floor((Math.random() * totalQuotes) + 1)); //get random number

const FetchQuote = () => {
        setRandNum(Math.floor((Math.random() * totalQuotes) + 1));
        console.log(randNum);
    }

    return(
        <div>
                <CardText>{arr[randNum].body}</CardText>
                <CardText>{arr[randNum].author}</CardText>
                <Button onClick={FetchQuote}>Select</Button>
        </div>
    );

}

export const RandomQuote = () => {



    return (
        <div>
            <CardBody className="text-center">
                <GetRandomQuote />
    
            </CardBody>
        </div>
    )
}
