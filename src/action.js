export const CHANGE_MAME = "CHANGE_MAME";
export const SELECT_FOOD = "SELECT_FOOD";
export const SELECT_NOON = "SELECT_NOON";
export const REMOVE_FOOD = "REMOVE_FOOD";

const parts = [
  { id: 1, name: "گوشت", color: "#984848" },
  { id: 2, name: "سبزیجات", color: "#37a978" },
  { id: 3, name: "پنیر", color: "#904cea" },
  { id: 4, name: "نان", color: "#492828" },
  { id: 5, name: "سس", color: "#eabc4c" }
];

export const selectedPart = num => {
  const part = parts[num].name;
  return {
    type: CHANGE_MAME,
    payload: part
  };
};

export const selectedFood = food => {
  console.log("new food", food);

  const part = food.parentId;
  if (part === "3") {
    return {
      type: SELECT_NOON,
      payload: food
    };
  }
  return {
    type: SELECT_FOOD,
    payload: food
  };
};

export const removeFood = foodId => {
  return {
    type: REMOVE_FOOD,
    payload: foodId
  };
};
