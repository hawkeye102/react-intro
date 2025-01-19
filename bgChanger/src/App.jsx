import { useState } from 'react';

function App() {
  // State to store the current background color
  const [color, setColor] = useState("tomato");

  console.log("working");

  return (
    <div
      style={{
        width: '100%',
        height: '100vh', // Ensure it covers the full viewport height
        backgroundColor: color, // Apply the dynamic background color
        border: '2px solid black',
      }}
    >
      <p style={{ textAlign: 'center', color: 'white', paddingTop: '20px' }}>
        Test Content
      </p>

      {/* Buttons to change the background color */}
      <button
        onClick={() => setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "red" }}
      >
        Red
      </button>

      <button
        onClick={() => setColor("yellow")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "yellow" }}
      >
        Yellow
      </button>

      <button
        onClick={() => setColor("cyan")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "cyan" }}
      >
        Cyan
      </button>

      <button
        onClick={() => setColor("pink")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "cyan" }}
      >
        pink
      </button><button
        onClick={() => setColor("olive")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "cyan" }}
      >
        olive
      </button><button
        onClick={() => setColor("blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "cyan" }}
      >
        blue
      </button>
    </div>
  );
}

export default App;
