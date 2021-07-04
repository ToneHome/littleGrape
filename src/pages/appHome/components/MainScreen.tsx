import React, {Component} from 'react';
import Ani from '@/pages/appHome/components/ani';
import NextBtn from '@/pages/appHome/components/NextBtn';
type MainScreenState = {
    style:{
        height:string,
        width?:string
    }
}

class MainScreen extends Component<Object,MainScreenState> {
    constructor(props:any) {
        super(props);
        this.state = {
            style:{
                height:'0'
            }
        }
    }
    componentDidMount() {
       this.setMainScreenHeight()

        window.onresize = () => {
            this.setMainScreenHeight()
        }
    }

    setMainScreenHeight(){
        let height = document.documentElement.clientHeight;
        console.log(height)
        this.setState({
            style:{
                height:height+'px'
            }
        })
    }

    render() {
        const { style } = this.state
        return (
            <div className="main-screen"
              style={{...style}}
            >
                <Ani />
                <NextBtn/>
            </div>
        );
    }
}

export default MainScreen;