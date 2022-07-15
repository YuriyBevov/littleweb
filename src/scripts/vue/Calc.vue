<template>
    <div>
      <div class="calc">
        <h1>Выберите продукт, который Вас интересует: </h1>
        <fieldset>
          <label for="type_landing">Лэндинг</label>
          <input type="radio" name="project_type" id="type_landing" checked @input="showOptions('landing')">
        </fieldset>

        <fieldset>
          <label for="type_site">Многостраничный сайт</label>
          <input type="radio" name="project_type" id="type_site" @input="showOptions('site')">
        </fieldset>

        <fieldset>
          <label for="type_corp">Корпоративный сайт</label>
          <input type="radio" name="project_type" id="type_corp" @input="showOptions('corp')">
        </fieldset>

        <fieldset>
          <label for="type_store">Интернет-магазин</label>
          <input type="radio" name="project_type" id="type_store" @input="showOptions('store')">
        </fieldset>

        <fieldset>
          <label for="type_other">Другое</label>
          <input type="radio" name="project_type" id="type_other" @input="showOptions('other')">
        </fieldset>
      </div>

    </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },

    methods: {
      showOptions(type) {
        console.log(type)
      }
    }
  }
</script>
