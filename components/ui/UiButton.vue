<template>
  <v-btn
    v-bind="$attrs"
    rounded
    :block="block"
    :text="!dark"
    :outlined="dark"
    :dark="!disabled || dark"
    :color="color || dark ? 'success' : ''"
    :class="classButton"
    class="title text-capitalize"
    :disabled="disabled"
    v-on="$listeners"
  >
    <span :class="dark && 'white--text'">
      <slot>
      </slot>
    </span>
  </v-btn>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class UiButtonComponent extends Vue {
  @Prop({ type: Boolean, default: false }) readonly dark!: boolean
  @Prop({ type: Boolean, default: false }) readonly disabled!: boolean
  @Prop({ type: Boolean, default: true }) readonly block!: boolean
  @Prop({ type: String, default: '' }) readonly color!: string

  get classButton (): string {
    let classBt = ''

    if (this.disabled) classBt += 'disabledColor '
    if (!this.dark) classBt += 'primary '
    else classBt += 'primary--text '

    return classBt
  }
}
</script>