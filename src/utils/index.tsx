import includes from "lodash/includes";
import filter from "lodash/filter";
import isEmpty from "lodash/isEmpty";
import replace from "lodash/replace";
import { noResults } from "./constants";

const replaceDate = (value: any) => {
  return replace(value.toString(), value.toString().slice(10, 13), "0000");
};

export const filterByDateValue = (object: any, column: any, value: any) => {
  const filteredValue = filter(object, (data: any) => {
    includes(replaceDate(data[column]), replaceDate(value.getTime()));
  });
  return isEmpty(filteredValue) ? noResults : filteredValue;
};

export const filterByNumberValue = (object: any, column: any, value: any) => {
  const filteredValue = filter(object, (data: any) =>
    includes(data[column].toString(), value)
  );
  return isEmpty(filteredValue) ? noResults : filteredValue;
};

export const filterByTextValue = (
  object: any,
  column: any,
  value: any,
  requiredProp?: any
) => {
  if (requiredProp) {
    const requiredField = filter(requiredProp, (data: any) =>
      includes(data["name"].toLowerCase(), value.toLowerCase())
    ) as any;
    if (isEmpty(requiredField)) {
      return noResults;
    }
    const filteredValuewithProp = filter(object, (data: any) => {
      return includes(
        requiredField.map((data: any) => data.id),
        data[column].toString()
      );
    });
    return isEmpty(filteredValuewithProp) ? noResults : filteredValuewithProp;
  }
  const filteredValue = filter(object, (data: any) => {
    return includes(data[column].toLowerCase(), value.toLowerCase());
  });
  return isEmpty(filteredValue) ? noResults : filteredValue;
};
