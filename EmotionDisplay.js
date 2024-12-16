import React,{ useState} from "react";

function EmotionDisplay(){
    const [text, setText] = useState("");

    //Function to handle the input change
    const handleChange =() => {
        setText(Event.target.value);
};

//Function to determine which image to display
const getImage =() => {
    switch (text.toLowerCase()) {
        case "happy":
            return "https://via.placeholder.com/100/FFFF00?text=Happy+Face";  // Replace with your happy face image URL
            
        case "like":
            return "https://via.placeholder.com/100/00FF00?text=Like+Icon";  // Replace with your like
        
        case "sad": "https://via.placeholder.com/100/FF0000?text=Sad+Face";  // Replace with your sad face
             
        default:
            return null; // No image for undefined cases
    }
};

const ImageSrc = getImage(); //Get image source once

return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Emotion Display</h1>
      <input
        type="text"
        placeholder="Type Happy, Like, or Sad"
        onChange={handleChange}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <div style={{ marginTop: "20px" }}>
        {imageSrc ? (
          <img src={imageSrc} alt={text} style={{ width: "100px", height: "100px" }} />
          ) : (
          <p>Type "Happy", "Like", or "Sad" to see an image.</p>
         )}
      </div>
    </div>
  );
}

export default EmotionDisplay;