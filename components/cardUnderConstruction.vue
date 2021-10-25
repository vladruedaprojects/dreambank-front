<template>
  <v-card
    class="mx-auto mt-10"
    color="success"
    max-width="400"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-wrench
      </v-icon>
      <span class="text-h6 font-weight-light">
        <slot />
      </span>
    </v-card-title>

    <v-card-text class="text-h5 font-weight-bold text-center">
      Page under construction. Come back soon, it's almost ready!.
    </v-card-text>

  </v-card>
</template>
