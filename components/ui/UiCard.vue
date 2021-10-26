<template>
  <v-card
    v-bind="$attrs"
    flat
    class="card-shadow"
    v-on="$listeners"
  >
    <slot name="default" />
  </v-card>
</template>

<style lang="scss" scoped>
  .card-shadow {
    border-radius: 18px !important;
    background: #ffffff !important;
    box-shadow:  6px 6px 30px #dedede, // 5 5 23
              -6px -6px 30px #ffffff !important;
  }
</style>