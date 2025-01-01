import React from "react";
import UserReview from "../components/UserReview";
function Reviews(){
    return(
      <>
           <div className="S"><h2>"Here, you'll find some insightful book reviews that you might enjoy reading."</h2></div>
           <UserReview className="bodyPage"></UserReview>
           <div className="S"></div>
      </>
    );
}

export default Reviews