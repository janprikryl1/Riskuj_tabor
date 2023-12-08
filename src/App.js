import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Groups from "./Groups";
import {useState} from "react";
import Question from "./Question";


function App() {
    const [points1, set1Points] = useState(0);
    const [points2, set2Points] = useState(0);
    const [points3, set3Points] = useState(0);
    const [points4, set4Points] = useState(0);

  return (
    <div className="App">
        <Groups points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>

        <br /><br /><br />
        <div className="container">
            <h3>Všeobecné znalosti</h3>
            <div className="row">
                <div className="col-sm-1">
                    <Question price={10} variant="success" question="Jaké jsou čtyři roční období a jak se liší?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={50} variant="success" question="Kolik máme prstů na rukou a nohou dohromady?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={100} variant="success" question="Jak se jmenuje hlavní město České republiky?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={150} variant="success" question="Kolik má Česká Republika krajů?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={200} variant="success" question="Která země je největší na světě?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={250} variant="success" question="Která planeta ve sluneční soustavě je nejblíže Slunci?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={500} variant="success" question="Jak se jmenuje největší oceán na Zemi?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={1000} variant="success" question="Jak se nazývá největší kontinent na Zemi?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={2500} variant="success" question="Který hmyz vytváří med a žije ve společenství nazvaném úl?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={3000} variant="success" question="Jak se jmenuje největší pohoří na světě?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={5000} variant="success" question='Jak se jmenuje naše galaxie, ve které se nachází Sluneční soustava?' points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={10000} variant="success" question="Co je to recyklace a proč je důležitá pro životní prostředí?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={11000} variant="success" question="Kterým nástrojem měříme teplotu?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={15000} variant="success" question="Jak se nazývá proces, při kterém voda mění skupenství z kapalného do plynného stavu?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={20000} variant="success" question="- [ ] Kde se narodil pilot Josef František, který zemřel během druhé světové války?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
            </div>

            <br /><br />
            <h3>Církev, historie církve</h3>
            <div className="row">
                <div className="col-sm-1">
                    <Question price={10} variant="primary" question="Ve kterém století působil na zemi Ježíš?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={50} variant="primary" question="Kde se narodil Ježíš?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={100} variant="primary" question="Kolik let Ježíš veřejně působil a v kolika letech byl ukřižován?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={150} variant="primary" question="Kolik máme evangelií?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={200} variant="primary" question="Co je to modlitba?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={250} variant="primary" question="Jak se nazývá oslava, která symbolizuje poslední večeři a koná se v kostele?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={500} variant="primary" question="Co symbolizuje křest a jak se provádí?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={1000} variant="primary" question="Co je to kázání a kdo ho v kostele pronáší?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={2500} variant="primary" question="Kdo jsou mučedníci?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={3000} variant="primary" question="Jaký je význam podobenství o marnotratném synu?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={5000} variant="primary" question='Co znamená slovo "apoštol" a proč jsou tito lidé důležití?' points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={10000} variant="primary" question="Jaké události popisuje kniha skutky apoštolů?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={11000} variant="primary" question="Jaké události popisuje kniha Zjevení Janovo?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={15000} variant="primary" question="Co se proměnilo na druhém Vatikánském koncilu?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={20000} variant="primary" question="Doplňte vynechané slovo z textu 1 Korintským 13:4-8: _ je trpělivá, je laskavá, _ nezávidí, _ se nevychloubá ani nepovyšuje; není hrubá, nehledá svůj prospěch, není vznětlivá, nepočítá křivdy, není škodolibá, ale raduje se z pravdy; všechno snáší, všemu věří, vždycky doufá, všechno vydrží. _ nikdy neskončí. Avšak proroctví – ta zaniknou, jazyky – ty umlknou, poznání – to pomine." points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
            </div>

            <br /><br />

            <h3>Advent a svatí</h3>
            <div className="row">
                <div className="col-sm-1">
                    <Question price={10} variant="warning" question="Ve kterém století působil na zemi Ježíš?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={50} variant="warning" question="Kde se narodil Ježíš?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={100} variant="warning" question="Kolik let Ježíš veřejně působil a v kolika letech byl ukřižován?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={150} variant="warning" question="Kolik máme evangelií?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={200} variant="warning" question="Co je to modlitba?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={250} variant="warning" question="Jak se nazývá oslava, která symbolizuje poslední večeři a koná se v kostele?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={500} variant="warning" question="Co symbolizuje křest a jak se provádí?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={1000} variant="warning" question="Co je to kázání a kdo ho v kostele pronáší?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={2500} variant="warning" question="Kdo jsou mučedníci?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={3000} variant="warning" question="Jaký je význam podobenství o marnotratném synu?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={5000} variant="warning" question='Co znamená slovo "apoštol" a proč jsou tito lidé důležití?' points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={10000} variant="warning" question="Jaké události popisuje kniha skutky apoštolů?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={11000} variant="warning" question="Jaké události popisuje kniha Zjevení Janovo?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={15000} variant="warning" question="Co se proměnilo na druhém Vatikánském koncilu?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={20000} variant="warning" question="Doplňte vynechané slovo z textu 1 Korintským 13:4-8: _ je trpělivá, je laskavá, _ nezávidí, _ se nevychloubá ani nepovyšuje; není hrubá, nehledá svůj prospěch, není vznětlivá, nepočítá křivdy, není škodolibá, ale raduje se z pravdy; všechno snáší, všemu věří, vždycky doufá, všechno vydrží. _ nikdy neskončí. Avšak proroctví – ta zaniknou, jazyky – ty umlknou, poznání – to pomine." points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
            </div>
            <br /><br />

            <h3>Vedoucí a tábor</h3>
            <div className="row">
                <div className="col-sm-1">
                    <Question price={10} variant="danger" question="Ve kterém století působil na zemi Ježíš?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={50} variant="danger" question="Kde se narodil Ježíš?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={100} variant="danger" question="Kolik let Ježíš veřejně působil a v kolika letech byl ukřižován?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={150} variant="danger" question="Kolik máme evangelií?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={200} variant="danger" question="Co je to modlitba?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={250} variant="danger" question="Jak se nazývá oslava, která symbolizuje poslední večeři a koná se v kostele?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={500} variant="danger" question="Co symbolizuje křest a jak se provádí?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={1000} variant="danger" question="Co je to kázání a kdo ho v kostele pronáší?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={2500} variant="danger" question="Kdo jsou mučedníci?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={3000} variant="danger" question="Jaký je význam podobenství o marnotratném synu?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={5000} variant="danger" question='Co znamená slovo "apoštol" a proč jsou tito lidé důležití?' points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={10000} variant="danger" question="Jaké události popisuje kniha skutky apoštolů?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={11000} variant="danger" question="Jaké události popisuje kniha Zjevení Janovo?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={15000} variant="danger" question="Co se proměnilo na druhém Vatikánském koncilu?" points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
                <div className="col-sm-1">
                    <Question price={20000} variant="danger" question="Doplňte vynechané slovo z textu 1 Korintským 13:4-8: _ je trpělivá, je laskavá, _ nezávidí, _ se nevychloubá ani nepovyšuje; není hrubá, nehledá svůj prospěch, není vznětlivá, nepočítá křivdy, není škodolibá, ale raduje se z pravdy; všechno snáší, všemu věří, vždycky doufá, všechno vydrží. _ nikdy neskončí. Avšak proroctví – ta zaniknou, jazyky – ty umlknou, poznání – to pomine." points1={points1} setPoints1={set1Points} points2={points2} setPoints2={set2Points} points3={points3} setPoints3={set3Points} points4={points4} setPoints4={set4Points}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
