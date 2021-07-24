<template>
  <v-list rounded>
    <v-subheader dark>Dashboard</v-subheader>
    <v-list-item-group v-model="selectedItem" color="#fff">
      <v-list-item
        dark
        class="btn-menu"
        v-for="(item, i) in items"
        :key="i"
        @click.native="navigate({ name: item.link })"
      >
        <v-list-item-icon class="icon-btn-list-menu">
          <v-icon size="1rem" v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title
            class="text-btn-list-menu"
            v-text="item.title"
          ></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        dark
        class="btn-menu"
        @click.native="logout()"
      >
        <v-list-item-icon class="icon-btn-list-menu">
          <v-icon size="1rem">mdi-logout-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title
            class="text-btn-list-menu"
          >Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      { title: "Disciplinas", icon: "mdi-paperclip", link: "disciplines" },
      { title: "Perfil", icon: "mdi-clipboard-account", link: "perfil" },
    ],
  }),
  methods: {
    navigate(to) {
      this.$router.push(to);
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.navigate({ name: "login" });
    },
  },
};
</script>

<style scoped>
.text-btn-list-menu {
  font-size: 0.9rem;
  font-weight: 700;
}
.icon-btn-list-menu {
  margin-right: 18px !important;
}
</style>