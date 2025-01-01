import React from "react";
import BookThawTharMin from "../assets/BookThawTharMin.jpg";
import BookPuNyaKhin from "../assets/BookPuNyaKhin.jpg";
import Book3 from "../assets/Book3.jpg"
import BookYuNweLinn from "../assets/BookYuNweLinn.jpg"
import BookJimmy from "../assets/BookJimmy.jpg"
import BookNineSunday from "../assets/BookNineNineSunday.jpg"
import BookJue from "../assets/BookJue.jpg"
import BookPuNyaKhin2 from "../assets/BookPuNyaKhin2.jpg"
import AuthorPuNyaKhin from "../assets/AuthorPuNyaKhin.jpg"
import AuthorJue from "../assets/AuthorJue.jpg"
import AuthorChitOoNyo from "../assets/AuthorChitOoNyo.png"

function CardsCollection() {
  const cards = [
    {
      img: AuthorChitOoNyo,
      bookName:"ဆရာ ချစ်ဦးညို",
      bookAuthor:"Collection",
      path:"https://t.me/herismylife/1849",
    },
    {
      img: AuthorPuNyaKhin,
      bookName:"ဆရာမ ပုညခင်",
      bookAuthor:"Collection",
      path:"https://t.me/herismylife/1896",
    },
    {
      img: AuthorJue,
      bookName:"ဆရာမ ဂျူး",
      bookAuthor:"Collection",
      path:"https://t.me/herismylife/1871",

    },
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
        bookName:"တစ်ကောင်တည်းပဲ",
        bookAuthor:"Jimmy",
        path:"https://t.me/BookspdfNL/293",
    },
    {
      img:BookNineSunday,
      bookName:"မသွားရရင် သေနိုင်တယ်",
      bookAuthor:"နိုင်းနိုင်းစနေစနေ",
      path:"https://t.me/BookspdfNL/288"
    },
    {
      img:BookJue,
      bookName:"ပင်လယ်နှင့် တူသော မိန်းမများ",
      bookAuthor:"ဂျူး",
      path:"https://t.me/herismylife/1894",
    },
    {
      img:BookPuNyaKhin2,
      bookName:"အနောက်တောင်အရပ်မှလာခဲ့သူ",
      bookAuthor:"ပုညခင်",
      path:"https://t.me/herismylife/1912",
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
