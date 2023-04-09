<template>
  <div id="profile">
    <b-container class="bv-example-row" id="formEdit" @click.prevent="edit">
      <b-row>
        <b-col>
          <p id="labelEdit">Photo profile:</p>
          <p id="labelEdit">Username:</p>
          <p id="labelEdit">Nacionality:</p>
          <p id="labelEdit">Password:</p>
        </b-col>
        <b-col>
          <b-form-input
            style="color: #fff8f7"
            id="user"
            type="url"
            v-model="form.photo"
            :placeholder="getLoggedUser.photo"
          ></b-form-input>
          <b-form-input
            style="color: #fff8f7"
            id="user"
            type="text"
            v-model="form.username"
            :placeholder="getLoggedUser.username"
          ></b-form-input>
          <lang-flag id="flagEdit" :iso="getLoggedUser.location" />
          <b-form-input
            style="color: #fff8f7"
            id="pass"
            type="text"
            v-model="form.password"
            :placeholder="getLoggedUser.password"
          ></b-form-input>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="bv-example-row" id="buttonsEdit">
      <b-row>
        <b-col>
          <b-button id="buttonEdit" type="submit">EDIT ACCOUNT</b-button>
        </b-col>
        <b-col>
          <router-link to="/:profileId">
            <b-button id="buttonCancel">CANCEL</b-button>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Editar conta",
  data() {
    return {
      form: {
        photo: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapMutations(["SET_EDIT"]),
    edit() {
      this.SET_EDIT(this.form);
    },
  },
  computed: {
    ...mapGetters(["getLoggedUser"]),
  },
};
</script>

<style>
#buttonCancel {
  border-color: #fef8f8;
  background-color: #070707;
}

#buttonCancel:hover {
  background-color: #fef8f8;
  color: #070707;
}

#user,
#pass {
  border-color: #de2221;
  background-color: #070707;
}

#labelEdit {
  color: #fef8f8;
  padding-bottom: 35px;
}

#flagEdit {
  width: 50px;
  height: 50px;
}

#formEdit {
  padding-top: 100px;
}

#flagEdit {
  padding-top: 50px;
  padding-bottom: 50px;
}

#buttonsEdit {
  padding-bottom: 40px;
}
</style>