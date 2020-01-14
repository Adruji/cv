<template>
  <v-card max-width="960" elevation="0" outlined class="mx-auto">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1 cyan--text accent-3">
          {{job.role}} •
          <span class="date font-weight-light">
            <Duration :dates="{from: job.timeEmployed.from, to: this.job.timeEmployed.to}"/>
          </span>
        </v-list-item-title>
        <v-list-item-subtitle class="title font-weight-light">{{job.mission}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="60">
        <v-img :src="job.employer.logo"></v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-text class="text--primary">
      <div class="mb-5">{{job.details}}</div>
      <v-chip
        class="mr-2 mt-2"
        :color="task.color"
        outlined
        small
        v-for="task in job.tasks"
        :key="task.name"
        @click.native="$emit('filterSelect', {selector: 'task', value: task});"
      >
        <v-icon left>{{task.icon}}</v-icon>
        {{task.name}}
      </v-chip>
    </v-card-text>
    <v-card-actions>
      <v-expansion-panels accordion multiple :value="[0,1]">
        <v-expansion-panel v-if="job.stack.front">
          <v-expansion-panel-header v-slot="{ open }">
            <v-row no-gutters>
              <v-col cols="4">Front</v-col>
              <v-col cols="8" class="text--secondary">
                <v-fade-transition leave-absolute>
                  <span v-if="!open">
                    <span v-for="(techFront, index) in job.stack.front" :key="techFront+'sp'">
                      <span v-if="index !== 0">•</span>
                      {{techFront}}
                    </span>
                  </span>
                </v-fade-transition>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <TechChip
              v-for="techFront in job.stack.front"
              :key="techFront"
              :tech="techFront"
              class="d-inline-flex"
              @click.native="$emit('filterSelect', {selector: 'stack.front', value: techFront});"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel v-if="job.stack.back">
          <v-expansion-panel-header v-slot="{ open }">
            <v-row no-gutters>
              <v-col cols="4">Back & Data</v-col>
              <v-col cols="8" class="text--secondary">
                <v-fade-transition leave-absolute>
                  <span v-if="!open">
                    <span v-for="(techBack, index) in job.stack.back" :key="techBack+'sp'">
                      <span v-if="index !== 0">•</span>
                      {{techBack}}
                    </span>
                  </span>
                </v-fade-transition>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <TechChip
              v-for="techBack in job.stack.back"
              :key="techBack"
              :tech="techBack"
              class="d-inline-flex"
              @click.native="$emit('filterSelect', {selector: 'stack.back', value: techFront});"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-actions>
  </v-card>
</template>

<script>
import TechChip from "~/components/TechChip.vue";
import Duration from "~/components/utils/Duration.vue";

export default {
  props: {
    job: Object
  },
  components: {
    TechChip,
    Duration
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.date {
  font-style: italic;
}
</style>
