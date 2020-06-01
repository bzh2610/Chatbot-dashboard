import React, { useState } from "react";
import getCategories from '../../components/Product/categories.js'

// reactstrap components
import {
    FormGroup,
    Input,
    Row,
    Col
  } from "reactstrap";

  const categories = getCategories()

class Subcategories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: []
        };

    }


    resetState = () => {
        this.setState({
            options: []
        })
    }

    render() {
        console.log(this.props.category);

        if (this.props.category in categories) {
            for (const [key, value] of Object.entries(categories[this.props.category])) {

                let valueFields =     (         
                <Col lg="6">
                    <FormGroup>
                        <label
                            className="form-control-label"
                            htmlFor="input-country"
                        >
                            Value
    </label>
                        <Input
                            className="form-control-alternative"
                            defaultValue={value}
                            id="input-country"
                            placeholder="value"
                            type="text"
                        />
                    </FormGroup>
                </Col>);

                if(typeof value == 'object'){
                    valueFields = [];
                    for (const [subkey, subvalue] of Object.entries(value)) {
                        valueFields.push(
                            <React.Fragment>
                                                        <Col lg="4">
                        <FormGroup>
                            <label
                                className="form-control-label"
                                htmlFor="input-country">
                                SubKey
        </label>
                            <Input
                                className="form-control-alternative"
                                defaultValue={subkey}
                                id="input-country"
                                placeholder="value"
                                type="text"
                            />
                        </FormGroup>
                    </Col> 

<Col lg="6">
<FormGroup>
    <label
        className="form-control-label"
        htmlFor="input-country"
    >
        SubValue
</label>
    <Input
        className="form-control-alternative"
        defaultValue={subvalue}
        id="input-country"
        placeholder="value"
        type="text"
    />
</FormGroup>
</Col>

</React.Fragment>
                        );
                    }
                }

                this.state.options.push(
                    <Row key={this.props.category + "_" + key}>
                        <Col lg="4">
                            <FormGroup>
                                <label
                                    className="form-control-label"
                                    htmlFor="input-city"
                                >
                                    Key
            </label>
                                <Input
                                    className="form-control-alternative"
                                    defaultValue={key}
                                    id="input-city"
                                    placeholder="value"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                        <Col lg="8">
                            <Row>
                       { valueFields }
                       </Row>
</Col>
                    </Row>

                )
            }
        }


        return (<React.Fragment>
            {this.state.options}
        </React.Fragment>);

    }
}

export default Subcategories;