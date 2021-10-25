<template>
  <v-app>
    <v-sheet class="sheet" height="100px" width="100vw">
      <v-row align="center" justify="center">
        <v-card flat width="800">
          <v-toolbar flat height="90">
            <img
              :src="require('@/assets/images/dreambank.png')"
              height="40"
              contain
            />
            <div class="ml-3 title primary--text">
              Dream Bank
            </div>
          </v-toolbar>
        </v-card>
      </v-row>
    </v-sheet>

    <v-main>
      <v-sheet class="sheet" height="100%" width="100vw">
        <v-row align="center" justify="center">
          <v-sheet class="sheet" max-width="800">
            <nuxt />
          </v-sheet>
        </v-row>
      </v-sheet>
    </v-main>
  </v-app>
</template>
