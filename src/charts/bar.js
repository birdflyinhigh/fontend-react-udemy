import React, {Component} from 'react';
import classes from './bar.css';


import * as d3 from 'd3';


const Bar = () => {
    let svg = d3.select('#app')
                    .append('svg')
                    .attr('height', '100%')
                    .attr('width', '100%');

    let dataArray = [5, 10, 18];

    svg.selectAll("rect").data(dataArray).enter().append('rect');


    return d3.select('#app').append('svg');
};


export default Bar;
