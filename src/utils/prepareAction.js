import { nanoid } from "nanoid";
export default function prepAddTask(text){
    return {
      payload: {
        text,
        id: nanoid(),
        completed: false,
      },
    };
  }