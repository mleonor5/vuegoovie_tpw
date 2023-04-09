<template>
  <div id="app1">
    <b-row>
      <b-col>
        <h1>Quizzes</h1>
      </b-col>
      <b-col>
        <!-- Filtro -->
        <b-dropdown
          id="dropdown-right"
          right
          text="Filter"
          variant="outline-danger"
          class="m-2"
        >
          <b-dropdown-item href="#">Recents</b-dropdown-item>
          <b-dropdown-item href="#">Best Qualified</b-dropdown-item>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Drama</b-dropdown-item>
          <b-dropdown-item href="#">Animation</b-dropdown-item>
          <b-dropdown-item href="#">More</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>

    <b-container fluid="sm">
      <b-row>
        <b-card-group deck style="margin-top: 30px">
          <b-card
            title="Guess the movies and shows"
            img-src="https://www.indiewire.com/wp-content/uploads/2021/11/best-film-2.jpg?w=780"
            img-alt="Image"
            img-top
            tag="article"
            style="
              max-width: 20rem;
              background-color: transparent;
              color: #fff8f7;
            "
            class="mb-6"
          >
            <b-button href="#" id="button1"
              ><router-link :to="{ name: 'game' }" style="color: #fef8f8">
                Play</router-link
              ></b-button
            >
          </b-card>
          <b-card
            title="Quizz Action"
            img-src="https://nerdiano.com.br/wp-content/uploads/2019/07/john-wick-tv-series-chapter-3-feature-img-geekexchange-061517.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="
              max-width: 20rem;
              background-color: transparent;
              color: #fff8f7;
            "
            class="mb-6"
          >
            <b-button href="#" id="button1"
              ><router-link
                style="color: #fef8f8"
                :to="{ name: 'quizz', params: { quizzId: 'quizz' } }"
              >
                Play</router-link
              ></b-button
            >
          </b-card>
          <b-card
            title="Quizz 2"
            img-src="https://picsum.photos/600/300/?image=96"
            img-alt="Image"
            img-top
            tag="article"
            style="
              max-width: 20rem;
              background-color: transparent;
              color: #fff8f7;
            "
            class="mb-6"
          >
            <b-button href="#" id="button1">
              <router-link
                style="color: #fef8f8"
                :to="{ name: 'quizz2', params: { quizzId: 'quizz2' } }"
              >
                Play</router-link
              ></b-button
            >
          </b-card>
          <b-card
            title="Quizz 3"
            img-src="https://picsum.photos/600/300/?image=451"
            img-alt="Image"
            img-top
            tag="article"
            style="
              max-width: 20rem;
              background-color: transparent;
              color: #fff8f7;
            "
            class="mb-6"
          >
            <b-button href="#" id="button1"
              ><router-link
                style="color: #fef8f8"
                :to="{ name: 'quizz3', params: { quizzId: 'quizz3' } }"
              >
                Play</router-link
              ></b-button
            >
          </b-card>
        </b-card-group>
      </b-row>
      <br /><br />
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>