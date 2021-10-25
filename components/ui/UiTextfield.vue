<template>
  <v-row no-gutters>
    <v-col :cols="cols.length > 1 ? cols[0] : 3">
      <ui-label :dark="dark" :text="label" center class="mt-3"></ui-label>
    </v-col>
    <v-col :cols="cols.length > 1 ? cols[1] : 9">
      <v-text-field
        v-bind="$attrs"
        outlined
        :dark="dark"
        dense
        class="rounded-lg"
        color="primary"
        v-on="$listeners"
      >
      </v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class UiTextfieldComponent extends Vue {
  @Prop({ type: String, default: '' }) label!: string
  @Prop({ type: Boolean, default: false }) readonly dark!: boolean
  @Prop({ type: Array, default: () => [3, 9] }) cols!: object
}
</script>