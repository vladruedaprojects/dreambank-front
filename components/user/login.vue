<template>
  <v-card flat width="500">
    <v-card-title class="headline primary--text text-center">
      <v-row no-gutters>
        <v-col cols="3"></v-col>
        <v-col cols="9">
          Login
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <ui-textfield
        label="Login"
        hide-details
      ></ui-textfield>
      <ui-textfield
        label="Password"
        class="mt-2"
      ></ui-textfield>
        <v-row no-gutters>
        <v-col cols="3"></v-col>
        <v-col cols="9">
          <ui-button>
            Login
          </ui-button>
        </v-col>
        </v-row>
    </v-card-text>
    <v-card-actions>
      
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
export default {
  layout: 'center',
  data () {
    return {
      buttonLoginDisabled: true
    }
  }
}
</script>
