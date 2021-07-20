import React, {Component} from 'react';
import Ani from '@/pages/appHome/components/ani';
type MainScreenState = {
    style:{
        height:string,
        width?:string
    },
    isLoading:boolean
}

class MainScreen extends Component<Object,MainScreenState> {
    constructor(props:any) {
        super(props);
        this.state = {
            style:{
                height:'0'
            },
            isLoading:false
        }
    }
    componentDidMount() {
       this.setMainScreenHeight()
        window.onresize = () => {
            this.setMainScreenHeight()
        }
        setTimeout(()=>{
            this.setState({
                isLoading:true
            })
        },3000)
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
        const { style,isLoading } = this.state
        let className = 'main-screen '+  (isLoading?'fade-out':'')
        return (
            <div className={className}
              style={{...style}}
            >
                <Ani/>
            </div>
        );
    }
}

export default MainScreen;