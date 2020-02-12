<template>
  <v-card max-width="800" elevation="0" outlined class="mx-auto">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline headline mb-2">
          <Duration
            :dates="{
              from: job.timeEmployed.from,
              to: this.job.timeEmployed.to
            }"
          />
        </div>
        <v-list-item-title class="headline mb-1">
          {{ job.role }}
        </v-list-item-title>
        <v-list-item-subtitle class="title font-weight-light">{{
          job.mission
        }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="60">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-img :src="job.employer.logo" v-on="on"></v-img>
          </template>
          <span>{{ job.employer.name }}</span>
        </v-tooltip>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-text class="text--primary">
      <div class="mb-5"><span v-html="job.details"></span></div>
      <v-chip
        class="mr-2 mt-2"
        :color="task.color"
        small
        outlined
        v-for="task in job.tasks"
        :key="task.name"
      >
        <v-icon left>{{ task.icon }}</v-icon>
        {{ task.name }}
      </v-chip>
    </v-card-text>
    <v-card-actions>
      <v-expansion-panels accordion multiple>
        <StackPanel :stack="job.stack.front" name="Front" />
        <StackPanel :stack="job.stack.back" name="Back" />
      </v-expansion-panels>
    </v-card-actions>
  </v-card>
</template>

<script>
import Duration from "~/components/utils/Duration.vue";
import StackPanel from "~/components/StackPanel.vue";

export default {
  props: {
    job: Object
  },
  components: {
    Duration,
    StackPanel
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.headline {
  color: #f87060;
}
</style>
