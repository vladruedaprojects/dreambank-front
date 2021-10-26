<template>
  <v-toolbar flat dense class="transparent">
    <img
      :src="require('@/assets/images/dreambank.png')"
      height="40"
      contain
    />
    <div class="ml-3 title primary--text">
      Dream Bank
    </div>
    <v-spacer></v-spacer>
    <slot name="actions" />
  </v-toolbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class TopLogo extends Vue {
  @Prop({ type: Boolean, default: false }) readonly dark!: boolean
}
</script>