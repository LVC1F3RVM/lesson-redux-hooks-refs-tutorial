import { MINUS, ADD, DIVIDE, CLEAR } from "../constants/counts";

export const addNumber = (number) => ({
  type: ADD,
  payload: number,
});

export const minusNumber = (number) => ({
  type: MINUS,
  payload: number,
});

export const divideNumber = (number) => ({
  type: DIVIDE,
  payload: number,
});

export const clearNumber = (number) => ({
  type: CLEAR,
  payload: number,
});