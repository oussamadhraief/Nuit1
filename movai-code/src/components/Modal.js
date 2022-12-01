import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Modal({show, onClose}) {
    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose()
      };

      const modalContent = show ? 
      <>
       <div className="top-0 right-0 left-0 bottom-0 fixed bg-[rgba(0,0,0,.7)] z-[9999]" onClick={(e) => handleCloseClick(e)}>
           
       </div>
      <div className="h-fit w-80 py-3 px-5 bg-white shadow-[0px_3px_26px_5px_rgba(111,0,111,0.6)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed z-[9999] grid">

            <p>The human immunodeficiency viruses are two species of Lentivirus that infect humans. Over time, they cause acquired immunodeficiency syndrome, a condition in which progressive failure of the immune system allows life-threatening opportunistic infections and cancers to thrive.</p>

            <button className="font-medium text-sm mt-10" onClick={(e) => handleCloseClick(e)}>View more</button>
        
      </div>
      </>
      : null
    

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent, 
            document.getElementById("modal-root")
        );
      } else {
        return null;
      }    
  
}

export default Modal