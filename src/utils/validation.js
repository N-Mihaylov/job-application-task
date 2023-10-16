export const validateCredentials = (placeholder, value, criteria) => {
  if (!value) {
    return;
  }

  if (criteria?.validEmail) {
    // TODO: fix regexes/validation | copy pasted regex
    const res = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
      "g"
    ).exec(value);

    if (res === null) {
      return `${placeholder} should be a valid email.`;
    }
  }

  if (criteria?.minLength) {
    if (value.length < criteria.minLength) {
      return `${placeholder} should be at least ${criteria.minLength} long.`;
    }
  }

  if (criteria?.maxLength) {
    if (value.length > criteria.maxLength) {
      return `${placeholder} shouldn't be longer than ${criteria.maxLength}.`;
    }
  }

  if (criteria?.letterAndDigitIncluded) {
    const res = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])", "g").exec(value);
    if (res === null) {
      return `${placeholder} should contain a digit and a letter.`;
    }
  }
};
