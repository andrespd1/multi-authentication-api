export const validateEmail = (email: string) => {
  const emailPatter = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!emailPatter.test(email)) {
    throw new Error("The email isn't valid");
  }
};
