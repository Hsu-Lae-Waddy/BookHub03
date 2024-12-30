import React from "react";
import Comment from "../components/comment";
import UserReview from "../components/UserReview";
function Reviews(){
    return(
        <div className="ReviewContainer"> 
           <div> 
           <UserReview></UserReview>
           </div>
          
        </div>
    );
}

export default Reviews