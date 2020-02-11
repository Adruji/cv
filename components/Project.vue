<template>
  <v-card max-width="960" elevation="0" outlined class="mx-auto">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline headline mb-2">
          {{ project.timeEmployed.from.slice(0, 4) }}
        </div>
        <v-list-item-title class="mb-1 headline">
          {{ project.mission }}
        </v-list-item-title>
        <v-list-item-subtitle class="title font-weight-light">{{
          project.role
        }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="60">
        <v-icon>mdi-{{ project.status }}</v-icon>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-text class="text--primary">
      <div class="mb-5"><span v-html="project.details"></span></div>
      <v-chip
        class="mr-2 mt-2"
        :color="task.color"
        outlined
        small
        v-for="task in project.tasks"
        :key="task.name"
      >
        <v-icon left>{{ task.icon }}</v-icon>
        {{ task.name }}
      </v-chip>
    </v-card-text>
    <v-card-actions>
      <v-expansion-panels accordion multiple>
        <StackPanel :stack="project.stack.front" name="Front" />
        <StackPanel :stack="project.stack.back" name="Back" />
      </v-expansion-panels>
    </v-card-actions>
  </v-card>
</template>

<script>
import StackPanel from "~/components/StackPanel.vue";

export default {
  props: {
    project: Object
  },
  components: {
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
  white-space: normal !important;
}
</style>
