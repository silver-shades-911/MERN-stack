import { useEffect } from "react";
import { useAlert } from "../context/alertContext.jsx";

const Alert = () => {
  //  using our custom hook useAlert
  let { alert, setAlert } = useAlert();

  /*
! Dont Mix rendering Logic & sideEffect

- setTimeout(...) is a side effect, not JSX — it runs during render, which is incorrect.
- That whole expression returns the result of setTimeout(...), which is a numeric timeout ID — that’s why you’re seeing random numbers on screen.
- You’re mixing rendering logic and side effects, which React doesn't allow in this way.

*/
  // return (
  //   <>
  //     {alert.message !== "" && (
  //       <div className={`alert alert-success`} role="alert">
  //         {alert.message}
  //       </div>
  //     ) &&
  //      setTimeout(() => {
  //       setAlert(
  //         {
  //           type: "",
  //           message: ""
  //         }
  //       )
  //      }, 1000)

  //     }
  //   </>
  // );

  //* Correct Logic

  // using useEffect to invoke setTimeout to disappear Alert after showed up
  useEffect(
    () => {
      if (alert.message !== "") {  // check when message is empty , bcz we do empty msg after showed up
        let TimeoutID = setTimeout(
          () => {
           setAlert({
            type: "",
            message: ""
           });
          },
          2000
        );

        return (
          () => ( clearTimeout(TimeoutID) ) //cleanup after starting new SetTimeout , so no previous timeouts
        );
      };

    }, [alert, setAlert] // depended on change in alert 
  )

  // write direct alert bootstrap synatx - Pure Rendering Logic 
  return (
    <>
      {alert.message && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
        </div>
      )}
    </>
  );
};

export default Alert;
