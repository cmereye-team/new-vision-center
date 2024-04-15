index
<h1>{{ $t("hello", { name: "vue-i18n" }) }}</h1>
<form>
  <label for="locale-select">{{ $t("language") }}: </label>
  <select id="locale-select" v-model="$i18n.locale">
    <option value="hk">hk</option>
    <option value="cn">cn</option>
    <option value="en">en</option>
  </select>
</form>