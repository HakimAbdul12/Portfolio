export default function Wave() {
  return (
    <div className="">
      {/* <div style={{backgroundColor:"red",height:"400px", width:"100%"}}>
        <svg style={{backgroundColor:"#D9EEE1", width:"100%", height:"120px", viewBox:"0 0 100 100", preserveAspectRatio:"none"}}>
            <path id="wavepath1" d="M0,100  L0,20 C35,100 35,0 100,100z" fill="#282A35"></path>
            <path id="wavepath2" d="M0,100  L0,40 C35,150 60,0 100,100z" fill="orange"></path>
            <path id="wavepath3" d="M100,100 L100,40 C35,120 50,0 0,100z" fill="violet"></path>
          </svg>
        </div> */}

      <div style={{ backgroundColor: "transparent", height: "auto", width: "100%" }}>
        <svg
          style={{ backgroundColor: "transparent", width: "100%", height: "200px" }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            id="wavepath1"
            d="M0,100 L0,20 C35,100 35,0 100,100z"
            fill="#7c3aed"
          ></path>
          <path
            id="wavepath2"
            d="M0,100 L0,40 C35,150 60,0 100,100z"
            fill="#7c3aed"
          ></path>
          <path
            id="wavepath3"
            d="M100,100 L100,40 C35,120 50,0 0,100z"
            fill="#7c3aed"
          ></path>
        </svg>
      </div>
    </div>
  );
}
