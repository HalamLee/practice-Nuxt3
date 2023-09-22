// useFetch
// export default defineEventHandler((event) => {
//   console.log('event', event);
//   return {
//     hello: 'world',
//   };
// });

// useLazyFetch
export default defineEventHandler(async () => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve({
        hello: 'world',
      });
    }, 2000);
  });
});
