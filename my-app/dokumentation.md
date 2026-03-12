# Dokumentation
### Julie Cassandra Gerner Bissø wu13

Formålet med dette projekt var at udvikle en webapplikation hvor brugere kan finde og tilmelde sig forskellige træningshold. Brugeren kan søge efter hold, se information om dem, og tilmelde sig via en profilside. Applikationen er bygget som en moderne webapplikation med fokus på komponentbaseret udvikling og dynamisk datahåndtering.

- Next.js: bliver brugt som framework til at opbygge applikationen. Next.js har functionen til at kunne lave server- og client-side rendering.  

- React: bliver brugt til at lave komponenterne. Gør det mere overskuligt at lave projekter da du kan genbrug komponenter andre steder.  

- SCSS: bliver brugt til styling. laver bedre strukture end normal css med nesting og med at kunne lave variabler.  

- JavaScript: bliver brugt til fetching for api, og functionerne til nogle af siderne.  

- Git / GitHub: bliver brugt til at logge versioner og gemme koden undervejs



den valgfrie opgave jeg har valgt er opgave C, Opret, rediger og slet en "class"  


#### loader
[Loader page link](./src/app/page.jsx)  


[Link to helping links](https://dev.to/juniordevforlife/adventures-with-javascript-arrays-random-numbers-array-4io1)
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
bruges til at køre kode når komponenten bliver indlæst.  
I dette tilfælde bruges den til at vælge et tilfældigt baggrundsbillede når loaderen starter.

- `Math`  
`Math.floor()` og `Math.random()` bruges til at vælge et tilfældigt element fra et array.  
`Math.random()` genererer et tal mellem 0 og 1, som derefter ganges med arrayets længde. 

 `Math.floor()` runder tallet ned til et helt tal, så det kan bruges som index i arrayet.


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

under kodeningen af projektet kom jeg forbi nogle forhændringer, især med min søgefunction.  
fandt hårdt ud af at hvordan du render dine komponenter i page.jsx betyder meget.  
jeg havdet puttet søge komponentet i en `.map()` som gjor den renderet de komponent gange antallet af id'er i api arrayet.  

