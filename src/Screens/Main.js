import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }
    componentDidMount = () => {
        this.props.auth0.getIdTokenClaims().then(tokenResponse => {
            console.log('hi from did amount')
            const jwt = tokenResponse.__raw;
            const config = {
                headers: {
                    "Authorization": `Bearer ${jwt}`
                },
                method: 'get',
                baseURL: process.env.REACT_APP_BACKEND_URL,
                url: '/verify-token'
            };

            axios(config).then((axiosResponse) => {
                this.setState({
                    user: axiosResponse.data
                })
            }).catch(error => alert(error))

        }).catch(error => console.log(error));
    };

    render() {

        return (
            <div>
                this is  Main
            </div>
        )
    }
}

export default withAuth0(Main)
