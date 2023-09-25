<template>
  <div>
    <slot name="header" />
    <div>
      <img
        src="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png"
        alt="" />
    </div>
    <slot name="redirectEl" />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  width: 10rem;
}
</style>
