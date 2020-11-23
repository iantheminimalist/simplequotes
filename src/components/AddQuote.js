//Allows users to add quotes including the author, Quote, and the User's email. 

import React , { useState } from 'react';
import { Container, Form, FormGroup, FormText, Input } from 'reactstrap';

export default function AddQuoteForm() {
    const [quote, setQuote] = useState([]);

    const AddedQuote = (e) => {
        setQuote(e.target.value)
    }
    
    return (
        <div>
        <Container>
            <h1>Insert Quote</h1>
            <Form>
                <FormGroup>
                    <FormText>
                        Insert Author
                    </FormText>
                    <Input type="author" name="author" id="" />
                </FormGroup>
            </Form>

        </Container>

        </div>
    )
}
