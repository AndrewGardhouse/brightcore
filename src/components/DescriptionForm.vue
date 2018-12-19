<template>
  <div class="description-column">
    <form class="edit-description"
          v-if="showEditForm"
          @submit.prevent="submitForm">
      <textarea name="description"
                v-model="editDescrpition"
                v-if="showEditForm"></textarea>
      <div class="buttons">
        <button type="submit" class="btn submit">Save</button>
        <button class="btn cancel"
                @click="toggleShowEditForm">Close</button>
      </div>
    </form>
    <div class="display" v-else>
      <div class="text-wrapper">
        <p class="mobile-label">Description:</p>
        <p class="text" v-text="description"></p>
      </div>
      <font-awesome-icon class="edit-button"
                         @click="toggleShowEditForm"
                         icon="edit"
                         size="xs" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showEditForm: false,
      editDescrpition: this.description
    }
  },
  methods: {
    ...mapMutations([
      'updateTableRow'
    ]),
    toggleShowEditForm() {
      this.showEditForm = !this.showEditForm
    },
    submitForm() {
      this.updateTableRow({
        ID: this.id,
        Description: this.editDescrpition
      })
      this.showEditForm = false
    }
  }
}
</script>

<style lang="scss">
@import '../assets/variables';

.description-column {
  padding: 0.5rem;
  .edit-description {
    display: flex;
    flex-direction: column;
    .buttons {
      display: flex;
      justify-content: flex-end;
      margin-top: 0.5rem;
    }
  }
  .display {
    display: flex;
    .mobile-label {
      font-weight: bold;
      margin-top: 0;
      margin-bottom: 0.25rem;
      @media #{$breakpoint-sm} {
        display: none;
      }
    }
    .text {
      margin: 0;
    }
    .edit-button {
      cursor: pointer;
      padding: 0 0.5rem;
      margin-top: auto;
      margin-bottom: auto;
      margin-left: auto;
    }
  }
}
</style>
