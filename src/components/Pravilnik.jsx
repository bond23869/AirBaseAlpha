import React from "react";

function Pravilnik() {
  return (
    <div className="contact">
      <div className="storTitle minierDog">
        <h1>PRAVILNIK</h1>
      </div>

      <div className="legenda">
        <h2 style={{margin:'0% 0% 2% 0%'}}>Legenda</h2>
        <p>J - Moč replike ob strelu metka</p>
        <p>DMR - Designated Marksman rifle</p>
        <p>RPS - Rounds per second</p>
        <p>AEG - Automatic Electric Gun</p>
        <p>AEP - Automatic Electric Pistol</p>
        <p>mAh = Milliamp Hours. (How long a battery can supply 1 milli Amp at the rated voltage per second)</p>
        <p>Lipo = Lithium-ion polymer battery. (Almost perfect charge/discharge efficiency ~ 99.8%)</p>
      </div>

      <div className="pravila downDog upPad">
        <div className="pravilo">
          <h2 className="minierDog">Splošna pravila</h2>
          <ol>
            <li>Očala se med igro ne snemajo</li>
            <br/>
            <li>Ko si zadet vzklikni "HIT" in dvigni roko</li>
            <br/>
            <li>Med testiranjem replike se odmakni od varne točke</li>
            <br/>
            <li>Na varni točki morajo biti replike vedno na "SAFE"</li>
            <br/>
            <li>Če se med igro kdo poškoduje, se vzklikne "STOP" in ustavi igro</li>
            <br/>
            <li>Med igro moramo biti do drugih spoštljivi</li>

          </ol>
        </div>
        
        <div className="pravilo">
          <h2 className="minierDog">Outdoor Pravila</h2>
          <p>MAX 30 RPS</p>
          <p>MOČ:</p>
          <ol>
            <li>Pištole, shotgun, assualt MAX 1,5 - 1,6J</li>
            <li>DMR - MAX 2,3J</li>
            <li>Sniper rifle - MAX 2,8J</li>
          </ol>
          <p>ODDALJENOST</p>
          <ul>
            <li>0 - 1J = MIN 0m</li>
            <li>1 - 1,5J = MIN 5m</li>
            <li>1,5 - 2J = MIN 10-15m</li>
            <li>2 - 2,8J = MIN 20-30m</li>
          </ul>
        </div>
        
        <div className="pravilo">
          <h2 className="minierDog">Indoor Pravila</h2>
          <p>MAX 30 RPS</p>
          <p>MOČ</p>
          <ol>
            <li>Pištole, shotgun, assault = MAX 1,2J</li>
            <li>DMR - MAX 2,3J</li>
            <li>Sniper rifle - MAX 2,8J</li>
          </ol>
          <p>ODDALJENOST</p>
          <ul>
            <li>0 - 1J = MIN 0m</li>
            <li>1 - 1,5J = MIN 5m</li>
            <li>1,5 - 2J = MIN 10-15m</li>
            <li>2 - 2,8J = MIN 20-30m</li>
          </ul>
          
        </div>
        
      </div>
    </div>
  );
}

export default Pravilnik;