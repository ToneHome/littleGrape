import React, {Component} from 'react';
// import Family from '@/assess/image/Family.jpg'


class Ani extends Component {
    render() {

        return (
            <div className="ani-img">
                <svg className="loader" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                    {/*<circle className="internal-circle" cx="60" cy="60" r="30"></circle>*/}
                    <circle className="external-circle" cx="60" cy="60" r="50"></circle>
                </svg>
                <div className="main-text">
                    <p>我的一家</p>
                    <p>My Family</p>
                </div>
            </div>
        );
    }
}

export default Ani;