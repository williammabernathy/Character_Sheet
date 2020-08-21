import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import './StatBlock.css'

const StatBlock = ({ statName }) => {
    return (
        <div className="statBlockContainer">
            <div className="statBlockTitle">
                {statName.toUpperCase()}
            </div>
            <div className="statBlockBonusField">
                <Form >
                    <Form.Control size='lg' type="text"/>
                </Form>
            </div>
            <div className="statBlockStatValueField">
                <Form className="formShaping">
                    <Form.Control size='sm' type="text"/>
                </Form>
            </div>
        </div>
    );
};

export default StatBlock;