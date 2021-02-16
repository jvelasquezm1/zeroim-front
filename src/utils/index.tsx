import includes from "lodash/includes";
import filter from "lodash/filter";
import isEmpty from "lodash/isEmpty";
import { noResults } from "./constants";

export const filterByValue = (object: any, column: any, value: any) => {
  const filteredValue = filter(object, (data: any) =>
    includes(data[column].toLowerCase(), value.toLowerCase())
  );
  return isEmpty(filteredValue) ? noResults : filteredValue;
};
