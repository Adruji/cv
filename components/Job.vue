<template>
  <v-card max-width="960" elevation="0" outlined class="mx-auto">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1 cyan--text accent-3">
          {{ job.role }} •
          <span class="date font-weight-light">
            <Duration
              :dates="{
                from: job.timeEmployed.from,
                to: this.job.timeEmployed.to
              }"
            />
          </span>
        </v-list-item-title>
        <v-list-item-subtitle class="title font-weight-light">{{
          job.mission
        }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="60">
        <v-img :src="job.employer.logo"></v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-text class="text--primary">
      <div class="mb-5"><span v-html="job.details"></span></div>
      <v-chip
        class="mr-2 mt-2"
        :color="task.color"
        outlined
        small
        v-for="task in job.tasks"
        :key="task.name"
        @click.native="$emit('filterSelect', { selector: 'task', value: task })"
      >
        <v-icon left>{{ task.icon }}</v-icon>
        {{ task.name }}
      </v-chip>
    </v-card-text>
    <v-card-actions>
      <v-expansion-panels accordion multiple :value="[0, 1]">
        <StackPanel :stack="job.stack.front" name="Front" />
        <StackPanel :stack="job.stack.back" name="Back, Databases & Hosting" />
      </v-expansion-panels>
    </v-card-actions>
  </v-card>
</template>

<script>
import TechChip from "~/components/TechChip.vue";
import Duration from "~/components/utils/Duration.vue";
import StackPanel from "~/components/StackPanel.vue";

export default {
  props: {
    job: Object
  },
  components: {
    TechChip,
    Duration,
    StackPanel
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
