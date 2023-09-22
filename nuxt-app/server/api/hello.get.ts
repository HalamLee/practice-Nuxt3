// useFetch
// export default defineEventHandler((event) => {
//   console.log('event', event);
//   return {
//     hello: 'world',
//   };
// });

// useLazyFetch
// export default defineEventHandler(async () => {
//   return new Promise<any>((resolve) => {
//     setTimeout(() => {
//       resolve({
//         hello: 'world',
//       });
//     }, 2000);
//   });
// });

// useAsyncData
let productCount = 0;

export default async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(productCount++);
    }, 2000);
  });
  return {
    productCount,
  };
};
