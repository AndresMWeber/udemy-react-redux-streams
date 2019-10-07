import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: false }
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '380573129666-5tcqop7ldr2n85172in7eu4j1jg4m1nd.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            })
        })
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>we aren't signed in</div>
        } else if (this.state.isSignedIn) {
            return <div>I am signed in</div>
        } else {
            return <div>I am not signed in.</div>
        }
    }
    
    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth
