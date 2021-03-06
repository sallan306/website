import React, { Component } from "react"; 
                

class Border extends Component {
    state = {
        cogOpacity: 1,
        sizeMultiplier: 1000
    }

    componentDidMount() {

    }
    render(props) {
        return (
            <svg 
                version="1.1" 
                className="fancyBorder border3"
                xmlns="http://www.w3.org/2000/svg" 
                width={(this.props.borderWidth/1000)*310}
                height={"60px"}
                viewBox="0 0 310 60"
                fill={this.props.fillColor}
            >
                <g>
                    <path
                        d="m 304.18984,39.21695 c -0.6,13 -16.9,15.4 -29.1,10.2 -12.7,-5.4 -24.5,-19.6 -47.8,-20.1 -5,-0.1 -10,0.3 -14.9,0.9 -4.7,0.6 -9.3,1.5 -13.9,2.6 -6,1.4 -12,3 -18,4.4 l -1.5,0.3 c 0.1,-0.4 0.2,-0.6 0.3,-0.9 1,-2.4 2.5,-4.5 4.4,-6.3 2.1,-1.9 4.5,-3.3 7.1,-4.4 7.7,-3.4 15.9,-4.9 24.3,-4.7 3.7,0.1 7.3,0.6 10.8,1.8 68.7,22.5 51.7,-24.0999998 35.2,-15.2999998 -5,2.6999998 -3.1,7.2999998 -3.2,8.7999998 -0.2,2.5 4.7,4.5 3.2,-2.8 -1.5,-7.4999998 15.3,-2.4 10.7,5.9 -7.2,12.9 -28.8,5.5 -42.7,0.7 -4.3,-1.5 -8.6,-2.4 -13.1,-2.6 -4,-0.2 -8,0.1 -12,0.7 -4.6,0.7 -9,1.9 -13.3,3.7 -2.6,1.1 -5.2,2.3 -7.4,4 -3.9,2.9 -6.6,6.7 -8,11.4 -0.1,0.4 -0.2,0.9 -0.8,1 -2.5,0.3 -4.9,0.7 -7.4,1 -1.3,0.1 -2.5,0 -3.7,-0.4 -4.4,-1.3 -7,-5 -6.6,-9.3 0.1,-0.7 0.2,-1.4 0.4,-2.1 0.8,-3 2.3,-5.5 4.9,-7.3 1,-0.7 2.1,-1.2 3.4,-1.3 2.5,0 4.2,1.2 5.4,3.3 0.8,1.4 1,2.9 0.4,4.4 -0.1,0.3 -0.2,0.6 -0.3,1 -0.2,1 0.2,1.8 1,2.1 0.8,0.3 1.7,0 2.1,-0.8 0.8,-1.6 1.3,-3.2 1,-5 -0.5,-3.4 -2.4,-5.9 -5.4,-7.5 -1.4,-0.8 -3,-1.1 -4.6,-1 -2.6,0.2 -4.7,1.4 -6.6,3.1 -0.3,0.2 -0.5,0.5 -0.8,0.7 0,-0.3 0.1,-0.4 0.2,-0.6 -1.41096,5.19624 -4.89327,5.13825 -6.2,0 0.1,0.2 0.2,0.3 0.2,0.6 -0.3,-0.2 -0.5,-0.5 -0.8,-0.7 -1.9,-1.7 -4,-2.9 -6.6,-3.1 -1.6,-0.1 -3.2,0.2 -4.6,1 -3,1.6 -4.9,4.1 -5.4,7.5 -0.3,1.8 0.2,3.4 1,5 0.4,0.9 1.3,1.1 2.1,0.8 0.9,-0.3 1.3,-1.2 1,-2.1 -0.1,-0.3 -0.2,-0.6 -0.3,-1 -0.6,-1.5 -0.5,-3 0.4,-4.4 1.2,-2.1 3,-3.3 5.4,-3.3 1.2,0 2.4,0.5 3.4,1.3 2.6,1.8 4.1,4.3 4.9,7.3 0.2,0.7 0.3,1.4 0.4,2.1 0.4,4.3 -2.2,8.1 -6.6,9.3 -1.2,0.4 -2.4,0.5 -3.7,0.4 -2.5,-0.3 -4.9,-0.7 -7.4,-1 -0.7,-0.1 -0.7,-0.6 -0.8,-1 -1.4,-4.7 -4.1,-8.5 -8,-11.4 -2.3,-1.7 -4.8,-3 -7.4,-4 -4.3,-1.8 -8.7,-3 -13.3,-3.7 -4,-0.6 -8.000008,-0.9 -12.000008,-0.7 -4.5,0.2 -8.9,1.1 -13.100002,2.6 -14.1,4.9 -35.5,12.2 -42.7,-0.7 -4.6,-8.3 12.3,-13.2999998 10.7,-5.9 -1.5,7.2 3.4,5.4 3.2,2.8 -0.1,-1.5 1.8,-6.1 -3.2,-8.7999998 -17.6,-9.4 -29.2,35.8999998 26,18.2999998 3.1,-1 6.1,-2.1 9.200002,-3.1 3.5,-1.2 7.1,-1.7 10.8,-1.8 8.400008,-0.2 16.600008,1.2 24.300008,4.7 2.6,1.1 5,2.5 7.1,4.4 1.9,1.8 3.4,3.9 4.4,6.3 0.1,0.2 0.2,0.5 0.3,0.9 -0.6,-0.1 -1.1,-0.2 -1.5,-0.3 -6,-1.5 -12,-3 -18,-4.4 -4.6,-1.1 -9.2,-2 -13.900008,-2.6 -5,-0.6 -9.9,-1.1 -14.9,-0.9 -30.400002,0.7 -40.000002,23.9 -61.300002,22.6 -8.4,-0.5 -15.2999997,-4.3 -15.5999997,-12.8 -0.1,-2.7 -3.4,-2.5 -3.5,-0.1 -0.4,9.1 7.2,14.5 15.0999997,15.9 7.7,1.4 14.9,0 21.2,-3.4 3.1,-1.7 6.1,-3.5 9.1,-5.4 9.1,-5.7 16,-11 28.6,-12.8 3.7,-0.6 7.500002,-0.6 11.300002,-0.5 5.8,0.2 11.6,1 17.300008,2.1 8,1.6 15.8,3.8 23.8,5.7 1,0.2 2.1,0.5 3.3,0.8 0,0.7 0.1,1.5 0,2.3 -0.2,1.7 -0.7,3.4 -1.6,4.8 -1.6,2.7 -4.2,4 -7.2,4.2 -1.3,0.1 -2.6,-0.2 -3.9,-0.3 -0.5,0 -1.1,-0.1 -1.6,0.1 -0.8,0.2 -1.3,0.9 -1.3,1.7 0,0.8 0.5,1.4 1.3,1.6 0.7,0.2 1.3,0.2 2,0.3 3.9,0.6 7.5,0 10.7,-2.4 2.7,-2 4.1,-4.9 4.8,-8.1 0.2,-1.1 0.3,-2.2 0.5,-3.4 0.3,0 0.6,0 0.9,0.1 2.7,0.5 5.5,0.8 8.2,0.7 3.9,-0.1 8.3,-2.4 10.6,-6.4 2.3,4 6.7,6.2 10.6,6.4 2.8,0.1 5.5,-0.3 8.2,-0.7 0.3,-0.1 0.6,-0.1 0.9,-0.1 0.2,1.2 0.3,2.3 0.5,3.4 0.7,3.2 2.1,6.1 4.8,8.1 3.2,2.4 6.8,3 10.7,2.4 0.7,-0.1 1.3,-0.1 2,-0.3 0.8,-0.2 1.3,-0.8 1.3,-1.6 0,-0.8 -0.4,-1.5 -1.3,-1.7 -0.5,-0.1 -1.1,-0.1 -1.6,-0.1 -1.3,0.1 -2.6,0.3 -3.9,0.3 -3.1,-0.2 -5.6,-1.5 -7.2,-4.2 -0.9,-1.5 -1.4,-3.1 -1.6,-4.8 -0.1,-0.8 0,-1.5 0,-2.3 1.2,-0.3 2.2,-0.5 3.3,-0.8 7.9,-1.9 15.8,-4.1 23.8,-5.7 5.7,-1.1 11.5,-1.9 17.3,-2.1 24.3,-0.9 31.9,9.6 49,18.7 17.3,9.2 36.9,1.5 36.3,-12.5 -0.5,-2.3 -3.8,-2.4 -3.9,0.3 z m -148.6,-17.4 v 0 c 0,-0.1 0,-0.1 0,0 0,-0.1 0,0 0,0 z"
                        id="path20"
                    />
                </g>
            </svg>
        )
    }
};

export default Border;