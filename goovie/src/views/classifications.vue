<template>
  <div id="app1">
    <b-row>
      <b-col>
        <h1>Classifications</h1>
      </b-col>
      <b-col>
        <b-dropdown id="dropdown-right" right text="Filter" variant="outline-danger" class="m-2">
          <b-dropdown-item href="#">Worldwide</b-dropdown-item>
          <b-dropdown-item href="#">National</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
    <b-row>
      <div>
        <b-col>
          <b-table-simple style="margin-top: 30px; margin-left: 260px">
            <b-thead>
              <b-tr>
                <b-th style="color: #fff8f7">Index</b-th>
                <b-th style="color: #fff8f7">Name</b-th>
                <b-th style="color: #fff8f7">Points</b-th>
                <b-th style="color: #fff8f7">Nacionality</b-th>
              </b-tr>
              <b-tr v-for="(user, index) in getUsers" :key="index">
                <b-td v-if="user.type != 'admin'" style="color: #fff8f7">{{index}}</b-td>
                <b-td v-if="user.type != 'admin'" style="color: #fff8f7">{{user.username}}</b-td>
                <b-td v-if="user.type != 'admin'" style="color: #fff8f7">{{user.points}}</b-td>
                <b-td v-if="user.type != 'admin'" style="color: #fff8f7">
                  <lang-flag :iso="user.location" />
                </b-td>
              </b-tr>
            </b-thead>
          </b-table-simple>
        </b-col>
        <b-col></b-col>
      </div>
    </b-row>
    <br /><br /><br /><br /><br /><br />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getUsers"]),
  },
};
</script>