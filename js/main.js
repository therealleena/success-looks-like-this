var app = new Vue({
    el: '#app',
    data: {
        stockImages:[{}],
    },
    created: function () {
        // `this` points to the vm instance
        this.populateFromDb();
    },
    methods: {
        populateFromDb: function () {
            db.collection("stockImages").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.stockImages.push(doc.data())
                });
            });
        }
    }
  })