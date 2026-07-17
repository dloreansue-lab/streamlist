import React, { useState, useEffect } from "react";

function CreditCard() {

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiration, setExpiration] = useState("");

  const [savedCards, setSavedCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [message, setMessage] = useState("");


  useEffect(() => {

    const cards = localStorage.getItem("creditCards");

    if (cards) {
      setSavedCards(JSON.parse(cards));
    }

  }, []);



  const formatCardNumber = (value) => {

    const numbersOnly = value.replace(/\D/g, "");

    return numbersOnly
      .substring(0,16)
      .replace(/(.{4})/g,"$1 ")
      .trim();

  };



  const handleCardChange = (e) => {

    setCardNumber(
      formatCardNumber(e.target.value)
    );

  };



  const saveCard = () => {

    if (
      cardNumber.length !== 19 ||
      cardName.trim() === "" ||
      expiration.trim() === ""
    ) {

      alert("Please enter valid card information.");
      return;

    }


    const newCard = {

      id: Date.now(),
      cardNumber,
      cardName,
      expiration,

    };


    const updatedCards = [
      ...savedCards,
      newCard
    ];


    setSavedCards(updatedCards);


    localStorage.setItem(
      "creditCards",
      JSON.stringify(updatedCards)
    );


    setCardNumber("");
    setCardName("");
    setExpiration("");

    alert("Card saved successfully.");

  };




  const deleteCard = (id) => {

    const updatedCards =
      savedCards.filter(
        (card) => card.id !== id
      );


    setSavedCards(updatedCards);


    localStorage.setItem(
      "creditCards",
      JSON.stringify(updatedCards)
    );

  };




  const completePurchase = () => {

    if (!selectedCard) {

      alert("Please select a saved card.");
      return;

    }


    setMessage(
      "Purchase completed successfully!"
    );

  };



  return (

    <div className="stream-container">

      <h1>
        Credit Card Checkout
      </h1>



      <h2>
        Enter New Card
      </h2>


      <input
        type="text"
        placeholder="1234 5678 9012 3456"
        value={cardNumber}
        onChange={handleCardChange}
      />


      <input
        type="text"
        placeholder="Card Holder Name"
        value={cardName}
        onChange={(e)=>
          setCardName(e.target.value)
        }
      />


      <input
        type="text"
        placeholder="Expiration Date MM/YY"
        value={expiration}
        onChange={(e)=>
          setExpiration(e.target.value)
        }
      />


      <button onClick={saveCard}>
        Save Card
      </button>



      <hr />



      <h2>
        Select Saved Card
      </h2>



      {savedCards.map((card)=>(

        <div key={card.id}>

          <input
            type="radio"
            name="card"
            onChange={() =>
              setSelectedCard(card)
            }
          />


          <span>
            {card.cardNumber}
            {" - "}
            {card.cardName}
          </span>


          <button
            onClick={() =>
              deleteCard(card.id)
            }
          >
            Remove
          </button>


        </div>

      ))}



      <br />


      <button onClick={completePurchase}>
        Complete Purchase
      </button>



      {message && (

        <h3>
          {message}
        </h3>

      )}



    </div>

  );

}


export default CreditCard;