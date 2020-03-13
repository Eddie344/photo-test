var app = new Vue({
  el: "#app",
  data: {
    filters: [
      {
        id: 1,
        title: "Семейная съёмка"
      },
      {
        id: 2,
        title: "Love story"
      },
      {
        id: 3,
        title: "Lifestyle"
      },
      {
        id: 4,
        title: "Fashion"
      },
      {
        id: 5,
        title: "Glamour"
      }
    ],
    selectedFilter: 0,
    images: [
      {
        url: "img/gallery1.jpg",
        categories: [0, 1]
      },
      {
        url: "img/gallery2.jpg",
        categories: [0, 3]
      },
      {
        url: "img/gallery3.jpg",
        categories: [0, 4]
      },
      {
        url: "img/gallery4.jpg",
        categories: [0, 2]
      },
      {
        url: "img/gallery5.jpg",
        categories: [0, 1]
      },
      {
        url: "img/gallery2.jpg",
        categories: [0, 3]
      },
      {
        url: "img/gallery4.jpg",
        categories: [0, 5]
      },
      {
        url: "img/gallery1.jpg",
        categories: [0, 2]
      }
    ]
  },
  methods: {
    setFilter(id) {
      this.selectedFilter = id;
    }
  }
});
