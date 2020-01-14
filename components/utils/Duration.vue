<template>
  <span class="pre">
    <span v-if="duration.year">
      {{duration.year}} year
      <!-- <span v-if="duration.year > 1">s</span> and -->
    </span>
    <span v-if="duration.month">
      {{duration.month}} months
      <!-- <span v-if="duration.month > 1">s</span> -->
    </span>
  </span>
</template>

<script>
export default {
  props: {
    dates: Object
  },
  computed: {
    duration() {
      let dateFrom = new Date(this.dates.to);
      let dateTo = new Date(this.dates.from);
      let diff = Math.abs(dateTo - dateFrom);
      return this.convertMS(diff);
    }
  },
  methods: {
    // todo refacto and move this
    convertMS(milliseconds) {
      var year, month, day, hour, minute, seconds;
      seconds = Math.floor(milliseconds / 1000);
      minute = Math.floor(seconds / 60);
      seconds = seconds % 60;
      hour = Math.floor(minute / 60);
      minute = minute % 60;
      day = Math.floor(hour / 24);
      hour = hour % 24;
      month = Math.round(day / 30.4);
      day = Math.floor(day % 30.4);
      year = Math.floor(month / 12);
      month = month % 12;
      return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        seconds: seconds
      };
    }
  }
};
</script>

<style>
.pre {
  white-space-collapsing: discard;
}
</style>
