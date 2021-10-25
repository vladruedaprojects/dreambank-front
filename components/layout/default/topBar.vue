<template>
  <v-app-bar
    fixed
    app
    flat
    color="transparent"
    class="pt-1"
    height="70"
  >
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.smAndDown"
      @click.stop="drawer = !drawer"
    />
    <v-row align="end" class="mr-12">
      <v-spacer />
      <v-btn
        icon
        small
      >
        <v-badge
          dot
          bordered
          overlap
          offset-x="11"
          offset-y="11"
          color="primary lighten-2"
        >
          <v-icon small>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn
        icon
        small
      >
        <v-badge
          dot
          bordered
          overlap
          offset-x="11"
          offset-y="11"
          color="primary lighten-2"
        >
          <v-icon small>mdi-chat</v-icon>
        </v-badge>
      </v-btn>

      <v-avatar
        color="primary lighten-1"
        size="30"
        class="ml-4"
      >
        <v-img
          src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
        ></v-img>
      </v-avatar>
      <div class="font-weight-regular body-2 ml-2 mb-1 primary--text">Victor Warren</div>
      <v-icon class="mb-1 ml-2">mdi-menu-down</v-icon>
    </v-row>
  </v-app-bar>
</template>
