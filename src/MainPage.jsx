import React from 'react'

class MainPage extends React.Component{
    state = {userData:[]};
    componentDidMount(){
        fetch("/user.json")
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                this.setState({
                    userData:json,
                });
            });
    }
    render(){
        return <h1>Main Page</h1>
    }
}

export default MainPage;