# Dokumentation
### Julie Cassandra Gerner Bissø wu13

#### den valgfrie opgave jeg har valgt, er opgave 


#### loader
[Loader page link](./src/app/page.jsx)  

```
const backgrounds = ["bg1", "bg2"];


/* function */
export default function Loader() {

  /* useState to store the data that changes */
  const [randomImage, setRandomImage] = useState("");

 
  useEffect(() => {
    const random = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setRandomImage(random);

   
  }, []);

```
(hvad er det?)    
dette er functionen til at randomize background-image til loaderen

(hvad er formålet?)  
functionen skulle kunne vælge mellem bg1 eller bg2 tilfældigt

(hvordan sker det?)  
baggrunds billederne er lavet i scss filen [scss filen](./src/components/loaderScss/loader.scss)  
de bliver puttet ind i et array over function.  
`useState` bliver brugt til at holde på dataet der bliver skiftet.  
`useEffect` så efter dataet er loadet bliver koden løbt igennem  

`math` bliver brugt til at randomize baggrunden ved at den generater et nummer inden for vores arrays længde og ganger det med længde.  


- `useState`  
gør det muligt for vores functionelle komponenter til at huske og opdatere data.  
for eksempel:
```const [count, setCount] = useState(0)```  
vores `count` er 0 og for at ændre den bruger vi `setCount`   
   

- `useEffect`  
Når en funktion returneres i useEffect, kører den oprydningsfunktion, før effekten køres igen.

- `Math`  
beregne, visualisere eller vise komplekse matematiske formler, grafer og ligninger i en webapplikation


#### Button animation  
[button animation link](./src/components/loaderScss/btnAnimation.scss)  

(hvad er det?)    
det er ren scss/css animation for knappen der før til home

(hvad er formålet?)  
knappen skal vende bagsiden når der bliver hoveret

(hvordan sker det?)  
der er to data'er skrevet på link tag, `data-front` og `data-back`.    
 scss til skiftet mellem de to dataer.  
          `&:before` for dataet `data-front` og er sat i default position.
`&:after` for så `data-back`og bliver filppede ud a syne. nårder bliver hoveret fader  `&:before` ud mens den flipper sig og `&:after` bliver flippet ind i default position.  

page.jsx button layout
```<button className="BtnToHomeFromLoader">
            <Link
              href="/Home"
              className="btn-flip BtnToHomeFromLoader"
              data-front="Start training"
              data-back="Welcome">
            </Link>
        </button>

 ``` 

btnAnimation.scss snippet
```
    &:before {
        content: attr(data-front);

        transition: $speed;
        display: block;
        position: relative;

        transform: translateY(0) rotateX(0);
        opacity: 1;

    }

    &:after {
        content: attr(data-back);

        transition: $speed;
        position: absolute;
        display: block;
        transform: translateY(-50%) rotateX(90deg);

        opacity: 0;

    }
```
