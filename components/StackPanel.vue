<template>
  <v-expansion-panel v-if="stack">
    <v-expansion-panel-header v-slot="{ open }">
      <v-row no-gutters>
        <v-col cols="4">{{ name }}</v-col>
        <v-col cols="8" class="text--secondary">
          <v-fade-transition leave-absolute>
            <span v-if="!open">
              <span v-for="(tech, index) in stack" :key="tech + 'sp'">
                <span v-if="index !== 0">•</span>
                {{ tech }}
              </span>
            </span>
          </v-fade-transition>
        </v-col>
      </v-row>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <div class="d-flex flex-row">
        <TechChip
          v-for="tech in stack"
          :key="tech"
          :tech="tech"
          class="d-inline-flex"
          @click.native="
            $emit('filterSelect', { selector: 'tech', value: tech })
          "
        />
      </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import TechChip from "~/components/TechChip.vue";

export default {
  props: {
    stack: Array,
    name: String
  },
  components: {
    TechChip
  }
};
</script>

<style scoped></style>
