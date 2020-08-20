import { MINUS, ADD, DIVISION } from "../constants/counts";

export const addNumber = (number) => ({
  type: ADD,
  payload: number,
});

export const minusNumber = (number) => ({
  type: MINUS,
  payload: number,
});

export const divisionNumber = (number) => ({
  type: DIVISION,
  payload: number,
});