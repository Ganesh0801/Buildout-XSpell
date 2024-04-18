import React,{ useState }  from 'react';


const Spell = () => {
   const[text,setText]=useState("");
   const[refer,setRefer]=useState("")

   const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const handleChange = (e)=>{
     let inputText = e.target.value;
      setText(inputText)

      let splitWords = inputText.split(" ");

      let correction = splitWords.map((word)=>{
        const correctWord = customDictionary[word.toLowerCase()];
        return correctWord || word
      })

      //const correctText = correction.join(" ");

      const firstCorrection = correction.find(
        (word, index) => word !== splitWords[index]
      );
      setRefer(firstCorrection || "");
  }


  return (
    <>
    <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
          {refer && (
        <p>
          Did you mean: <strong>{refer}</strong>?
        </p>
      )}
       
      </div>
    </>
  )
}

export default Spell