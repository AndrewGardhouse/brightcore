<template>
  <div class="description-column">
    <form class="edit-description"
          v-if="showEditForm"
          @submit.prevent="submitForm">
      <textarea name="description"
                v-model="editDescrpition"
                v-if="showEditForm"></textarea>
      <div>
        <button type="submit" class="submit">Save</button>
        <button class="cancel-button"
                @click="toggleShowEditForm">Close</button>
      </div>
    </form>
    <div class="display" v-else>
      <p class="text" v-text="description"></p>
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

<style lang="scss" scoped>
.description-column {
  padding: 0.5rem;
  .edit-description {
    textarea {
      width: 100%;
      resize: none;
    }
  }
  .display {
    display: flex;
    .edit-button {
      cursor: pointer;
      padding-left: 0.5rem;
      margin-top: auto;
      margin-bottom: auto;
      margin-left: auto;
    }
  }
}
</style>
