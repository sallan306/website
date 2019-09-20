import React, { Component } from "react"; 
                

class Border extends Component {
    state = {
        cogOpacity: 1
    }
    componentDidMount() {
    }
    render(props) {
        return (
            <svg 
                version="1.1" 
                className="fancyBorder Border2"
                xmlns="http://www.w3.org/2000/svg" 
                x="0px" y="0px"
                viewBox="0 0 310 60"
                width={(this.props.borderWidth/1000)*310}
                height="60"
                fill={this.props.fillColor}
            >

                <g
                    id="g28"
                    transform="matrix(0.94713213,0,0,1,-49.895794,-187.87658)">
                <path
                    d="m 377.8,230.1 c -0.7,-4.5 -3,-8.1 -6.6,-10.9 -3.5,-2.7 -7.4,-4.5 -11.6,-5.7 -3,-0.9 -6,-1.5 -9.1,-1.9 -2.6,-0.3 -5.1,-0.7 -7.7,-0.8 -2.6,-0.1 -5.2,0.1 -7.9,0.1 h -1.2 c -0.1,-0.1 -0.2,-0.3 -0.2,-0.4 -1.2,-3.1 -3.4,-5.2 -6.5,-6.5 -2.5,-1 -5.1,-1.4 -7.7,-1.6 -2.8,-0.2 -5.5,0.1 -8.2,0.6 -4,0.7 -7.8,2 -11.4,4.1 -2.9,1.7 -5.6,3.6 -8.2,5.7 -3.6,3 -7.1,6 -10.6,9 -5.1,4.4 -10.8,7.7 -17.3,9.6 -2,0.6 -3.9,1.1 -6,1.3 -2.2,0.2 -4.3,-0.1 -6.4,-0.5 -1.8,-0.4 -3.5,-1.1 -4.7,-2.5 -0.1,-0.1 -0.2,-0.3 -0.3,-0.5 0.1,0 0.2,-0.1 0.2,-0.1 h 0.5 c 4.5,0.1 8.8,-0.9 12.9,-2.6 3.7,-1.5 6.8,-3.8 9.2,-6.9 2.4,-3 3.6,-6.5 3.2,-10.4 -0.1,-1.4 -0.5,-2.7 -1.3,-3.9 -1.4,-2.2 -3.3,-3.9 -5.6,-5 -1.6,-0.8 -3.4,-1.1 -5.2,-0.6 -4.8,1.2 -6.8,6 -6.4,9.2 0,0.2 0.1,0.4 0.1,0.6 0.6,2.7 3,4.7 5.8,4.9 0.8,0.1 1.5,-0.5 1.7,-1.2 0.2,-0.8 -0.3,-1.5 -1.1,-1.7 -0.5,-0.2 -1,-0.2 -1.4,-0.4 -1.4,-0.5 -2.4,-1.9 -2.1,-3.4 0.2,-0.9 0.4,-1.8 0.9,-2.6 1.1,-2.1 3.5,-3.1 5.6,-2.4 2.4,0.9 4.2,2.5 5.4,4.8 0.2,0.4 0.3,0.9 0.4,1.4 0.5,2.4 0,4.7 -1.1,6.8 -1.8,3.3 -4.6,5.7 -7.9,7.4 -5.6,2.8 -11.4,3.6 -17.5,2.7 -20.1,-3.2 -23.01441,-19.08559 -24.61441,-19.88559 0,0 -1.58307,-2.48306 -3.78559,-0.21441 -1.4,0.7 -2.7,7.8 -8.7,12.7 -4.6,3.8 -9.9,6.3 -15.9,7.3 -6.1,1 -12,0.1 -17.5,-2.7 -3.4,-1.7 -6.1,-4.1 -7.9,-7.4 -1.2,-2.1 -1.6,-4.4 -1.1,-6.8 0.1,-0.5 0.2,-1 0.4,-1.4 1.2,-2.3 3,-3.9 5.4,-4.8 2.1,-0.8 4.5,0.3 5.6,2.4 0.4,0.8 0.7,1.7 0.9,2.6 0.3,1.5 -0.6,2.9 -2.1,3.4 -0.5,0.2 -0.9,0.2 -1.4,0.4 -0.8,0.3 -1.2,1 -1.1,1.7 0.2,0.7 0.9,1.2 1.7,1.2 2.8,-0.2 5.2,-2.3 5.8,-4.9 0,-0.2 0.1,-0.4 0.1,-0.6 0.3,-3.2 -1.6,-8 -6.4,-9.2 -1.8,-0.4 -3.6,-0.2 -5.2,0.6 -2.3,1.1 -4.2,2.8 -5.6,5 -0.8,1.2 -1.1,2.5 -1.3,3.9 -0.4,3.9 0.8,7.3 3.2,10.4 2.5,3.1 5.6,5.4 9.2,6.9 4.1,1.7 8.4,2.7 12.9,2.6 h 0.5 c 0.1,0 0.1,0 0.2,0.1 -0.1,0.2 -0.2,0.3 -0.3,0.5 -1.3,1.4 -2.9,2.1 -4.7,2.5 -2.1,0.5 -4.3,0.8 -6.4,0.5 -2,-0.2 -4,-0.7 -6,-1.3 -6.5,-1.9 -12.2,-5.2 -17.3,-9.6 -3.5,-3 -7,-6.1 -10.6,-9 -2.6,-2.1 -5.3,-4.1 -8.2,-5.7 -3.6,-2 -7.4,-3.3 -11.4,-4.1 -2.7,-0.5 -5.5,-0.8 -8.3,-0.6 -2.7,0.1 -5.3,0.5 -7.7,1.6 -3,1.3 -5.3,3.3 -6.5,6.5 0,0.1 -0.1,0.3 -0.2,0.4 H 97 c -2.6,0 -5.2,-0.2 -7.9,-0.1 -2.6,0.1 -5.2,0.5 -7.7,0.8 -3.1,0.4 -6.1,1 -9.1,1.9 -4.2,1.2 -8.1,3 -11.6,5.7 -3.6,2.8 -5.9,6.3 -6.6,10.9 -0.2,1.1 -0.2,2.3 -0.2,3.4 0,0.6 0.1,1.3 0.1,1.9 0,0.3 0.1,0.6 0.2,0.9 0.2,0.7 0.8,1 1.5,1 0.6,0 1.1,-0.4 1.3,-1.1 0.1,-0.4 0.1,-0.7 0.1,-1.1 -0.2,-2.3 -0.1,-4.5 0.6,-6.8 1,-2.9 2.8,-5.1 5.2,-7 3.1,-2.4 6.6,-3.9 10.3,-5 3.1,-0.9 6.2,-1.5 9.4,-2 3.4,-0.5 6.9,-0.8 10.3,-0.8 1.4,0 2.7,0.1 4.1,0.2 0.2,0 0.4,0.1 0.7,0.1 v 0.6 c -0.3,4 0.7,7.6 3.2,10.6 2.1,2.5 4.8,3.9 8,4.5 1.1,0.2 2.1,0.2 3.2,0 1.5,-0.3 2.6,-1.1 3.5,-2.4 0.6,-0.9 0.9,-1.9 1,-3 0.1,-0.9 -0.1,-1.8 -0.6,-2.5 -0.6,-0.8 -1.1,-1.5 -1.8,-2.2 -0.7,-0.7 -1.5,-0.8 -2.2,-0.2 -0.6,0.5 -0.7,1.4 -0.1,2.2 l 1.2,1.5 c 0.4,0.4 0.4,0.9 0.3,1.5 -0.3,1.6 -1.2,2.3 -2.8,2.4 -4.4,0 -8.5,-3.2 -9.6,-7.7 -0.4,-1.6 -0.5,-3.2 -0.3,-4.9 0.7,0.1 1.4,0.1 2,0.2 8.1,1.3 16,3.5 23.6,6.4 6,2.3 11.9,4.6 18,6.6 2.3,0.7 4.7,1.4 7.1,1.6 0.8,0.1 1.7,0.1 2.5,0 0.4,0 0.9,-0.2 1.4,-0.4 2.8,1.8 5.8,3.3 8.9,4.5 2.9,1.1 5.9,2 9.1,2.5 2.3,0.4 4.5,0.3 6.8,-0.2 1.2,-0.3 2.4,-0.5 3.6,-0.9 2.6,-0.9 4.5,-2.6 5.7,-5.1 0.3,-0.5 0.6,-0.7 1.2,-0.8 4.5,-0.8 8.7,-2.3 12.5,-4.8 8.6,-5.6 12.5,-13.7 13,-16.2 0.3,1.7 3.5,9.9 13,16.2 3.8,2.5 8,4 12.5,4.8 0.6,0.1 0.9,0.3 1.2,0.8 1.2,2.5 3.1,4.2 5.7,5.1 1.2,0.4 2.4,0.7 3.6,0.9 2.2,0.5 4.5,0.6 6.8,0.2 3.1,-0.5 6.1,-1.4 9.1,-2.5 3.2,-1.2 6.2,-2.7 8.9,-4.5 0.5,0.1 0.9,0.4 1.4,0.4 0.8,0.1 1.7,0.1 2.5,0 2.5,-0.2 4.8,-0.8 7.1,-1.6 6.1,-1.9 12,-4.3 18,-6.6 7.6,-3 15.5,-5.1 23.6,-6.4 0.6,-0.1 1.3,-0.2 2,-0.2 0.1,1.7 0.1,3.3 -0.3,4.9 -1.1,4.4 -5.2,7.7 -9.6,7.7 -1.6,0 -2.5,-0.8 -2.8,-2.4 -0.1,-0.5 0,-1 0.3,-1.5 l 1.2,-1.5 c 0.6,-0.8 0.5,-1.6 -0.1,-2.2 -0.6,-0.6 -1.5,-0.5 -2.2,0.2 -0.6,0.7 -1.2,1.5 -1.8,2.2 -0.5,0.8 -0.7,1.6 -0.6,2.5 0.1,1.1 0.4,2.1 1,3 0.8,1.3 2,2.1 3.5,2.4 1.1,0.2 2.1,0.2 3.2,0 3.2,-0.6 5.9,-2 8,-4.5 2.6,-3.1 3.5,-6.7 3.2,-10.6 v -0.6 c 0.3,-0.1 0.5,-0.1 0.7,-0.1 1.4,-0.1 2.7,-0.2 4.1,-0.2 3.5,0 6.9,0.3 10.3,0.8 3.2,0.4 6.3,1 9.4,2 3.7,1.1 7.2,2.6 10.3,5 2.4,1.8 4.2,4 5.2,7 0.7,2.2 0.8,4.5 0.6,6.8 0,0.4 0,0.8 0.1,1.1 0.2,0.6 0.7,1 1.3,1.1 0.6,0 1.2,-0.3 1.5,-1 0.1,-0.3 0.1,-0.6 0.2,-0.9 0.1,-0.6 0.1,-1.3 0.1,-1.9 -0.3,-1 -0.3,-2.1 -0.5,-3.3 z m -226.5,-3.9 c -1.1,-0.2 -2.3,-0.4 -3.4,-0.7 -4.7,-1.3 -9.2,-2.9 -13.7,-4.6 -5,-1.9 -10,-4 -15.1,-5.5 -4.6,-1.4 -9.3,-2.6 -14.1,-3.4 -1.1,-0.2 -2.3,-0.4 -3.5,-0.6 0.1,-0.2 0.1,-0.3 0.2,-0.5 0.7,-1.5 1.8,-2.6 3.3,-3.5 2.2,-1.3 4.6,-1.8 7.1,-1.9 1.9,-0.1 3.9,0 5.8,0.1 3.1,0.3 6.2,1 9.1,2.2 3.6,1.4 6.7,3.5 9.8,5.8 3.6,2.8 7.1,5.8 10.5,8.8 1.3,1.2 2.7,2.3 4.1,3.5 -0.1,0.2 -0.1,0.2 -0.1,0.3 z M 327,211.9 c -4.8,0.8 -9.4,2 -14.1,3.4 -5.2,1.6 -10.1,3.6 -15.1,5.5 -4.5,1.7 -9.1,3.3 -13.7,4.6 -1.1,0.3 -2.2,0.5 -3.4,0.7 v -0.2 c 1.4,-1.2 2.7,-2.3 4.1,-3.5 3.4,-3.1 6.9,-6 10.5,-8.8 3,-2.3 6.2,-4.4 9.8,-5.8 2.9,-1.2 6,-1.9 9.1,-2.2 1.9,-0.2 3.9,-0.2 5.8,-0.1 2.5,0.1 4.9,0.6 7.1,1.9 1.4,0.8 2.6,1.9 3.3,3.5 0.1,0.1 0.1,0.3 0.2,0.5 -1.3,0.2 -2.4,0.3 -3.6,0.5 z"
                    id="path22"
                />
                </g>
            </svg>
        )
    }
};

export default Border;