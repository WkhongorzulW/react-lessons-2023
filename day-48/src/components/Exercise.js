import { useEffect, useState } from "react";

export default function Exercises() {
  const array = [1, 2, 3, 4, 1, 5, 7, 3, 2, 1, 9, 9, 9, 0, 8, 6];

  function filterNumber(arr, number) {
    return arr.filter((a) => a === number);
  }

  function findNumberCount(arr) {
    let newArr = [];
    for (let i = 0; i < 10; i++) {
      const result = filterNumber(arr, i);
      const resultObject = {
        i: result.length,
      };
      newArr = [...newArr, resultObject];
    }
    return newArr;
  }

  const numbers = findNumberCount(array);

  return (
    <div>
      <h1>Exercises</h1>
      {numbers &&
        numbers.map((n, index) => {
          return (
            <div key={index}>
              <p>
                {index} ___ {n.i}
              </p>
            </div>
          );
        })}
    </div>
  );
}
