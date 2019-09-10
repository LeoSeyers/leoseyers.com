export default () => {
  const setIsKeyboardUser = isKeyboard => {
    const { body } = document;
    if (isKeyboard) {
      body.classList.contains("keyboard-user") ||
        body.classList.add("keyboard-user");
    } else {
      body.classList.remove("keyboard-user");
    }
  };

  document.addEventListener("keydown", e => {
    if (e.key === "Tab") {
      setIsKeyboardUser(true);
    }
  });
  document.addEventListener("click", e => {
    // Pressing ENTER on buttons triggers a click event with coordinates to 0
    setIsKeyboardUser(!e.screenX && !e.screenY);
  });

  document.addEventListener("mousedown", e => {
    setIsKeyboardUser(false);
  });
};
