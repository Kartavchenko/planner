import { nanoid } from "nanoid";

export const saveEvent = (key: string, value: object) =>
  new Promise((res) =>
    setTimeout(() => {
      const existingArray = JSON.parse(localStorage.getItem(key) || "[]");

      existingArray.push({ ...value, id: nanoid(6) });

      res(localStorage.setItem(key, JSON.stringify(existingArray)));
    }, 0)
  );

export const saveEditedEvent = (key: string, value: object) =>
  new Promise((res) =>
    setTimeout(() => {
      const existingArray = JSON.parse(localStorage.getItem(key) || "[]");

      existingArray.push({ ...value });

      res(localStorage.setItem(key, JSON.stringify(existingArray)));
    }, 1)
  );

export const removeEvent = (key: string, id: string) =>
  new Promise((res) =>
    setTimeout(() => {
      const existingArray = JSON.parse(localStorage.getItem(key) || "[]");

      const remove = existingArray.filter(
        (item: { id: string }) => item.id !== id
      );

      res(localStorage.setItem(key, JSON.stringify(remove)));
    }, 1)
  );

export const removeStorageItem = (key: string) =>
  new Promise((res) =>
    setTimeout(() => {
      res(localStorage.removeItem(key));
    }, 1)
  );

export const editEvent = (key: string, editKey: string, id: string) =>
  new Promise((res) =>
    setTimeout(() => {
      const existingArray = JSON.parse(localStorage.getItem(key) || "[]");

      const edit = existingArray.find((item: { id: string }) => item.id === id);

      res(localStorage.setItem(editKey, JSON.stringify(edit)));
    }, 1)
  );

export const getEvents = (key: string) =>
  new Promise((res) =>
    setTimeout(() => {
      const getItems = localStorage.getItem(key);

      res(getItems === null ? undefined : JSON.parse(getItems));
    }, 1)
  );
