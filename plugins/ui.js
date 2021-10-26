/* eslint-disable vue/component-definition-name-casing */
import Vue from 'vue'

import UiCard from '@/components/ui/UiCard.vue'
import UiButton from '@/components/ui/UiButton.vue'
import UiLabel from '@/components/ui/UiLabel.vue'
import UiTextfield from '@/components/ui/UiTextfield.vue'

import CardUnderConstruction from '~/components/ui/cardUnderConstruction.vue'

Vue.component('ui-card', UiCard)
Vue.component('ui-button', UiButton)
Vue.component('ui-label', UiLabel)
Vue.component('ui-textfield', UiTextfield)
Vue.component('card-under-construction', CardUnderConstruction)
