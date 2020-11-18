import React from 'react';
import {
        Card,
        CardBody,
        CardTitle,   
        Container
        } from 'reactstrap';
import Main from './Main';

import { RandomQuote } from './RandomQuote';

export default function HomeComponent() {
    return (
    <div className="main-content">
        <Container>
            <Card className="neomorph">
            <CardBody>
            <CardTitle><h1 className="content-header text-center">Simple Quotes</h1></CardTitle>
            <Main />
            </CardBody>
            </Card>
        </Container>
    </div>
    )
}
