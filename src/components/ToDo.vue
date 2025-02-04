<template>
  <div>
    <div style="margin-bottom: 20px">
      <input style="margin-right: 20px" type="text" v-model="input" />
      <button @click="addItem">Добавить</button>
    </div>
    <div>
      <button style="margin-right: 20px" @click="filter = null">Все</button>
      <button style="margin-right: 20px" @click="filter = true">
        Выполнены
      </button>
      <button @click="filter = false">Невыполнены</button>
    </div>
    <ul class="list">
      <li class="item" v-for="item in filteredItems" :key="item.id">
        <div class="title">{{ item.title }}</div>
        <div>{{ item.description }}</div>
        <button @click="removeItem(item.id)">Удалить</button>
        <input type="checkbox" v-model="item.done" @change="changeStateItem" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  data() {
    return {
      input: "",
      items: [
        {
          id: 1,
          title: "title1",
          description: "description1",
          done: false,
        },
        {
          id: 2,
          title: "title2",
          description: "description2",
          done: false,
        },
        {
          id: 3,
          title: "title3",
          description: "description3",
          done: false,
        },
      ],
      filter: null,
    };
  },
  mounted() {
    const items = localStorage.getItem("items");
    if (items) {
      this.items = JSON.parse(items);
    }
  },
  computed: {
    filteredItems() {
      if (this.filter !== null) {
        return this.items.filter((el) => el.done === this.filter);
      } else {
        return this.items;
      }
    },
  },
  methods: {
    addItem() {
      this.items.push({
        id: this.items.length + 1,
        title: this.input,
        description: `description${this.items.length + 1}`,
        done: false,
      });
      this.input = "";
      localStorage.setItem("items", JSON.stringify(this.items));
    },
    removeItem(id) {
      this.items.splice(
        this.items.findIndex((el) => el.id === id),
        1
      );
      localStorage.setItem("items", JSON.stringify(this.items));
    },
    changeStateItem() {
      localStorage.setItem("items", JSON.stringify(this.items));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.item {
  display: flex;
  padding: 30px;
  background: aqua;
  margin-bottom: 10px;
}
.title {
  margin-right: 20px;
}
</style>
