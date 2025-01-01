import React, { useState } from "react";
import Comment from "./comment";
function UserReview() {
  const UserReviews = [
    {
      id: 1,
      bookName: "သားရဲစိတ်ဓာတ် (ဘာသာပြန်) ချမ်းမြေ့ဝင်း",
      review:
        "သားရဲစိတ်ဓာတ် စာအုပ်ဟာ Comfort zone က ထွက်ပြီး ကျနော်တို့ရဲ့ အတွေးအခေါ်တွေရဲရင့်လာအောင်၊ " +
        "ကိုယ့်ကိုယ်ကိုကို ယုံကြည်မှုတိုးလာအောင်၊ လက်ဆုတ်လက်ကိုင်ပြနိုင်မဲ့ ပန်းတိုင်းတွေဟာ အတွေးအခေါ်က စတင်ကြောင်း၊ " +
        "အတွေးအခေါ် အမြင်တွေ မတူတဲ့ရပ်ဝန်းမှာ မတူတာကို တန်ဖိုးထားပြီး ပိုမိုကောင်းမွန်တဲ့ အတွေးသစ်တွေကို ဖော်ဆောင်တတ်အောင် " +
        "စိတ်ဓာတ်ခွန်အားပေးမဲ့ စာပေပဲဖြစ်ပါတယ်။ ဒီစာအုပ်မှာ အပိုင်း (၁၀) ပိုင်းပါရှိပြီး အဖြစ်အပျက်ပေါင်း (၆၀) ကျော်ကို " +
        "သာဓကကောင်းအဖြစ် ဖော်ပြထားပါတယ်။ ဖတ်ရတာ ပျင်းရိမနေပဲ စိတ်ဝင်စဖွယ်ကောင်းသလို သင်ယူစရာ၊ ခွန်အားဖြစ်စရာ တွေ အပြည့်ရှိကြောင်း " +
        "အာမခံပါရစေ။ မူရင်းစာရေးဆရာဟာ ကြော်ငြာလောကရဲ့ ဆရာတစ်ဆူဖြစ်တဲ့အလျှောက် အဖြစ်အပျက်တချို့ဟာ စာရေးဆရာရဲ့ " +
        "လုပ်ငန်းခွင်အတွင်း တွေ့ကြုံရသော အဖြစ်အပျက်များကို လူတွေရဲ့ စိတ်နေသဘောသဘာဝ နဲ့ ချိတ်ဆက် ဖော်ပြထားတာပဲဖြစ်တဲ့အပြက် " +
        "အခြားနယ်ပယ်မျိုးစုံမှလဲ ရှုထောင့်အမျိုးမျိုးနဲ့ ရေးသားတင်ပြထားတာပဲဖြစ်ပါတယ်。",
      user: "BookReviewsByMSL",
    },
    {
      id: 2,
      bookName: "ကျွန်တော်ဆက်၍ရေးချင်သော ဝတ္တုများ",
      review:
        "ဆရာ မြသန်းတင့် ဖတ်ခဲ့တဲ့ စာအုပ်တွေပေါ်မှာ တချို့ကိုကျတော့ ဘယ်လို content တွေပါစေချင်တယ်၊ တစ်ချို့တွေကိုတော့ ဘာကြောင့် ရေးရတယ်ဆိုတဲ့ သူ့အမြင်တွေ၊" +
        "စာရေးဆရာတွေရဲ့ အမြင်တွေကို ခန့်မှန်းပြီး ရေးထားတာပါ။  အဲဒီလိုရေးတဲ့နေရာမှာလဲ စာအုပ်တွေမှာ ဥပမာဆိုရင် ဆရာ မြသန်းတင့်က သူမသေစေချင်တဲ့ ဇာတ်ကောင် နဲ့ သူ့အမြင်တွေကို" +
        "သူတို့ က ဘယ်လိုတွေလုပ်နိုင်ပါသေးတယ်ဆိုတဲ့ တင်ပြချက်နဲ့  စာအုပ်တွေထဲက အဓိက ဇာတ်ကောင်တွေနဲ့ အပြင်မှာ တွေ့ဆုံ စကားပြောတဲ့ပုံစံနဲ့ ပြောသွားတာ စိတ်ဝင်စားဖို့ကောင်းပါတယ်။" +
        "ဒီစာအုပ်ထဲမှာ ပြောပြထားတဲ့ စာအုပ် အကြောင်းတွေထဲမှာဆို ဇင်နွယ်ဖတ်ဖူးတာ ဆိုလို့ ဒဂုံတာရာ ရဲ့ “မေ” ၊ ရွှေလင်းယုန် ရဲ့ “သူ”၊ ဆရာ ဇဝန ရဲ့ “ကောလိပ်ကျောင်းသား” တွေကိုပဲ ဖတ်ဖူးပါတယ်。" +
        "ဒါပေမယ့် ဒီစာအုပ်ကိုဖတ်လိုက်တော့ နောက်ကျရင် ကိုယ်ဖတ်ချင်တဲ့၊ မဖတ်ရသေးတဲ့ စာအုပ်တွေရဲ့ idea ကိုရစေတာကတော့ အသေအချာပါပဲ။ ",
      user: "My book reviews - By Zin",
    },
    {
      id: 3,
      bookName: "ကမ္ဘာရန် -မောင်ပေါ်ထွန်",
      review:
        "ဒီစာအုပ်လေးထဲမှာ အဓိကဇာတ်ဆောင်နှစ်ယောက်က မတူညီတဲ့ဘဝအခြေအနေကိုယ်စီနဲ့မွေးလာခဲ့ရတယ်။ ကိန်း (Kane) တစ်ယောက် ချမ်းချမ်းသာသာနဲ့ မွေးလာပေမယ့် ဘယ်အရာပဲလုပ်လုပ် အောက်ခြေက နေ အမြဲကြိုးစားတတ်တယ် 。" +
        "တစ်ဘက်မှာ အေဘယ် (Abel) ကလည်း ဒုက္ခအခက်အခဲတွေ ခါးစည်းခံပြီး ခက်ခက်ခဲခဲနဲ့ ရုန်းကန်လာရတဲ့ အကြောင်းတွေကို ဇာတ်ဆောင်နှစ်ယောက်ရဲ့ ငယ်ဘဝကစပြီး တစ်ခန်းစီ ရေးထားပါတယ်။ " +
        "တစ်ခြား ဝတ္ထုတွေနဲ့ မတူပဲ ဒီဝတ္ထုလေးက စီးပွားရေးလောကပေါ်မှာ အခြေခံထားတာ ဖြစ်လို့ စီးပွားရေးနဲ့ပတ်သက်ပြီး ဖြစ်လေ့ဖြစ်ထ ရှိတတ်တာလေးတွေ၊ နေ့ချင်းညချင်းသန်းကြွယ်ဘဝ ရောက်ရာက နောက်တော့ နေ့ချင်းညချင်း မွဲပြာကျသွားတဲ့ ဖြစ်ရပ်တွေ ဒုတိယကမ္ဘာစစ်အတွင်းက အခြေအနေတွေလည်း ပါတာမလို့ ဖတ်ရတာလေးက ထူးထူးခြားခြား လေးဖြစ်ပါတယ်。 " +
        "ဇာတ်ဆောင်ဆိုလည်း ဇာတ်ဆောင်ရဲ့ ပုံပန်းသဏ္ဌာန်၊ ခံစားချက်၊ အဖြစ်အပျက် တစ်ခုချင်းစီကအစ မျက်လုံးထဲ မြင်ယောင်လာအောင်ပုံဖော်ထားတာမလို့ ရုပ်ရှင်တစ်ကားကို ကြည့်နေရသလိုကို ခံစားမိစေပါတယ် ။ဇာတ်သိမ်းခန်းရောက်တော့လည်း ရင်ထဲမှာတစ်မျိုးခံစားရစေတဲ့ စာအုပ်လေးပါ 。" +
        "ဒီစာအုပ်လေးက ဘာသာပြန်စာအုပ်လေးပါမူရင်းကတော့ စာရေးဆရာကြီး Jeffrey Archer ရေးထားတဲ့ Kane and Abel ဖြစ်ပါတယ် 。 မူရင်းစာအုပ်ထုတ်ဝေတုန်းကလည်း New York Times မှာ No.1 ဖြစ်ခဲ့ပါတယ် 。 နာမည်ကြီး ဝတ္ထုတွေဖြစ်တဲ့ Gone With The Wind တို့ To Kill a Mockingbird တို့နဲ့ ရောင်းအားတူခဲ့ပါတယ်。 " +
        "အခုဆရာကြီးမောင်ပေါ်ထွန်း  ဘာသာပြန်တော့လည်း အရေးအသားကတစ်ကယ် ကျစ်လစ်ပြီး ဖတ်ရအဆင်ပြေပါတယ် 。 Parallel Stories ပုံစံလေးနဲ့ ရေးထားတာပါ။ ညီမသိသလောက်တော့ အခုထိထုတ်ဝေတာ စတုတ္ထ  အကြိမ်ရှိနေပါပြီ 。 တစ်ခါလောက် ဖတ်ကြည့်ဖို့ Recommend ပေးပါတယ် ",
      user: "May T H ",
    },
  ];

  // Toggle "See More" state for each review
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReview = (id) => {
    setExpandedReviews((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the review for the specific ID
    }));
  };

  // State to store the reviews
  const [reviews, setReviews] = useState(UserReviews);

  // Function to handle new comment submission
  const addNewReview = (name, bookName, comment) => {
    const newReview = {
      id: reviews.length + 1, // Increment the ID based on the current reviews length
      bookName: bookName, // Receive the bookName from the Comment component
      review: comment,
      user: name,
    };
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };
// Function to handle deleting a review
  const deleteReview = (id) => {
    const filteredReviews = reviews.filter((review) => review.id !== id);
    setReviews(filteredReviews);
  };

  const ReviewsList = reviews.map((userReview) => (
    <li key={userReview.id}>
      <b>{userReview.bookName}</b> :<br />
      &nbsp;
      {expandedReviews[userReview.id]
        ? userReview.review
        : userReview.review.slice(0, 300) + "..."}{" "}
      {/* Truncate review initially */}
      <button onClick={() => toggleReview(userReview.id)}>
        {expandedReviews[userReview.id] ? "See Less" : "See More"}
      </button>
      <br />
      "from" <b>{userReview.user}</b>
      <hr className="S"></hr>
    </li>
  ));

  return (
    <>
      <ol>{ReviewsList}</ol>
      <Comment onSubmit={addNewReview} />
    </>
  );
}

export default UserReview;


 // <button onClick={() => deleteReview(userReview.id)}>Delete</button> //
 // if I want to delete the user review to put the button under  "from" <b>{userReview.user}</b>//
   //  line 86//