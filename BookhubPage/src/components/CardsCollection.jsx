import React from "react";
import BookThawTharMin from "../assets/BookThawTharMin.jpg";
import BookPuNyaKhin from "../assets/BookPuNyaKhin.jpg";
import Book3 from "../assets/Book3.jpg"
import BookYuNweLinn from "../assets/BookYuNweLinn.jpg"
import BookJimmy from "../assets/BookJimmy.jpg"

function CardsCollection() {
  const cards = [
    {
      img: BookThawTharMin,
      bookName: "လူငယ်တစ်ယောက်စိတ်ဓာတ်ကျနေသည်",
      bookAuthor: "-သော်တာမင်း",
      path: "https://t.me/BookspdfNL/328",
    },
    {
      img: BookPuNyaKhin,
      bookName: "အိမ်မက်ဆက်ကြိုး",
      bookAuthor: "-ပုညခင်",
      path: "https://t.me/BookspdfNL/326",
    },
    {
        img:Book3,
        bookName:"သူကိုချစ်မိ အပြစ်ရှိ၏",
        bookAuthor:"မယ်ညို",
        path:"https://t.me/BookspdfNL/314",
    },
    {
        img:BookYuNweLinn,
        bookName:"ကိုယ်ကမှ ကိုယ့်လူပါ",
        bookAuthor:"ယုနွယ်လင်း",
        path:"https://t.me/BookspdfNL/295"
    },
    {
        img:BookJimmy,
        bookName:"တစ်ကောင်တည်းပဲပဲ",
        bookAuthor:"Jimmy",
        path:"https://t.me/BookspdfNL/293",
    }
  ];

  return (
    <div className="cardsContainer pages">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img alt={card.bookName} src={card.img} className="cardsImgs" />
          <h2 className="cardTitle">{card.bookName}</h2>
          <p className="cardText">{card.bookAuthor}</p>
          <a href={card.path} target="_blank" rel="noopener noreferrer">
            <button className="cardButton">Read Book</button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default CardsCollection;
