<template>
  <div class="description-column">
    <form class="edit-description"
          v-if="showEditForm"
          @submit.prevent="submitForm">
      <textarea name="description"
                v-model="editDescrpition"
                v-if="showEditForm"></textarea>
      <div class="buttons">
        <button type="submit" class="submit">Save</button>
        <button class="cancel"
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
    display: flex;
    flex-direction: column;
    textarea {
      font-family: 'Montserrat', sans-serif;
      font-size: 13px;
      padding: 0.25rem;
      color: rgba(26, 26, 26, .9);
      border-color: rgba(26, 26, 26, 0.7);
      resize: none;
    }
    .buttons {
      display: flex;
      justify-content: flex-end;
      margin-top: 0.5rem;
      button {
        margin-left: 0.25rem;
        margin-right: 0.25rem;
        border: none;
        padding: 0.3rem 0.5rem;
        border-radius: 3px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.2s;
        &.submit {
          background-color: rgba(63, 137, 56, 0.7);
          &:hover {
            background-color: rgba(63, 137, 56, 1);
          }
        }
        &.cancel {
          background-color: rgba(201, 58, 51, 0.7);
          &:hover {
            background-color: rgba(201, 58, 51, 1);
          }
        }
      }
    }
  }
  .display {
    display: flex;
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
