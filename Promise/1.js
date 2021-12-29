Promise.resolve(console.log(0))
  .then(() => {
    console.log(1);
    Promise.resolve(console.log(5))
      .then(() => {
        console.log(3);
      })
      .then(() => {
        console.log(4);
      })
      .then(() => {
        Promise.resolve(console.log(9))
          .then(() => {
            console.log(8);
          })
          .then(() => {
            console.log(11);
          })
          .then(() => {
            console.log(12);
          });
      }).then(() => {
        console.log(555);
      })
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(7);
  })
  .then(() => {
    console.log(10);
  })
  .then(() => {
    console.log(13);
  });
