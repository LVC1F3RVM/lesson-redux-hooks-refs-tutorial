import { MINUS, ADD } from "../constants/counts";

export const addNumber = (number) => ({
  type: ADD,
  payload: number,
});

export const minusNumber = (number) => ({
  type: MINUS,
  payload: number,
});
