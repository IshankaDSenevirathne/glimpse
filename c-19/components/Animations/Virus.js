import React,{useEffect} from 'react'
import {TimelineMax,Power1,Sine,Power0} from "gsap/dist/gsap";

export default function Virus() {

    useEffect(()=>{
        var tl=new TimelineMax({repeat:-1});
          tl.from("#virus",30,{rotation:360,transformOrigin:"50% 50%",ease:Power0.easeNone});
          var tl2 = new TimelineMax({repeat:-1});
          tl2.from("#stem1",{duration:2,scale:1.26,ease:Power1.easeInOut});
          tl2.from("#stem1",{duration:2,scale:1,ease:Power1.easeInOut});
          tl2.from("#stem3",{duration:2,scale:1.16,ease:Power1.easeInOut},'-=4');
          tl2.from("#stem3",{duration:2,scale:1,ease:Power1.easeInOut},'-=2');
          tl2.from("#stem5",{duration:2,scale:1.06,ease:Power1.easeInOut},'-=4');
          tl2.from("#stem5",{duration:2,scale:1,ease:Power1.easeInOut},'-=2');
          tl2.from("#stem7",{duration:2,scale:1.16,ease:Power1.easeInOut},'-=4');
          tl2.from("#stem7",{duration:2,scale:1,ease:Power1.easeInOut},'-=2');
          tl2.from("#stem9",{duration:2,scale:1.36,ease:Power1.easeInOut},'-=4');
          tl2.from("#stem9",{duration:2,scale:1,ease:Power1.easeInOut},'-=2');
          tl2.from("#stem11",{duration:2,scale:1.26,ease:Power1.easeInOut},'-=4');
          tl2.from("#stem11",{duration:2,scale:1,ease:Power1.easeInOut},'-=2');
          tl2.from("#stem13",{duration:2,scale:1.16,ease:Power1.easeInOut},'-=4');
          tl2.from("#stem13",{duration:2,scale:1,ease:Power1.easeInOut},'-=2');
          tl2.from("#stem15",{duration:2,scale:1.36,ease:Power1.easeInOut},'-=4');
          tl2.from("#stem15",{duration:2,scale:1,ease:Power1.easeInOut},'-=2');
          tl2.from("#stem21",{duration:2,scale:1.7,ease:Power1.easeInOut},'-=4');
          tl2.from("#stem21",{duration:2,scale:1,ease:Power1.easeInOut},'-=2');
          tl2.from("#stem18",{duration:2,scale:1.2,ease:Power1.easeInOut},'-=4');
          tl2.from("#stem18",{duration:2,scale:1,ease:Power1.easeInOut},'-=2');

          var tl3 = new TimelineMax({repeat:-1});
          tl3.from("#stem1",{duration:3,y:20,ease:Power1.easeInOut});
          tl3.from("#stem1",{duration:3,y:0,ease:Power1.easeInOut});
          tl3.from("#stem2",{duration:3,y:10,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem2",{duration:3,y:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem3",{duration:3,y:20,x:-15,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem3",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem4",{duration:3,y:20,x:-15,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem4",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem5",{duration:3,y:10,x:-5,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem5",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem6",{duration:3,y:10,x:-5,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem6",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem7",{duration:3,y:5,x:-25,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem7",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem8",{duration:3,y:10,x:-5,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem8",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem10",{duration:3,y:-10,x:-15,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem10",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem11",{duration:3,y:-20,x:-15,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem11",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem12",{duration:3,y:-10,x:2,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem12",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem13",{duration:3,y:-30,x:2,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem13",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem14",{duration:3,y:-30,x:2,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem14",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem15",{duration:3,y:-10,x:-2,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem15",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem16",{duration:3,y:-15,x:20,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem16",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem17",{duration:3,y:-5,x:-10,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem17",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem18",{duration:3,y:-10,x:15,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem18",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem20",{duration:3,y:10,x:15,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem20",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
          tl3.from("#stem21",{duration:3,y:10,x:10,ease:Power1.easeInOut},'-=6');
          tl3.from("#stem21",{duration:3,y:0,x:0,ease:Power1.easeInOut},'-=3');
        var t4=new TimelineMax({repeat:-1});
          t4.from("#orb1",{duration:3,scale:0.5,ease:Sine.easeInOut});
          t4.from("#orb1",{duration:3,scale:1,ease:Sine.easeInOut});
          t4.from("#orb2",{duration:3,scale:1.5,ease:Sine.easeInOut},'-=10');
          t4.from("#orb2",{duration:3,scale:1,ease:Sine.easeInOut},'-=5');
          t4.from("#orb3",{duration:3,scale:2,ease:Sine.easeInOut},'-=10');
          t4.from("#orb3",{duration:3,scale:1,ease:Sine.easeInOut},'-=5');
          t4.from("#orb4",{duration:3,scale:1.5,ease:Sine.easeInOut},'-=10');
          t4.from("#orb4",{duration:3,scale:1,ease:Sine.easeInOut},'-=5');
          t4.from("#orb5",{duration:3,scale:0.3,ease:Sine.easeInOut},'-=10');
          t4.from("#orb5",{duration:3,scale:1,ease:Sine.easeInOut},'-=5');
          t4.from("#orb6",{duration:3,scale:0.2,ease:Sine.easeInOut},'-=10');
          t4.from("#orb6",{duration:3,scale:1,ease:Sine.easeInOut},'-=5');
          t4.from("#orb7",{duration:3,scale:1.4,ease:Sine.easeInOut},'-=10');
          t4.from("#orb7",{duration:3,scale:1,ease:Sine.easeInOut},'-=5');
          t4.from("#orb8",{duration:3,scale:0.3,ease:Sine.easeInOut},'-=10');
          t4.from("#orb8",{duration:3,scale:1,ease:Sine.easeInOut},'-=5');
          t4.from("#orb9",{duration:3,scale:0.3,ease:Sine.easeInOut},'-=10');
          t4.from("#orb9",{duration:3,scale:1,ease:Sine.easeInOut},'-=5');
          t4.from("#orb10",{duration:3,scale:0.1,ease:Sine.easeInOut},'-=10');
          t4.from("#orb10",{duration:3,scale:1,ease:Sine.easeInOut},'-=5');
          t4.from("#orb11",{duration:3,scale:0.4,ease:Sine.easeInOut},'-=10');
          t4.from("#orb11",{duration:3,scale:1,ease:Sine.easeInOut},'-=5');
          t4.from("#orb12",{duration:3,scale:0.7,ease:Sine.easeInOut},'-=10');
          t4.from("#orb12",{duration:3,scale:1,ease:Sine.easeInOut},'-=5');
          t4.from("#orb13",{duration:3,scale:1.4,ease:Sine.easeInOut},'-=10');
          t4.from("#orb13",{duration:3,scale:1,ease:Sine.easeInOut},'-=5');
          t4.from("#orb14",{duration:3,scale:1.7,ease:Sine.easeInOut},'-=10');
          t4.from("#orb14",{duration:3,scale:1,ease:Sine.easeInOut},'-=5');
          t4.from("#orb15",{duration:3,scale:0.4,ease:Sine.easeInOut},'-=10');
          t4.from("#orb15",{duration:3,scale:1,ease:Sine.easeInOut},'-=5');
    },[])
    return (
        <div>
        <svg width="100%" height="403" viewBox="0 0 446 403">
        <title>virus</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <g id="virus">
              <rect id="space" width="446" height="403" style={{fill:"none"}}/>
              <circle cx="219.67" cy="199.33" r="83.78" transform="translate(-17.52 377.46) rotate(-79.13)" style={{fill:"#d62626"}}/>
              <g id="stem6">
                <path d="M296.68,193.93q-1.89-9.6-3.8-19.22c17.25,1.85,34-1.56,50.27-4.65.6,3,1.19,6,1.79,9C328.71,182.41,311.93,185.65,296.68,193.93Z" style={{fill:"#d62626"}}/>
                <path d="M342.05,187.83c-4.15.82-8.6-4-9.94-10.77s.94-12.91,5.08-13.73,8.6,4,9.94,10.76S346.19,187,342.05,187.83Z" style={{fill:"#d62626"}}/>
              </g>
              <g id="stem5">
                <path d="M293,174.82l-9.39-19.07c25.36-6.24,48.93-17.94,71.87-29.08q2.21,4.47,4.4,8.94C337.09,147,313.44,158.53,293,174.82Z" style={{fill:"#d62626"}}/>
                <path d="M361.26,147.44c-4.6,2.75-12-1.09-16.44-8.57s-4.4-15.78.19-18.53,11.94,1.09,16.42,8.57S365.83,144.69,361.26,147.44Z" style={{fill:"#d62626"}}/>
                <path d="M359.29,143.74c-3.15,1.95-8.33-1-11.58-6.61s-3.34-11.71-.2-13.66,8.33,1,11.57,6.61S362.42,141.8,359.29,143.74Z" style={{fill:"#971C1C"}}/>
              </g>
              <g id="stem3">
                <path d="M270,138.41l-17.67-11.83c18.84-18.08,33.4-40,47.7-61.12L308.33,71C294.26,92.28,279.54,114.09,270,138.41Z" style={{fill:"#d62626"}}/>
                <path d="M315.37,80.3c-2.62,4.67-10.91,5-18.52.71s-11.65-11.52-9-16.18,10.9-5,18.51-.71S318,75.65,315.37,80.3Z" style={{fill:"#d62626"}}/>
                <path d="M311.1,77.35c-1.6,2.93-7,2.94-12,0s-7.83-7.66-6.23-10.59,7-3,12,0S312.69,74.42,311.1,77.35Z" style={{fill:"#971C1C"}}/>
              </g>
              <g id="stem1">
                <path d="M231.88,118.38,210.67,117c7.27-25.08,8.92-51.34,10.75-76.78l9.94.66C229.81,66.31,228,92.56,231.88,118.38Z" style={{fill:"#d62626"}}/>
                <path id="_1-c-0" data-name="1-c-0" d="M241.31,44c.43,5.07-5.92,9.76-14.19,10.46s-15.32-2.83-15.73-7.9,5.9-9.74,14.17-10.45S240.89,38.93,241.31,44Z" style={{fill:"#d62626"}}/>
                <path d="M237,43.94c.33,3.46-4.21,6.62-10.14,7.06s-11-2-11.33-5.44,4.2-6.61,10.13-7.06S236.71,40.5,237,43.94Z" style={{fill:"#971C1C"}}/>
              </g>
              <g id="stem23">
                <path d="M191.69,122.47l-19.08,9.39C166.38,106.5,154.67,82.93,143.54,60l8.93-4.39C163.86,78.41,175.4,102.06,191.69,122.47Z" style={{fill:"#d62626"}}/>
                <path d="M165.49,56.49C167.92,61,164,67.8,156.7,71.77s-15.15,3.57-17.58-.9,1.49-11.3,8.77-15.27S163.07,52,165.49,56.49Z" style={{fill:"#d62626"}}/>
                <path d="M162,59.34c1.49,2.31-1.77,6.3-7.28,8.92s-11.18,2.88-12.66.57,1.76-6.28,7.27-8.91S160.48,57.05,162,59.34Z" style={{fill:"#971C1C"}}/>
              </g>
              <g id="stem21">
                <path d="M158.33,147.07q-5.93,8.82-11.83,17.67c-18.08-18.85-40-33.41-61.12-47.71l5.55-8.28C112.2,122.82,134,137.54,158.33,147.07Z" style={{fill:"#d62626"}}/>
                <path d="M100.18,105.85c3.47,2.59,2.87,9.28-1.34,14.94S88.4,129,84.93,126.36s-2.87-9.26,1.34-14.92S96.72,103.27,100.18,105.85Z" style={{fill:"#d62626"}}/>
                <path d="M96.31,109.64c2.2,1.62,1.74,5.9-1,9.56s-6.79,5.34-9,3.72-1.74-5.88,1-9.55S94.12,108,96.31,109.64Z" style={{fill:"#971C1C"}}/>
              </g>
              <g id="stem19">
                <path d="M147.65,187.49c-.24,3.7-.49,7.4-.73,11.1-13.12-3.81-26.86-4.68-40.17-5.63.11-1.73.23-3.47.34-5.2C120.41,188.57,134.15,189.53,147.65,187.49Z" style={{fill:"#d62626"}}/>
                <path d="M110.52,199.08c-2.93,0-5.31-3.85-5.32-8.61s2.33-8.64,5.26-8.64,5.3,3.84,5.32,8.61S113.43,199.08,110.52,199.08Z" style={{fill:"#d62626"}}/>
                <path d="M110.05,197.62c-1.91.08-3.37-2.87-3.25-6.59s1.74-6.79,3.65-6.87,3.37,2.86,3.26,6.58S112,197.54,110.05,197.62Z" style={{fill:"#971C1C"}}/>
              </g>
              <g id="stem17">
                <path d="M151.94,223.4q3.13,6.36,6.26,12.72c-16.91,4.16-32.62,12-47.92,19.38-1-2-2-4-2.93-5.95C122.56,242,138.34,234.26,151.94,223.4Z" style={{fill:"#d62626"}}/>
                <path d="M107.89,243.67c2.69-1.48,6.82.87,9.24,5.25s2.19,9.13-.49,10.61-6.82-.87-9.23-5.25S105.21,245.15,107.89,243.67Z" style={{fill:"#d62626"}}/>
                <path d="M109.93,246.34c1.52-.91,4,.84,5.58,3.93s1.61,6.33.09,7.25-4-.84-5.58-3.93S108.41,247.26,109.93,246.34Z" style={{fill:"#971C1C"}}/>
              </g>
              <g id="stem15">
                <path d="M168.31,258.21,182,267.36c-14.58,14-25.85,31-36.91,47.3l-6.41-4.29C149.55,293.91,160.94,277,168.31,258.21Z" style={{fill:"#d62626"}}/>
                <path d="M137.21,303.21c1.76-2.76,6.85-2.67,11.35.21s6.74,7.44,5,10.2-6.85,2.68-11.36-.2S135.45,306,137.21,303.21Z" style={{fill:"#d62626"}}/>
                <path d="M138.93,304.33c1.31-2.05,5.1-2,8.46.18s5,5.56,3.73,7.62-5.09,2-8.45-.18S137.63,306.38,138.93,304.33Z" style={{fill:"#971C1C"}}/>
              </g>
              <g id="stem13">
                <path d="M203.67,273.59l25.3,2.34c-9.47,29.74-12.25,61.07-15.22,91.41l-11.85-1.09C204.54,335.88,207.54,304.56,203.67,273.59Z" style={{fill:"#d62626"}}/>
                <path d="M194.05,358.69c.38-5.34,7.74-9.18,16.44-8.56s15.45,5.44,15.07,10.77-7.73,9.16-16.43,8.55S193.67,364,194.05,358.69Z" style={{fill:"#d62626"}}/>
                <path d="M197.85,359.22c.17-3.49,5.37-5.87,11.6-5.32s11.13,3.83,11,7.32-5.37,5.87-11.59,5.32S197.67,362.7,197.85,359.22Z" style={{fill:"#971C1C"}}/>
              </g>
              <g id="stem11">
                <path d="M245.22,270.82l19.07-9.39c6.24,25.36,17.95,48.93,29.08,71.87q-4.46,2.2-8.94,4.4C273.05,314.88,261.51,291.22,245.22,270.82Z" style={{fill:"#d62626"}}/>
                <path d="M273.56,337.91c-2.65-4.65,1.34-11.92,8.92-16.24s15.87-4.08,18.52.57-1.34,11.91-8.92,16.24S276.21,342.55,273.56,337.91Z" style={{fill:"#d62626"}}/>
                <path d="M277.72,336.84c-1.81-2.91,1.45-7.78,7.27-10.86s12-3.23,13.81-.32-1.44,7.77-7.26,10.86S279.53,339.75,277.72,336.84Z" style={{fill:"#971C1C"}}/>
              </g>
              <g id="stem9">
                <path d="M274.72,256l11.83-17.67c18.08,18.84,40,33.4,61.12,47.71q-2.76,4.14-5.54,8.27C320.86,280.24,299,265.53,274.72,256Z" style={{fill:"#d62626"}}/>
                <path d="M334.26,300.55c-4.76-2.45-5.39-10.72-1.41-18.48s11.07-12.08,15.83-9.63,5.38,10.7,1.41,18.47S339,303,334.26,300.55Z" style={{fill:"#d62626"}}/>
                <path d="M337.25,297.17c-3-1.48-3.15-7-.24-12.42s7.72-8.56,10.75-7.08,3.15,7,.25,12.41S340.29,298.64,337.25,297.17Z" style={{fill:"#971C1C"}}/>
              </g>
              <g id="stem7">
                <path d="M294.75,217.86l1.41-21.21c25.08,7.28,51.34,8.92,76.78,10.76-.21,3.3-.43,6.62-.66,9.93C346.83,215.79,320.57,214,294.75,217.86Z" style={{fill:"#d62626"}}/>
                <path d="M368.06,227.68c-5.36.1-9.83-6.89-10-15.61s4-15.88,9.38-16,9.81,6.88,10,15.6S373.39,227.58,368.06,227.68Z" style={{fill:"#d62626"}}/>
                <path d="M369.06,223.07c-3.79.1-6.91-5-7-11.39S365,200,368.79,199.94s6.89,5,7,11.38S372.83,223,369.06,223.07Z" style={{fill:"#971C1C"}}/>
              </g>
              <g id="stem4">
                <path d="M283.63,155.93l-12.9-14.75c15.86-7,28.66-18.35,41.21-29.16l6.05,6.91C305.61,129.93,292.69,141.13,283.63,155.93Z" style={{fill:"#d62626"}}/>
                <path d="M319.49,124.43c-2.15,2-6.52.79-9.76-2.71s-4.15-7.92-2-9.91,6.5-.78,9.75,2.7S321.62,122.45,319.49,124.43Z" style={{fill:"#d62626"}}/>
              </g><g id="stem2">
                <path d="M253.33,129.54l-18.55-6.31c10.23-14,15.65-30.23,21.11-45.87l8.69,3C259.37,96,253.78,112.2,253.33,129.54Z" style={{fill:"#d62626"}}/>
                <path d="M271.12,85.77c-.91,4-6.95,6-13.48,4.56s-11.09-5.94-10.17-9.94,6.94-6,13.47-4.56S272,81.78,271.12,85.77Z" style={{fill:"#d62626"}}/>
              </g>
              <g id="stem24">
                <path d="M213.89,121.84l-19.22,3.81c1.85-17.26-1.56-34-4.65-50.28l9-1.78C202.37,89.81,205.6,106.59,213.89,121.84Z" style={{fill:"#d62626"}}/>
                <path d="M207.61,74.65c1.32,3.9-2.75,8.8-9.09,10.95s-12.55.75-13.87-3.13,2.74-8.79,9.08-11S206.29,70.77,207.61,74.65Z" style={{fill:"#d62626"}}/>
              </g>
              <g id="stem22">
                <path d="M175.88,134.89,161.14,147.8c-7-15.87-18.35-28.67-29.16-41.22l6.9-6C149.89,112.91,161.09,125.83,175.88,134.89Z" style={{fill:"#d62626"}}/>
                <path d="M144.72,99.39c2.37,2.11,1.51,7-1.93,10.83s-8.15,5.3-10.52,3.19-1.51-7,1.93-10.83S142.35,97.29,144.72,99.39Z" style={{fill:"#d62626"}}/>
              </g>
              <g id="stem20">
                <path d="M149.5,165.19q-3.17,9.28-6.32,18.55c-14-10.22-30.22-15.65-45.86-21.11,1-2.89,2-5.79,3-8.69C116,159.16,132.15,164.75,149.5,165.19Z" style={{fill:"#d62626"}}/>
                <path d="M107.22,149c4,1.15,5.63,7.29,3.77,13.72s-6.57,10.73-10.51,9.59-5.63-7.29-3.77-13.72S103.28,147.89,107.22,149Z" style={{fill:"#d62626"}}/>
              </g>
              <g id="stem18">
                <path d="M139.67,201.21q1.89,9.61,3.8,19.22c-17.25-1.85-34,1.56-50.27,4.65-.6-3-1.19-6-1.79-9C107.64,212.73,124.42,209.49,139.67,201.21Z" style={{fill:"#d62626"}}/>
                <path d="M94.6,207.39c4.22-1,8.93,3.8,10.53,10.68s-.52,13.24-4.73,14.21-8.93-3.79-10.53-10.66S90.39,208.37,94.6,207.39Z" style={{fill:"#d62626"}}/>
              </g>
              <g id="stem16">
                <path d="M148.77,242.14q6.47,7.37,12.91,14.74c-15.86,7-28.67,18.35-41.21,29.16l-6-6.9C126.8,268.13,139.71,256.93,148.77,242.14Z" style={{fill:"#d62626"}}/>
                <path d="M114.26,269.54c3.34-2.77,9.69-.6,14.2,4.83s5.46,12.07,2.13,14.83-9.68.6-14.19-4.82S110.94,272.29,114.26,269.54Z" style={{fill:"#d62626"}}/>
              </g>
              <g id="stem14">
                <path d="M185.15,269l18.55,6.31c-10.23,14-15.65,30.22-21.11,45.87l-8.69-3C179.12,302.53,184.7,286.37,185.15,269Z" style={{fill:"#d62626"}}/>
                <path d="M168.62,311.65c1.31-4,7.68-5.56,14.24-3.43s10.82,7.11,9.52,11.13-7.68,5.55-14.24,3.43S167.32,315.67,168.62,311.65Z" style={{fill:"#d62626"}}/>
              </g>
              <g id="stem12">
                <path d="M224.59,276.73l19.22-3.81c-1.85,17.25,1.56,34,4.65,50.27l-9,1.79C236.11,308.76,232.87,292,224.59,276.73Z" style={{fill:"#d62626"}}/>
                <path d="M230.94,321.37c-.9-4.13,3.83-8.68,10.56-10.15s12.93.67,13.84,4.8-3.83,8.67-10.56,10.15S231.85,325.49,230.94,321.37Z" style={{fill:"#d62626"}}/>
              </g>
              <g id="stem10">
                <path d="M262.6,263.68l14.74-12.91c7,15.86,18.35,28.67,29.16,41.21l-6.9,6C288.59,285.65,277.39,272.74,262.6,263.68Z" style={{fill:"#d62626"}}/>
                <path d="M291.33,299.21c-2.7-3.24-.59-9.46,4.71-13.86s11.79-5.35,14.5-2.1.59,9.46-4.71,13.87S294,302.46,291.33,299.21Z" style={{fill:"#d62626"}}/>
              </g>
              <g id="stem8">
                <path d="M289,233.37q3.15-9.27,6.31-18.55c14,10.23,30.22,15.65,45.86,21.11l-3,8.7C322.48,239.41,306.33,233.82,289,233.37Z" style={{fill:"#d62626"}}/>
                <path d="M331.77,251c-4-1.36-5.45-7.76-3.23-14.29s7.26-10.72,11.27-9.36,5.44,7.75,3.23,14.28S335.78,252.34,331.77,251Z" style={{fill:"#d62626"}}/>
              </g>
              <path id="orb15" d="M244.79,154.1a12.68,12.68,0,1,1,10-14.9A12.68,12.68,0,0,1,244.79,154.1Z" style={{fill:"#971C1C"}}/>
              <path id="orb14" d="M185.11,163.49a11.72,11.72,0,1,1,9.22-13.78A11.73,11.73,0,0,1,185.11,163.49Z" style={{fill:"#971C1C"}}/>
              <path id="orb13" d="M209.24,234a11.41,11.41,0,1,1,9-13.41A11.41,11.41,0,0,1,209.24,234Z" style={{fill:"#971C1C"}}/>
              <path id="orb12" d="M179.44,254a10.77,10.77,0,1,1,13.07-7.82A10.78,10.78,0,0,1,179.44,254Z" style={{fill:"#971C1C"}}/>
              <path id="orb11" d="M236.1,261.94a12.68,12.68,0,1,1,10-14.89A12.67,12.67,0,0,1,236.1,261.94Z" style={{fill:"#971C1C"}}/>
              <path id="orb10" d="M246.72,215.26a16.48,16.48,0,1,1,13-19.37A16.49,16.49,0,0,1,246.72,215.26Z" style={{fill:"#971C1C"}}/>
              <path id="orb9" d="M214.25,200.53a9.51,9.51,0,1,1,7.48-11.18A9.52,9.52,0,0,1,214.25,200.53Z" style={{fill:"#971C1C"}}/>
              <path id="orb8" d="M278.37,223.36a10.14,10.14,0,1,1,8-11.92A10.13,10.13,0,0,1,278.37,223.36Z" style={{fill:"#971C1C"}}/>
              <path id="orb7" d="M214.12,270a4.44,4.44,0,1,1,3.49-5.21A4.43,4.43,0,0,1,214.12,270Z" style={{fill:"#971C1C"}}/>
              <path id="orb6" d="M171.33,211a15.21,15.21,0,1,1,8.52-19.75A15.21,15.21,0,0,1,171.33,211Z" style={{fill:"#971C1C"}}/>
              <path id="orb5" d="M209.77,141.24a8,8,0,1,1,6.29-9.4A8,8,0,0,1,209.77,141.24Z" style={{fill:"#971C1C"}}/>
              <path id="orb4" d="M283.47,188a6.34,6.34,0,1,1,5-7.45A6.35,6.35,0,0,1,283.47,188Z" style={{fill:"#971C1C"}}/>
              <path id="orb3" d="M218.94,165.52a4.12,4.12,0,1,1,3.25-4.85A4.12,4.12,0,0,1,218.94,165.52Z" style={{fill:"#971C1C"}}/>
              <path id="orb2" d="M263.65,167.8a7.6,7.6,0,1,1,6-8.93A7.59,7.59,0,0,1,263.65,167.8Z" style={{fill:"#971C1C"}}/>
              <path id="orb1" d="M268.17,250a10.76,10.76,0,1,1,8.46-12.64A10.76,10.76,0,0,1,268.17,250Z" style={{fill:"#971C1C"}}/>
            </g>
          </g>
        </g>
      </svg>
        </div>
    )
}