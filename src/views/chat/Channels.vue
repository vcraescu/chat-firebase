<template>
  <div class="channels">
    <h5>
      <b-link :to="{ name: 'chat' }">Channels</b-link>
    </h5>
    <div class="channels-list border rounded overflow-auto">
      <ul class="list-unstyled">
        <li
          class="p-2"
          v-for="item in items"
          :key="item.id"
          :class="{ active: activeChannelId === item.id }"
          @click="onSelect(item)"
        >
          {{ item.name }}
          <span v-if="item.owner === currentUser.email">(default)</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Channels",
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true
    },
    active: {
      type: Object,
      default: null,
      required: false
    }
  },
  computed: {
    ...mapGetters(["currentUser"]),
    activeChannelId() {
      if (!this.active) {
        return null;
      }

      return this.active.id;
    }
  },
  methods: {
    onSelect(item) {
      this.$emit("input", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.channels-list {
  height: 500px;

  ul {
    li {
      cursor: pointer;
      &:hover {
        background-color: $primary;
        color: $white;
      }
      &.active {
        font-weight: 700;
      }
    }
  }
}
</style>
