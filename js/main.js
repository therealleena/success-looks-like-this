var app = new Vue({
    el: '#app',
    data: {
        stockImages:[{}],
        isLoading:false
    },
    created: function () {
        // `this` points to the vm instance
        this.populateFromDb();
    },
    methods: {
        populateFromDb: function () {
            db.collection("stockImages").get().then((querySnapshot) => {
                this.isLoading=true;
                querySnapshot.forEach((doc) => {
                    this.stockImages.push(doc.data())
                });
            }).then(()=> {
                this.isLoading=false;
            });
        }
    }
  })