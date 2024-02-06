import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>;

  if(isEditing) {
    playerName = <input type="text" required />
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}

// export default function Player({ name, symbol }) {
//     const [buttonState, setButtonState] = useState(true);
//     const [nameState, setNameState] = useState('');

//     function btnState() {
//       setButtonState(!buttonState);
//     }

//     function updateName() {
//       setNameState()
//     }

//     return (
//       <li>
//         <span className="player">
//           {buttonState ? (<span className="player-name">{name}</span>) : (<input onSubmit={updateName}></input>)}
//           <span className="player-symbol">{symbol}</span>
//         </span>
//         {buttonState ? (
//           <button onClick={btnState}>Edit</button>
//         ) : (
//           <button onClick={updateName}>Save</button>
//         )}
//       </li>
//     );
//   }

// import { useState } from "react";

// export default function Player({ name, symbol }) {
//   const [buttonState, setButtonState] = useState(true);
//   const [nameState, setNameState] = useState('');

//   function btnState() {
//     setButtonState(!buttonState);
//   }

//   function updateName() {
//     setNameState()
//   }

//   return (
//     <li>
//       <span className="player">
//         {buttonState ? (<span className="player-name">{name}</span>) : (<input onSubmit={updateName}></input>)}
//         <span className="player-symbol">{symbol}</span>
//       </span>
//       {buttonState ? (
//         <button onClick={btnState}>Edit</button>
//       ) : (
//         <button onClick={updateName}>Save</button>
//       )}
//     </li>
//   );
// }
