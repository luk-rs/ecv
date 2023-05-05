"use client"
import { log } from "console";
import { select } from "d3-selection";
import { debounce } from "lodash";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const Bubbles = () => {

    const initialData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const svgRef = useRef<SVGSVGElement>(null);
    const [data, setData] = useState(initialData);
    const [width, setWidth] = useState(0);

    useEffect(() => {

        function updateWidth(data: number[]) {
            setWidth(svgRef.current?.clientWidth as number / (data.length + 1));
        }


        setTimeout(() => {
            console.log('renderAndRetriggerData');
            const random = Math.random();
            console.log(random);
            const end = Math.floor(random * initialData.length) - 1;
            console.log(end);
            const newData = initialData.slice(end);
            console.log(newData);
            setData(newData);

            updateWidth(newData);


        }, 2500);

        const handleResize = debounce(updateWidth, 500);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);


    }, [data.length]);

    useLayoutEffect(() => {
        if (!Array.isArray(data))
            return;

        const update = select('g').selectAll('circle').data(data);

        update
            .enter()
            .append('circle')
            .attr('r', (d) => d)
            .attr('cx', (_, i) => width * (i + 1))
            .attr('cy', () => Math.random() * 100)
            .attr('stroke', (_, i) => (i % 2 === 0 ? '#f80' : '#aaf'))
            .attr('fill', (_, i) => (i % 2 === 0 ? 'orange' : '#44f'));

        update
            .attr('r', (d) => d)
            .attr('cx', (_, i) => width * (i + 1))
            .attr('cy', () => Math.random() * 100)
            .attr('stroke', (_, i) => (i % 2 === 0 ? '#f80' : '#aaf'))
            .attr('fill', (_, i) => (i % 2 === 0 ? 'orange' : '#44f'));

        update.exit().remove();
    }, [data]);

    return (
        <div id="bubbles-container" className="slide" >
            <svg width="100%" height="50vh" ref={svgRef}>
                <g transform="translate(0, 100)" />
            </svg>
        </div>
    )
}


export default Bubbles;
