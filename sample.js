const life = new Promise((resolve, reject) => {
  Math.random() > 0.5
    ? resolve("Dream fulfilled ✨")
    : reject("Plan rejected 💔");
});

life
  .then(msg => console.log("Then:", msg))
  .catch(err => console.log("Catch:", err));