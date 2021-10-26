<template>
  <v-data-table
    v-model="selected"
    :items="items"
    :headers="headers"
    item-key="_id"
    hide-default-footer
    single-select
    calculate-widths
    multi-sort
  >
    <template #top>
      <div class="body-2 px-8 pt-2 pb-3 header-border primary--text font-weight-bold">
        {{ title }}
      </div>
    </template>
    <template #item="{ headers, item }">
      <tr
        class="table-row"
        :class="selectedItem._id === item._id ? 'item-selected' : ''"
        @click.stop="select(item)"
      >
        <template v-for="(header, i) in headers">
          <td
            v-if="header.type === 'icon'"
            :key="i"
            :align="header.align"
            :class="selectedItem._id === item._id ? 'item-selected' : ''"
          >
            <v-icon small color="grey">
              {{ !header.subValue ? item[header.value] : item[header.value][header.subValue] }}
            </v-icon>
          </td>
          <td v-else :key="i" :align="header.align">
            {{ !header.subValue ? item[header.value] : item[header.value][header.subValue] }}
          </td>
        </template>
      </tr>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class UiTable extends Vue {
  @Prop({ type: String, default: '' }) title!: string
  @Prop({ type: Array, default: () => [] }) items!: object
  @Prop({ type: Array, default: () => [] }) headers!: object

  selected: object = []
  selectedItem: object = {}

  select (item: any): void  {
    this.selectedItem = item
    this.$emit('selected', item)
  }

}
</script>

<style lang="scss" scoped>
  .item-selected {
    border-left: 2px solid $success !important;
    background: linear-gradient(90deg, rgba(224, 224, 224, 0.5) 5%, rgba(224, 224, 224, 0.2) 94%);
  }
  .header-border {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
</style>
