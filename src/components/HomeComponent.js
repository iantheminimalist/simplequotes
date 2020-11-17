import React from 'react';
import {
        Card,
        CardHeader,   
        Container
        } from 'reactstrap';
import { RandomQuote } from './RandomQuote';

export default function HomeComponent() {
    return (
        <div className="main-content">
            <Container>
            <Card className="neomorph">
            <CardHeader><h1 className="content-header text-center">Simple Quotes</h1></CardHeader>
                    <RandomQuote />
            </Card>
            </Container>

        </div>
    )
}
