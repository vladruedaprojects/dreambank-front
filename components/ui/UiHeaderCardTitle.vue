<template>
  <v-container class="pb-0">
    <v-row no-gutters align="center" justify="center">
      <v-col cols="9">
        <div class="body-1 font-weight-bold text-center">
          <slot name="header">
            {{ header }}
          </slot>
        </div>
        <div class="under-request" />
        <h4 class="text-h4 font-weight-bold text-center">
          <slot name="title">
            {{ title }}
          </slot>
        </h4>
        <p class="mt-2 request-info text-center">
          <slot name="text">
            {{ text }}
          </slot>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class UiHeaderCardTitle extends Vue {
  @Prop({ type: String, default: '' }) readonly header !: string
  @Prop({ type: String, default: '' }) readonly title !: string
  @Prop({ type: String, default: '' }) readonly text !: string
}
</script>

<style lang="scss" scoped>
  .under-request {
    border-bottom: 2px solid $success;
    width: 70px;
    margin: 0 auto 12px;
  }
  .request-info {
    font-size: 11px;
    line-height: 14px;
  }
</style>
