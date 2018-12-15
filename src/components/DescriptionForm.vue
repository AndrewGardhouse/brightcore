<template>
  <div class="description column">
    <form class="edit-description"
          v-if="showEditForm"
          @submit.prevent="submitForm">
      <textarea name="description"
                v-model="editDescrpition"
                v-if="showEditForm"></textarea>
      <div>
        <button type="submit" class="submit">Submit Form</button>
        <button class="cancel-button"
                @click="toggleShowEditForm">Cancel Form</button>
      </div>
    </form>
    <div v-else>
      <p v-text="description"></p>
      <button class="edit-button" @click="toggleShowEditForm">Edit Form</button>
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
.description {
  .edit-description {
    textarea {
      width: 100%;
      resize: none;
    }
  }
}
</style>
