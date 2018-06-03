export const RequestError = (error) => {
  if (error.response) {
  } else if (error.request) {
      console.log(error.request);
  } else {
      console.log('Error', error.message);
  }
  console.log(error.config);
}
