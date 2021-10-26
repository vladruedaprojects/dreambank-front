<template>
  <v-row no-gutters>
    <v-col :cols="cols.length > 1 ? cols[0] : 3">
      <ui-label :dark="dark" :text="label" center class="mt-3"></ui-label>
    </v-col>
    <v-col :cols="cols.length > 1 ? cols[1] : 9">
      <v-select
        v-bind="$attrs"
        outlined
        dark="dark"
        :items="['uno', 'dos']"
        dense
        class="rounded-lg"
        item-color="white"
        color="primary"
        :menu-props="{ offsetY: true }"
        v-on="$listeners"
      >
      </v-select>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class UiSelectComponent extends Vue {
  @Prop({ type: String, default: '' }) label!: string
  @Prop({ type: Boolean, default: false }) readonly dark!: boolean
  @Prop({ type: Array, default: () => [3, 9] }) cols!: object
}
</script>
<style lang="scss" scoped>
  .theme--light.v-application{
    background-color: #436199;
  }
  .theme--light.v-list{
    background: #436199;
  }
  .v-list-item__content{
    color: white;
  }
  .theme--light.v-list-item:hover:before {
      opacity: 0.14;
  }
</style>