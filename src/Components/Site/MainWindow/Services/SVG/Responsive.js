import React, { Component } from "react"; 
                

class Responsive extends Component {
    state = {
        cogOpacity: 1
    }
    componentDidMount() {

        // setInterval(()=> {
        //     this.setState({
        //         cogOpacity: this.state.cogOpacity === 0.2 ? 1 : 0.2
        //     })
        // },600)
    }
    render(props) {
        return (
            <svg 
                version="1.1" 
                className="serviceSVG responsive"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1000 1000"
                fill={this.props.fillColor}
            >
            <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                <path    
                    style = {{opacity: this.state.cogOpacity, transition: "1s"}}        
                    fill={this.props.secondaryColor}
                    // stroke={this.props.fillColor === "black" ? "black" : "white"} 
                    // stroke-width="20" 
                    d="M2150.3,3797.1l-328.8-81.2v-65.8c0-36.7,7.7-141.2,15.5-234l13.5-164.4l-94.8-40.6l-92.8-38.7l-197.3,152.8L1268.4,3478l-268.8-257.2c-148.9-141.2-270.8-263-270.8-268.8c0-5.8,56.1-90.9,125.7-189.5l123.8-181.8l-58-83.2c-30.9-46.4-63.8-85.1-71.6-85.1c-7.7,0-118,13.5-243.7,30.9c-125.7,15.5-232.1,27.1-234,23.2c-9.7-9.7-203.1-678.8-203.1-702c0-13.5,87-63.8,193.4-114.1c208.9-96.7,206.9-92.8,181.8-245.6c-11.6-65.8-17.4-69.6-224.3-152.8c-116-46.4-214.7-90.9-218.5-96.7s32.9-174.1,81.2-373.3l89-365.5l118,13.5c63.8,5.8,162.5,15.5,218.5,21.3l100.6,11.6l50.3-98.6l50.3-100.6L659.2,72.2L510.3-121.2l235.9-249.5c127.6-135.4,247.6-259.2,263-272.7c23.2-19.3,60-1.9,208.9,102.5l181.8,125.7l102.5-65.7c58-36.8,110.2-65.8,116-65.8c7.7,0,29,30.9,50.3,67.7c40.6,75.4,48.3,65.8-133.4,189.5l-131.5,90.9l-164.4-116c-89-63.8-170.2-116-177.9-116c-19.3,0-313.3,299.8-313.3,319.1c0,5.8,60,89,131.5,183.7l131.5,172.1l-96.7,197.3L819.7,637l-208.9-13.5c-191.5-11.6-208.9-9.7-216.6,23.2c-54.2,199.2-92.8,398.4-79.3,410c9.7,7.7,100.6,48.4,203.1,89l185.7,75.4l13.5,174.1c7.7,96.7,19.3,195.3,25.1,220.5c9.7,38.7-7.7,52.2-179.9,131.5c-106.4,50.3-193.4,90.9-195.3,92.8c-5.8,5.8,116,408.1,129.6,423.5c7.7,9.7,112.2,1.9,232.1-13.5c205-29,220.5-29,243.7,3.9c13.5,17.4,27.1,38.7,27.1,44.5c0,5.8,44.5,71.6,98.6,143.1l98.6,131.5L1077,2745c-65.8,94.8-116,183.7-110.2,197.3c5.8,11.6,79.3,85.1,164.4,162.5l154.7,139.3l179.9-141.2l181.8-141.2l189.5,87l189.5,89L2015,3360l-11.6,224.3l183.7,44.5c102.5,23.2,201.1,48.3,220.5,54.2c30.9,7.7,50.3-23.2,118-191.5c44.5-110.2,87-208.9,94.8-220.5c7.7-13.5,98.6-25.1,220.5-30.9l205-9.7l90.9,191.5c50.3,104.4,102.5,189.5,114.1,189.5c25.1,0,402.3-112.2,411.9-123.8c5.8-3.9-5.8-106.4-23.2-228.2c-29-206.9-29-220.5,3.9-243.7c19.3-13.5,90.9-61.9,156.6-106.4c67.7-44.5,133.5-89,147-98.6c15.5-11.6,81.2,23.2,195.3,102.5l172.1,119.9l162.5-162.5l162.5-162.5l-100.6-131.5l-102.5-129.6l56.1-44.5c30.9-27.1,65.8-46.4,75.4-48.3c11.6,0,83.2,81.2,158.6,181.8l141.2,181.8l-266.9,274.6l-265,272.7l-179.9-127.6L3976,3010l-85.1,54.2c-48.3,29-87,67.7-87,85.1c0,15.5,13.5,123.8,29,239.8c17.4,116,23.2,216.6,15.5,224.3c-13.5,11.6-676.9,210.8-704,210.8c-5.8,0-54.2-90.9-104.4-203.1l-92.8-203.1h-102.5h-100.6l-61.9,150.8c-121.8,294-131.5,313.3-168.3,311.4C2494.6,3880.3,2332.1,3843.6,2150.3,3797.1z"/>
                <path    
                    style = {{opacity: this.state.cogOpacity, transition: "1s"}}               
                    fill={this.props.secondaryColor}
                    d="M2508.1,2799.2c-624.7-75.4-1137.2-524.1-1307.4-1143c-48.3-172.1-48.3-558.9,0-731.1c65.8-237.9,218.5-516.4,353.9-646l56.1-52.2l54.1,56.1l54.2,56.1l-98.6,129.6C1411.5,739.5,1338,961.9,1340,1300.3c0,195.3,9.7,255.3,52.2,386.8c205,624.7,829.7,1025,1462.1,938c239.8-32.9,535.7-150.8,665.3-266.9c29-27.1,36.8-25.2,73.5,7.7c90.9,81.2,87,98.6-54.2,189.5C3229.5,2754.7,2860.1,2841.7,2508.1,2799.2z"/>
            <g style={{transition: "1s"}}>
                <path d="M3388.1,2089.4c-61.9-17.4-125.7-67.7-156.7-123.8c-21.3-42.5-27.1-137.3-27.1-413.9V1194h87h87v348.1c0,323,1.9,348.1,36.7,367.5c25.1,13.5,1042.4,19.3,3152.4,19.3h3113.7l29-42.6c27.1-38.7,30.9-284.3,30.9-2253.1c0-2185.4,0-2210.6-38.7-2249.2s-63.8-38.7-2620.6-38.7H4500.2v-87v-87h551.2h551.2v-174.1v-174.1h-185.7c-292,0-334.6-38.7-336.5-303.6v-179.9h1479.5h1479.5v145c0,280.4-61.9,338.5-357.8,338.5h-183.7v174.1v172.1l1117.9,5.8c1028.9,5.8,1121.7,7.7,1170.1,40.6c121.8,79.3,114.1-98.6,114.1,2421.4s7.7,2342.1-114.1,2421.4c-50.3,32.9-228.2,34.8-3206.6,36.7C4846.3,2097.1,3409.4,2095.2,3388.1,2089.4z M7327.7-3002.8l-5.8-174.1h-773.6h-771.7v174.1v174.1H6556h777.5L7327.7-3002.8z M7861.5-3422.5l5.8-63.8H6561.8H5254.4v67.7v67.7l1301.6-3.9l1299.6-5.8L7861.5-3422.5z"/>
                <path d="M3610.5,1445.4V1194h87h87v164.4v164.4h2775.3h2775.3V-43.8v-1566.6H6917.7H4500.2v-87v-87h2504.5h2504.5V-43.8v1740.6H6559.9H3610.5V1445.4z"/>
                <path d="M5080.4,787.8V381.7h1556.9h1556.9v406.1V1194H6637.2H5080.4V787.8z M8020,787.8V555.7H6637.2H5254.4v232.1v232.1h1382.8H8020V787.8z"/>
                <path d="M2190.9,919.3c-48.3-13.5-110.2-54.2-168.3-112.2c-71.6-71.6-94.8-112.2-114.1-195.3c-15.5-77.4-19.3-599.5-15.5-1961.1c5.8-1769.6,7.7-1860.5,42.5-1924.3c50.3-94.8,106.4-152.8,195.3-199.2c75.4-40.6,100.6-42.6,880-48.3c943.8-7.7,968.9-3.9,1100.4,129.6c54.2,54.2,98.6,119.9,114.1,168.2c15.5,56.1,23.2,288.2,23.2,798.8v717.5h-87h-87v-717.5c0-818.1,0-818.1-145-887.7c-79.3-38.7-106.4-40.6-885.8-34.8c-777.5,5.8-804.6,7.7-858.7,46.4c-29,21.3-69.6,69.6-87,106.4c-32.9,61.9-34.8,191.5-34.8,1899.2c0,1986.2-3.9,1905,106.4,2005.6l52.2,48.3l823.9,5.8c771.7,3.9,829.7,1.9,891.6-30.9c119.9-63.8,137.3-127.6,137.3-471.9V-43.8h87h87v307.5c0,352-19.3,435.2-129.6,547.3c-125.7,129.6-147,131.5-1048.2,129.6C2581.6,938.7,2237.4,930.9,2190.9,919.3z"/>
                <path d="M2662.8,546.1v-87l353.9,3.9l352,5.8l5.8,83.2l5.8,81.2h-357.8h-359.7V546.1z"/><path d="M2179.3-1194.6v-1479.5H3069h889.6v483.5v483.5h-87h-87v-396.5V-2500H3069h-715.6v1305.4V110.9H3069h715.6V-74.7v-183.7l83.2,5.8l81.2,5.8l5.8,266.9l5.8,265H3069h-889.6V-1194.6z"/><path d="M7246.4-246.9v-473.8h473.8h473.8v473.8V227h-473.8h-473.8V-246.9z M8020-246.9v-299.8h-299.8h-299.8v299.8V52.9h299.8H8020V-246.9z"/><path d="M5157.7,62.6v-87l895.4,3.9l893.5,5.8l5.8,83.2l5.8,81.2H6059h-901.2V62.6z"/><path d="M2450.1-391.9v-406.1h609.2h609.2v406.1V14.2h-609.2h-609.2V-391.9z M3494.5-391.9V-624h-435.2h-435.2v232.1v232.1h435.2h435.2V-391.9z"/>
                <path d="M5157.7-227.5v-87H6057h899.3v87v87H6057h-899.3V-227.5z"/>
                <path d="M3865.8-666.6l5.8-83.2h1537.5h1537.5l5.8,83.2l5.8,81.2H5409.1H3860L3865.8-666.6z"/><path d="M2469.4-1078.5v-85.1l557-5.8c305.6-3.9,1027-3.9,1605.2,0l1048.2,5.8v85.1v87H4074.7H2469.4V-1078.5z"/><path d="M5970-1078.5v-87h261.1h261.1v87v87h-261.1H5970V-1078.5z"/><path d="M6782.3-1078.5v-87h261.1h261.1v87v87h-261.1h-261.1V-1078.5z"/><path d="M7588.8-1003.1c-7.7-7.7-13.5-48.3-13.5-89v-73.5h272.7h270.8l-5.8,83.2l-5.8,81.2l-253.3,5.8C7716.4-993.4,7596.5-997.3,7588.8-1003.1z"/><path d="M2473.3-1440.2l5.8-83.2l576.3-5.8l574.4-3.9v87v87h-582.1h-580.2L2473.3-1440.2z"/><path d="M2469.4-1736.1v-87h580.2h580.2v87v87h-580.2h-580.2V-1736.1z"/>
                <path d="M6325.9-1937.2c-195.4-89-232.1-332.6-75.4-485.4c65.8-63.8,77.4-67.7,203.1-67.7s137.3,3.9,203.1,67.7c156.7,152.8,119.9,396.5-75.4,485.4C6480.6-1892.7,6426.4-1892.7,6325.9-1937.2z M6513.4-2095.8c90.9-48.3,79.3-199.2-15.5-222.4c-110.2-29-199.2,56.1-160.5,154.7C6366.5-2084.2,6441.9-2055.2,6513.4-2095.8z"/>
                <path d="M2962.6-2739.8c-30.9-13.5-79.3-50.3-106.4-79.3c-40.6-42.5-48.3-69.6-48.3-174.1c0-104.4,7.7-129.6,48.3-174.1c100.6-108.3,218.5-133.5,340.4-75.4c145,69.6,195.3,292,90.9,415.8C3198.6-2722.4,3076.7-2689.5,2962.6-2739.8z M3134.7-2917.7c67.7-67.7,21.3-181.8-73.5-181.8c-77.4,0-114.1,114.1-56.1,177.9C3043.8-2879.1,3094.1-2877.1,3134.7-2917.7z"/></g></g>
            </g>
            </svg>
        )
    }
};

export default Responsive;