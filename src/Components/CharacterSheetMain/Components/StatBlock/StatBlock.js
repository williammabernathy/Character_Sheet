import React from 'react';
import Form from 'react-bootstrap/Form';
import './StatBlock.css'

const StatBlock = ( {statName} ) => {
    return (
        <div className="statBlockContainer">
            <div className="statBlockTitle">
                {statName}
            </div>
            <div className="statBlockBonusField">
                <Form>
                    <Form.Control/>
                </Form>
            </div>
            <div className="statBlockStatValueField">

            </div>
        </div>
    );
};

export default StatBlock;