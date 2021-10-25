<template>
  <div
      :class="`${classText} mx-2 ${center && 'text-center '} ${dark && 'white--text '}`"
      width="100%"
  >
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class UiLabelComponent extends Vue {
    @Prop({ type: String, default: '' }) readonly text!: string
    @Prop({ type: Boolean, default: false }) readonly dark!: boolean
    @Prop({ type: String, default: 'primary--text' }) readonly classText!: string
    @Prop({ type: Boolean, default: false }) readonly center!: boolean
}
</script>
