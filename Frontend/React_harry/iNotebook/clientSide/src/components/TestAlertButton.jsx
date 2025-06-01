import { useAlert } from "../context/alertContext";

export function TestAlertButton() {
  const { setAlert } = useAlert();

  return (
    <button onClick={() => setAlert({ type: "success", message: "It works!" })}>
      Show Test Alert
    </button>
  );
};
