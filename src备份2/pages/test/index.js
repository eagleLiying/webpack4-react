import React from 'react';

class Add extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {

    }

    render(){
        return (
            <div>
                <input  id="message" name="message" />
                <input type="button" value="提交" />
                
            </div>
        )
    }
}

export default Add;