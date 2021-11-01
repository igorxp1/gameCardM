import { useState } from "react";
import "./styles.css";
import { Button } from "semantic-ui-react";

export default function Game() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const data = [
    {
      id: 1,
      content: "A",
      contador: 1
    },
    {
      id: 2,
      content: "B",
      contador: 2
    },
    {
      id: 3,
      content: "F",
      contador: 3
    },
    {
      id: 4,
      content: "A",
      contador: 1
    }
  ];

  const verifica = (id, content) => {
    if (valor1 === "") {
      setValor1(content);
    } else if (valor2 === "") {
      setValor2(content);
      setIsDisable(true);
      // verificaCerto();
    } else {
    }
    console.log(valor1 + " - " + valor2);
  };

  const verificaCerto = () => {
    console.log(valor1 + " - " + valor2);
    if (valor1 === valor2) {
      setResultado("Parabens!! Voce acertou!");
    } else {
      setResultado("Pena nao conseguiu acertar!");
    }
    setValor1("");
    setValor2("");
  };

  const counter = () => {
    setIsDisable(true);
    setIsVisible(true);
    setTimeout(() => {
      console.log("Boa sorte!");
      setIsVisible(false);
      setIsDisable(false);
    }, 5000);
  };

  return (
    <div>
    <center>
      <div className="menu">
        <div>
          <Button color="green" onClick={counter}>Comecar jogo</Button>
        </div>
        <br></br> 

        {data.map((data) => (
          <div key={data.id} className="orientation">
            {isDisable ? (
              <Button color="green"
                disabled
                onClick={() => verifica(data.id, data.content)}
                value={data.id}
              >
                {isVisible ? data.content : data.id}
              </Button>
            ) : (
              <Button  color="green" inverted
                onClick={() => verifica(data.id, data.content)}
                value={data.id}
              >
                {isVisible ? data.content : data.id}
              </Button>
            )}
          </div>
        ))}

        <br></br>
        <div>
          <br></br>
          {!isDisable ? (
            <Button color="green" disabled onClick={verificaCerto}>
              Ver se acertou
            </Button>
          ) : (
            <Button color="green" onClick={verificaCerto}>Ver se acertou</Button>
          )}
        </div>
      </div>
      <br></br>
      <div className="label">
        <h2>
          {valor1} - {valor2}
        </h2>
      </div>
      <br></br>
      <div className="label">
        <h2>{resultado}</h2>
      </div></center>
    </div>
  );
}
