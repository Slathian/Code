import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "30vw",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        Joshua C. Angelo (last name Hunter legally) is a culturally mixed international American 
        programmer with proud roots ranging from The Marshall Islands all the way to 
        Denmark. His experience includes working with Non Profit Orginizations
        like Living Islands, CANN, OMCA, and a myraid of other local NGO's. On a coding standpoint, he has been
        on a journey learn programming languages such as JavaScript, Python, C#, .NET; database languages like 
        SQLite, MongoDB; rendering and engine programs such as Autocad, multiple projects rendered in Blender,
        working with Unity 3 - 4 and currently learning 5; adobe applications for creating visuals 
        utilizing Photoshop, After Effects, UX / UI, and Premiere. 
        <br></br>
        <br></br>
        <br></br>
        Growing up in Denmark and then coming back to America, Joshua was educated in the 
        Lake Oswego Oregon school district, graduating High School from Lakeridge in 2017. From there he 
        worked several laborous jobs such as Technician Assistant / Service Writer, to fast food and Amazon 
        Drop off locations. His education would take him to PCC for general education before finding Bottega
        Tech based in Salt Lake City Utah. From here he would learn the skills needed to create websites in a 
        full stack development program utilizing Node.js, React, Python and SQLite / MongoDB.
        <br></br>
        <br></br>
        <br></br>
        Joshua's hobbies outside of his coding passion include that of handcrafting and gaming. He has taken 4 years of ceramics in highschool and even after highschool enjoys making sets of plates, 
        mugs, vases, and various other utility and beauty peices. He was thrown over 30 lbs of clay into form in his early lifetime so far and still enjoys doing it to this day. His gaming hobbies include 
        different competetive games where he plays them and sometimes streams them on his Twitch account. He enjoys creating videos from his replays and sharing them with friends, as well as making music 
        and rendering 3D landscapes and objects on Blender and learning to work with them on substance painter.
      </div>
    </div>
  );
}
